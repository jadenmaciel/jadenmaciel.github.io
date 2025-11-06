# S3 Bucket for storing waivers
resource "aws_s3_bucket" "waivers" {
  bucket = var.s3_bucket_name

  tags = {
    Name        = "${var.project_name}-waivers"
    Environment = "production"
    Project     = var.project_name
  }
}

resource "aws_s3_bucket_versioning" "waivers" {
  bucket = aws_s3_bucket.waivers.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "waivers" {
  bucket = aws_s3_bucket.waivers.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "waivers" {
  bucket = aws_s3_bucket.waivers.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_lifecycle_configuration" "waivers" {
  bucket = aws_s3_bucket.waivers.id

  rule {
    id     = "delete-old-waivers"
    status = "Enabled"

    expiration {
      days = var.retention_days
    }

    noncurrent_version_expiration {
      noncurrent_days = 30
    }
  }
}

# IAM Role for Lambda
resource "aws_iam_role" "waiver_lambda" {
  name = "${var.project_name}-waiver-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name    = "${var.project_name}-waiver-lambda-role"
    Project = var.project_name
  }
}

# IAM Policy for Lambda (S3 write, SES send, SSM read, CloudWatch logs)
resource "aws_iam_role_policy" "waiver_lambda" {
  name = "${var.project_name}-waiver-lambda-policy"
  role = aws_iam_role.waiver_lambda.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:PutObjectAcl"
        ]
        Resource = "${aws_s3_bucket.waivers.arn}/waivers/*"
      },
      {
        Effect = "Allow"
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "ssm:GetParameter",
          "ssm:GetParameters"
        ]
        Resource = [
          "arn:aws:ssm:${var.aws_region}:*:parameter/${var.project_name}/waiver-api/*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:${var.aws_region}:*:*"
      }
    ]
  })
}

# Lambda Function
resource "aws_lambda_function" "waiver_handler" {
  filename         = "../src/lambda/waiver-handler.zip"
  function_name    = "${var.project_name}-waiver-handler"
  role            = aws_iam_role.waiver_lambda.arn
  handler         = "waiver-handler.handler"
  runtime         = var.lambda_runtime
  timeout         = var.lambda_timeout
  memory_size     = var.lambda_memory_size
  source_code_hash = filebase64sha256("../src/lambda/waiver-handler.zip")

  environment {
    variables = {
      NODE_ENV = "production"
    }
  }

  tags = {
    Name    = "${var.project_name}-waiver-handler"
    Project = var.project_name
  }
}

# CloudWatch Log Group
resource "aws_cloudwatch_log_group" "waiver_lambda" {
  name              = "/aws/lambda/${aws_lambda_function.waiver_handler.function_name}"
  retention_in_days = 30

  tags = {
    Name    = "${var.project_name}-waiver-lambda-logs"
    Project = var.project_name
  }
}

# API Gateway HTTP API
resource "aws_apigatewayv2_api" "waiver_api" {
  name          = "${var.project_name}-waiver-api"
  protocol_type = "HTTP"
  description   = "API Gateway for waiver submissions"

  cors_configuration {
    allow_origins = [var.allowed_origin]
    allow_methods = ["POST", "OPTIONS"]
    allow_headers = ["content-type"]
    max_age       = 300
  }

  tags = {
    Name    = "${var.project_name}-waiver-api"
    Project = var.project_name
  }
}

# API Gateway Integration
resource "aws_apigatewayv2_integration" "waiver_lambda" {
  api_id = aws_apigatewayv2_api.waiver_api.id

  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.waiver_handler.invoke_arn
  integration_method = "POST"
}

# API Gateway Route
resource "aws_apigatewayv2_route" "waiver_post" {
  api_id    = aws_apigatewayv2_api.waiver_api.id
  route_key = "POST /waiver"

  target = "integrations/${aws_apigatewayv2_integration.waiver_lambda.id}"
}

# API Gateway Route for OPTIONS (CORS preflight)
resource "aws_apigatewayv2_route" "waiver_options" {
  api_id    = aws_apigatewayv2_api.waiver_api.id
  route_key = "OPTIONS /waiver"

  target = "integrations/${aws_apigatewayv2_integration.waiver_lambda.id}"
}

# Lambda Permission for API Gateway
resource "aws_lambda_permission" "waiver_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.waiver_handler.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.waiver_api.execution_arn}/*/*"
}

# API Gateway Stage
resource "aws_apigatewayv2_stage" "waiver_api" {
  api_id      = aws_apigatewayv2_api.waiver_api.id
  name        = "$default"
  auto_deploy = true

  access_log_settings {
    destination_arn = aws_cloudwatch_log_group.waiver_api.arn
    format = jsonencode({
      requestId      = "$context.requestId"
      ip             = "$context.identity.sourceIp"
      requestTime    = "$context.requestTime"
      httpMethod     = "$context.httpMethod"
      routeKey       = "$context.routeKey"
      status         = "$context.status"
      protocol       = "$context.protocol"
      responseLength = "$context.responseLength"
    })
  }

  tags = {
    Name    = "${var.project_name}-waiver-api-stage"
    Project = var.project_name
  }
}

# CloudWatch Log Group for API Gateway
resource "aws_cloudwatch_log_group" "waiver_api" {
  name              = "/aws/apigateway/${aws_apigatewayv2_api.waiver_api.name}"
  retention_in_days = 30

  tags = {
    Name    = "${var.project_name}-waiver-api-logs"
    Project = var.project_name
  }
}

# SSM Parameters
resource "aws_ssm_parameter" "s3_bucket" {
  name  = "/${var.project_name}/waiver-api/s3-bucket"
  type  = "String"
  value = aws_s3_bucket.waivers.id

  tags = {
    Name    = "${var.project_name}-waiver-api-s3-bucket"
    Project = var.project_name
  }
}

resource "aws_ssm_parameter" "ses_from" {
  name  = "/${var.project_name}/waiver-api/ses-from"
  type  = "String"
  value = var.ses_from_email

  tags = {
    Name    = "${var.project_name}-waiver-api-ses-from"
    Project = var.project_name
  }
}

resource "aws_ssm_parameter" "ses_to" {
  name  = "/${var.project_name}/waiver-api/ses-to"
  type  = "String"
  value = var.ses_to_email

  tags = {
    Name    = "${var.project_name}/waiver-api-ses-to"
    Project = var.project_name
  }
}

resource "aws_ssm_parameter" "allowed_origin" {
  name  = "/${var.project_name}/waiver-api/allowed-origin"
  type  = "String"
  value = var.allowed_origin

  tags = {
    Name    = "${var.project_name}-waiver-api-allowed-origin"
    Project = var.project_name
  }
}

