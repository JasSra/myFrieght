variable "FRONTEND_IMAGE" {}
variable "BACKEND_IMAGE" {}
variable "SHA_TAG" {}
variable "IS_MAIN" { default = "false" }

group "default" {
  targets = ["frontend", "backend"]
}

target "frontend" {
  context = "frontend"
  dockerfile = "frontend/Dockerfile"
  tags = [
    "${FRONTEND_IMAGE}:${SHA_TAG}",
  ]
  platforms = ["linux/amd64"]
}

target "backend" {
  context = "backend/Freight.Api"
  dockerfile = "backend/Freight.Api/Dockerfile"
  tags = [
    "${BACKEND_IMAGE}:${SHA_TAG}",
  ]
  platforms = ["linux/amd64"]
}

function "add_latest_if_main" {
  params = [target, name]
  result = {
  tags = IS_MAIN == "true" ? concat(target.tags, ["${name}:latest"]) : target.tags
  }
}

target "frontend-release" {
  inherits = ["frontend"]
  target = "frontend"
  tags = add_latest_if_main(target("frontend"), FRONTEND_IMAGE).tags
}

target "backend-release" {
  inherits = ["backend"]
  target = "backend"
  tags = add_latest_if_main(target("backend"), BACKEND_IMAGE).tags
}
