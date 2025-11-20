import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { v4 as uuidv4 } from 'uuid';
// @ts-ignore - JSON import for esbuild
import waiverSchema from './schemas/waiver.json' assert { type: 'json' };

const s3Client = new S3Client({});
const sesClient = new SESClient({});
const ssmClient = new SSMClient({});

// Timezone configuration for Fresno, CA
const TIMEZONE = 'America/Los_Angeles';

/**
 * Format a date in Pacific Time for display
 */
function formatInPacificTime(date: Date | string, options: Intl.DateTimeFormatOptions = {}): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    ...options,
  }).format(dateObj);
}

/**
 * Get current date in Pacific Time for S3 path generation
 * Returns date components in Pacific Time
 */
function getPacificDateComponents(): { year: number; month: number; day: number } {
  const now = new Date();
  const pacificDateString = new Intl.DateTimeFormat('en-US', {
    timeZone: TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);

  const [month, day, year] = pacificDateString.split('/').map(Number);
  return { year, month, day };
}

interface WaiverPayload {
  participantName: string;
  email: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
  classCourse: string;
  classDateTime: string;
  location: string;
  assumptionOfRisk: boolean;
  releaseIndemnity: boolean;
  photoConsent?: boolean;
  isMinor?: boolean;
  guardianName?: string;
  guardianSignature?: string;
  signatureName: string;
  paymentAcknowledgment: boolean;
  agreeToTerms: boolean;
}

interface StoredWaiver {
  payload: WaiverPayload;
  meta: {
    ip: string;
    userAgent: string;
    receivedAt: string;
    id: string;
  };
}

async function getSSMParameter(name: string): Promise<string> {
  try {
    const command = new GetParameterCommand({
      Name: name,
      WithDecryption: false,
    });
    const response = await ssmClient.send(command);
    return response.Parameter?.Value || '';
  } catch (error) {
    console.error(`Failed to get SSM parameter ${name}:`, error);
    throw error;
  }
}

function maskPII(value: string): string {
  if (!value || value.length < 4) return '****';
  return value.slice(0, 2) + '****' + value.slice(-2);
}

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Get CORS origin from SSM
  let allowedOrigin = '';
  try {
    allowedOrigin = await getSSMParameter('/wesleys-cpr/waiver-api/allowed-origin');
  } catch (error) {
    console.error('Failed to get allowed origin from SSM, using default');
    allowedOrigin = 'https://jadenmaciel.github.io';
  }

  headers['Access-Control-Allow-Origin'] = allowedOrigin;
  headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
  headers['Access-Control-Allow-Headers'] = 'Content-Type';

  // Handle CORS preflight
  if (event.requestContext.http.method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST
  if (event.requestContext.http.method !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ errors: ['Method not allowed'] }),
    };
  }

  // Parse and validate JSON
  let payload: WaiverPayload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ errors: ['Invalid JSON'] }),
    };
  }

  // Validate against JSON Schema
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(waiverSchema);

  if (!validate(payload)) {
    const errors = validate.errors?.map((err) => {
      const path = err.instancePath || err.schemaPath;
      return `${path} ${err.message}`;
    }) || ['Validation failed'];

    // Log validation errors without PII
    console.error('Validation errors:', errors);

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ errors }),
    };
  }

  // Conditional validation for minors
  if (payload.isMinor && (!payload.guardianName || !payload.guardianSignature)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        errors: ['Guardian name and signature are required for minors'],
      }),
    };
  }

  // Generate unique ID and prepare storage
  const waiverId = uuidv4();
  const now = new Date();

  // Use Pacific Time for S3 path organization
  const { year, month, day } = getPacificDateComponents();
  const datePath = `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
  const s3Key = `waivers/${datePath}/${waiverId}.json`;

  const storedWaiver: StoredWaiver = {
    payload,
    meta: {
      ip: event.requestContext.http.sourceIp || 'unknown',
      userAgent: event.requestContext.http.userAgent || 'unknown',
      receivedAt: now.toISOString(),
      id: waiverId,
    },
  };

  // Get S3 bucket name from SSM
  let bucketName = '';
  try {
    bucketName = await getSSMParameter('/wesleys-cpr/waiver-api/s3-bucket');
  } catch (error) {
    console.error('Failed to get S3 bucket from SSM');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ errors: ['Configuration error'] }),
    };
  }

  // Store in S3
  try {
    const putCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: s3Key,
      Body: JSON.stringify(storedWaiver, null, 2),
      ContentType: 'application/json',
      ServerSideEncryption: 'AES256',
    });
    await s3Client.send(putCommand);
  } catch (error) {
    console.error('Failed to store waiver in S3:', error);
    // Don't log full error with PII
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ errors: ['Failed to store waiver'] }),
    };
  }

  // Get SES configuration from SSM
  let sesFrom = '';
  let sesTo = '';
  try {
    sesFrom = await getSSMParameter('/wesleys-cpr/waiver-api/ses-from');
    sesTo = await getSSMParameter('/wesleys-cpr/waiver-api/ses-to');
  } catch (error) {
    console.error('Failed to get SES configuration from SSM, skipping email');
  }

  // Send owner notification email
  if (sesFrom && sesTo) {
    try {
      // Format classDateTime in Pacific Time for display
      const classDateTimeFormatted = formatInPacificTime(payload.classDateTime);
      const receivedAtFormatted = formatInPacificTime(now);

      const ownerEmailBody = `
New Waiver Submission

Participant: ${payload.participantName}
Email: ${payload.email}
Phone: ${maskPII(payload.phone)}
Class: ${payload.classCourse}
Date/Time: ${classDateTimeFormatted} (Pacific Time)
Location: ${payload.location}

Waiver ID: ${waiverId}
S3 Key: ${s3Key}
Received: ${receivedAtFormatted} (Pacific Time)

View in S3: s3://${bucketName}/${s3Key}
      `.trim();

      const ownerEmailCommand = new SendEmailCommand({
        Source: sesFrom,
        Destination: {
          ToAddresses: [sesTo],
        },
        Message: {
          Subject: {
            Data: `New Waiver Submission: ${payload.participantName}`,
          },
          Body: {
            Text: {
              Data: ownerEmailBody,
            },
          },
        },
      });
      await sesClient.send(ownerEmailCommand);
    } catch (error) {
      // Log but don't fail the request if email fails
      console.error('Failed to send owner notification email:', error);
    }
  }

  // Send participant receipt email (optional)
  if (sesFrom && payload.email) {
    try {
      // Format classDateTime in Pacific Time for display
      const classDateTimeFormatted = formatInPacificTime(payload.classDateTime);

      const participantEmailBody = `
Thank you for completing your waiver for Wesley's CPR training.

Your waiver has been received and processed.

Class: ${payload.classCourse}
Date/Time: ${classDateTimeFormatted} (Pacific Time)
Location: ${payload.location}

What to bring:
- Valid ID
- Comfortable clothing for hands-on practice
- Any required pre-course materials (if applicable)

If you have any questions, please contact us:
Phone: (559) 360-1016
Email: j.wes@wesleyscpr.com

We look forward to training with you!

Wesley's CPR
1477 E. Shaw Ave. Suite 126D
Fresno, CA 93710
      `.trim();

      const participantEmailCommand = new SendEmailCommand({
        Source: sesFrom,
        Destination: {
          ToAddresses: [payload.email],
        },
        Message: {
          Subject: {
            Data: 'Waiver Confirmation - Wesley\'s CPR',
          },
          Body: {
            Text: {
              Data: participantEmailBody,
            },
          },
        },
      });
      await sesClient.send(participantEmailCommand);
    } catch (error) {
      // Log but don't fail the request if email fails
      console.error('Failed to send participant receipt email:', error);
    }
  }

  // Return success
  return {
    statusCode: 201,
    headers,
    body: JSON.stringify({
      id: waiverId,
      stored: true,
    }),
  };
};

