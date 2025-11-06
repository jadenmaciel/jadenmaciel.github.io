# Waiver Handler Lambda

AWS Lambda function for processing waiver submissions.

## Prerequisites

- Node.js 20+
- npm
- AWS CLI configured
- Terraform (for infrastructure deployment)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the Lambda bundle:
```bash
npm run build
```

This uses esbuild to bundle the TypeScript code into a single ESM file.

3. Package for deployment:
```bash
npm run package
```

This creates `waiver-handler.zip` which can be uploaded to Lambda.

## Local Development

The Lambda handler uses:
- **AJV** for JSON Schema validation
- **AWS SDK v3** for S3, SES, and SSM
- **UUID** for generating unique waiver IDs

## Environment Variables

The Lambda reads configuration from AWS Systems Manager Parameter Store:
- `/wesleys-cpr/waiver-api/s3-bucket` - S3 bucket name
- `/wesleys-cpr/waiver-api/ses-from` - SES sender email
- `/wesleys-cpr/waiver-api/ses-to` - Owner notification email
- `/wesleys-cpr/waiver-api/allowed-origin` - CORS allowed origin

## Testing

Unit tests should be added to validate:
- Schema validation (happy path and common failures)
- S3 storage logic
- Email sending logic
- Error handling

## Deployment

Deployment is handled via Terraform in the `infra/` directory. The Terraform configuration:
1. Builds and packages the Lambda function
2. Creates the Lambda function in AWS
3. Sets up API Gateway HTTP API
4. Configures IAM roles and permissions
5. Creates SSM parameters

See `infra/README.md` for deployment instructions.

