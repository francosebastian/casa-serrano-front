#!/usr/bin/env bash
docker build --build-arg NODE_ENV=development -t casa-serrano-front .
trivy -d image --ignore-unfixed casa-serrano-front:latest
docker-compose down
docker-compose up