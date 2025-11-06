# Privacy & Data Handling

This document outlines how Wesley's CPR handles personal information collected through the waiver submission process.

## Data Minimization

We collect only the information necessary for:
- Training administration and certification records
- Emergency contact during training sessions
- Legal compliance (waiver requirements)
- Communication about training sessions

## Data Collected

The waiver form collects:
- **Participant Information**: Name, email, phone number
- **Emergency Contact**: Name and phone number
- **Class Information**: Course name, date/time, location
- **Legal Acknowledgments**: Assumption of risk, release/indemnity, photo consent (optional)
- **Minor Information**: Guardian name and signature (if participant is under 18)
- **Electronic Signature**: Typed name as signature
- **Payment Acknowledgment**: Confirmation of fee disclosure understanding

## Data Storage

- **Location**: AWS S3 (private bucket, encrypted at rest)
- **Format**: JSON files organized by date (`waivers/YYYY/MM/DD/{uuid}.json`)
- **Access**: Private bucket with no public access; only authorized AWS services can write
- **Versioning**: Enabled for audit trail and recovery

## Data Retention

- **Default Retention**: 3 years (1095 days)
- **Rationale**: Required for certification records and potential legal compliance
- **Lifecycle Policy**: Automatic deletion after retention period
- **Version History**: Non-current versions retained for 30 days

## Data Access

- **Owner Access**: Via AWS S3 console or CLI (requires AWS credentials)
- **No Public Access**: Bucket is private; no public URLs or web access
- **Export Procedure**: Contact owner to request data export (see below)

## Data Export

To request a copy of your waiver data:
1. Contact: j.wes@wesleyscprfresno.com or (559) 360-1016
2. Provide: Your name, email, and approximate submission date
3. Timeline: Export provided within 5 business days
4. Format: JSON or PDF (as requested)

## Data Security

- **Encryption**: AES-256 server-side encryption in S3
- **Transmission**: HTTPS/TLS for all API requests
- **Access Control**: IAM roles with least-privilege permissions
- **Logging**: No PII logged in CloudWatch; only masked identifiers
- **CORS**: Restricted to authorized origin (GitHub Pages domain)

## Email Communications

- **Owner Notifications**: Sent via AWS SES to verified email address
- **Participant Receipts**: Optional confirmation email sent to participant
- **Email Content**: Includes class details and contact information
- **Email Storage**: Not stored separately; only in S3 waiver records

## Third-Party Services

- **AWS Services**: S3 (storage), Lambda (processing), SES (email), SSM (configuration)
- **No Analytics**: No tracking, cookies, or marketing pixels
- **No Data Sharing**: Waiver data is not shared with third parties

## Compliance

- **Legal Basis**: Waiver required for participation in training
- **Retention Compliance**: 3-year retention aligns with certification record requirements
- **Access Rights**: Participants can request data export or deletion (subject to retention requirements)

## Contact

For privacy questions or data requests:
- **Email**: j.wes@wesleyscprfresno.com
- **Phone**: (559) 360-1016
- **Address**: 1477 E. Shaw Ave. Suite 126D, Fresno, CA 93710

## Updates

This policy may be updated to reflect changes in data handling practices. Last updated: 2024.

