resource "aws_route53_record" "apex_domain" {
  zone_id = var.domain_r53_host_id
  name    = var.frontend_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.prod_cf_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.prod_cf_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

# resource "aws_route53_record" "www_domain" {
#   zone_id = var.domain_r53_host_id
#   name    = "www.${var.frontend_domain}"
#   type    = "A"

#   alias {
#     name                   = aws_s3_bucket_website_configuration.www_bucket_config.website_domain
#     zone_id                = aws_s3_bucket.www_bucket.hosted_zone_id
#     evaluate_target_health = false
#   }
# }