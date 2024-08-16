variable "region" {
  default = "eu-west-3"
}

# SSL
variable "frontend_domain" {
  default = "everydaymoney.app"
}

variable "acme_registration_email" {
  default = "contact@everydaymoney.ng"
}

variable "acme_server_url" {
  default = "https://acme-v02.api.letsencrypt.org/directory"
}

variable "domain_r53_host_id" {
  default = "Z0622225CUUHH4D47AD0"
}