### Docker
$ docker build -t user-service-api:latest .
$ docker run --name user-api -d -p 3000:3000 user-service-api:latest
