# Create the policy to access the S3 bucket
resource "aws_iam_policy" "em_checkout_ci_policy" {
  name        = "em_checkout-ci-policy"
  path        = "/"
  description = "CI policy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:PutObject",
          "s3:PutObjectAcl"
        ],
        Effect = "Allow",
        Resource = [
          "${aws_s3_bucket.website_bucket.arn}/*"
        ]
      },
      {
        Action = [
          "s3:ListBucket"
        ],
        Effect = "Allow",
        Resource = [
          "${aws_s3_bucket.website_bucket.arn}/*"
        ]
      },
    ]
  })
}

# Attach the policy to our user
resource "aws_iam_policy_attachment" "em_checkout_ci_attachment" {
  name       = "em_checkout-ci-attachment"
  users   = [aws_iam_user.cicd_ops.name]
  policy_arn = aws_iam_policy.em_checkout_ci_policy.arn
}

resource "aws_cloudfront_origin_access_identity" "prod_origin_access_identity" {
  comment = "access-identity-opexwebsite"
}


resource "aws_cloudfront_distribution" "prod_cf_distribution" {
  origin {
    domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
    origin_id   = "opexwebsite"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.prod_origin_access_identity.cloudfront_access_identity_path}"
    }
  }

  enabled         = true
  is_ipv6_enabled = true

  default_root_object = "index.html"
  # aliases = ["${var.frontend_domain}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "opexwebsite"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
  }

  ordered_cache_behavior {
    path_pattern     = "/index.html"
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD", "OPTIONS"]
    target_origin_id = "opexwebsite"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  price_class = "PriceClass_100"

  viewer_certificate {
    cloudfront_default_certificate = true
    # acm_certificate_arn = "${aws_acm_certificate.frontend_certificate.arn}"
    minimum_protocol_version = "TLSv1"
    ssl_support_method = "sni-only"
  }

  retain_on_delete = true

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

data "aws_iam_policy_document" "website_s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.prod_origin_access_identity.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = data.aws_iam_policy_document.prod_s3_policy.json
}

output "prod_frontend_cf_domain_name" {
  value = "${aws_cloudfront_distribution.prod_cf_distribution.domain_name}"
} 