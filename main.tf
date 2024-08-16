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