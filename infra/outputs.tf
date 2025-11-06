output "api_gateway_url" {
  description = "API Gateway HTTP API endpoint URL"
  value       = aws_apigatewayv2_api.waiver_api.api_endpoint
}

output "waiver_api_url" {
  description = "Full URL for waiver submission endpoint"
  value       = "${aws_apigatewayv2_api.waiver_api.api_endpoint}/waiver"
}

output "s3_bucket_name" {
  description = "S3 bucket name for waivers"
  value       = aws_s3_bucket.waivers.id
}

output "lambda_function_name" {
  description = "Lambda function name"
  value       = aws_lambda_function.waiver_handler.function_name
}

output "lambda_function_arn" {
  description = "Lambda function ARN"
  value       = aws_lambda_function.waiver_handler.arn
}

