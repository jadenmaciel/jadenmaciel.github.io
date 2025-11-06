variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-west-2"
}

variable "project_name" {
  description = "Project name prefix for resources"
  type        = string
  default     = "wesleys-cpr"
}

variable "s3_bucket_name" {
  description = "S3 bucket name for storing waivers (must be globally unique)"
  type        = string
}

variable "ses_from_email" {
  description = "SES verified email address for sending notifications"
  type        = string
}

variable "ses_to_email" {
  description = "Email address to receive waiver notifications"
  type        = string
}

variable "allowed_origin" {
  description = "Allowed CORS origin (e.g., https://jadenmaciel.github.io)"
  type        = string
  default     = "https://jadenmaciel.github.io"
}

variable "lambda_runtime" {
  description = "Lambda runtime version"
  type        = string
  default     = "nodejs20.x"
}

variable "lambda_timeout" {
  description = "Lambda function timeout in seconds"
  type        = number
  default     = 30
}

variable "lambda_memory_size" {
  description = "Lambda function memory size in MB"
  type        = number
  default     = 256
}

variable "retention_days" {
  description = "Number of days to retain waivers in S3 before lifecycle deletion"
  type        = number
  default     = 1095 # 3 years
}

