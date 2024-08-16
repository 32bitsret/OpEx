terraform {
  cloud {
    organization = "EverydayMoney"
    workspaces {
      name = "EM-Opex-Website"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
    acme = {
      source = "vancluever/acme"
      version = "2.10.0"
    }
  }
}

data "aws_caller_identity" "current" {}

data "aws_partition" "current" {}

provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "em-opex-website"

  tags = {
    Name = "devops"
  }
}

resource "aws_s3_bucket" "www_bucket" {
  bucket = "www.${var.frontend_domain}"
}

resource "aws_s3_bucket_website_configuration" "www_bucket_config" {
  bucket = aws_s3_bucket.www_bucket.id

  redirect_all_requests_to {
    host_name = var.frontend_domain
    protocol  = "https"
  }
}

# resource "aws_s3_bucket_public_access_block" "www_bucket_public_access" {
#   bucket = aws_s3_bucket.www_bucket.id

#   block_public_acls       = false
#   block_public_policy     = false
#   ignore_public_acls      = false
#   restrict_public_buckets = false
# }