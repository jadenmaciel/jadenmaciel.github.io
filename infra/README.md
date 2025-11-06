# Terraform Infrastructure for Waiver API

This directory contains Terraform configuration for deploying the waiver submission API.

## Prerequisites

- Terraform >= 1.0
- AWS CLI configured with appropriate credentials
- Node.js 20+ (for building Lambda)
- S3 bucket name (must be globally unique)
- SES verified email addresses

## Setup

1. Copy the example variables file:
```bash
cp terraform.tfvars.example terraform.tfvars
```

2. Edit `terraform.tfvars` with your values:
   - `s3_bucket_name`: Must be globally unique (e.g., `wesleys-cpr-waivers-123456`)
   - `ses_from_email`: Must be verified in SES
   - `ses_to_email`: Email to receive notifications
   - `allowed_origin`: CORS origin (e.g., `https://jadenmaciel.github.io`)

3. Build and package the Lambda function:
```bash
cd ../src/lambda
npm install
npm run package
cd ../../infra
```

4. Initialize Terraform:
```bash
terraform init
```

5. Review the plan:
```bash
terraform plan
```

6. Apply the configuration:
```bash
terraform apply
```

## SES Email Verification

Before deploying, you must verify email addresses in AWS SES:

1. Go to AWS SES Console
2. Verify the sender email (`ses_from_email`)
3. If in SES sandbox, also verify the recipient email (`ses_to_email`)
4. Request production access if needed (removes sandbox restrictions)

## Outputs

After deployment, Terraform outputs:
- `waiver_api_url`: The API endpoint URL (use this for `VITE_WAIVER_API_URL`)
- `api_gateway_url`: Base API Gateway URL
- `s3_bucket_name`: S3 bucket for waivers
- `lambda_function_name`: Lambda function name

## Updating the Lambda

After making changes to the Lambda code:

1. Rebuild and package:
```bash
cd ../src/lambda
npm run package
cd ../../infra
```

2. Apply Terraform (it will detect the new zip file):
```bash
terraform apply
```

## Cleanup

To destroy all resources:
```bash
terraform destroy
```

**Warning**: This will delete the S3 bucket and all stored waivers. Make sure to backup any important data first.

