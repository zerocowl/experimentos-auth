# API with microservices

## Running the example (docker-compose)

Execute `docker network create infrastructure && cp .env.example .env && docker-compose up -d` from the root of the repository

## Accessing the API itself and swagger docs for the API

- Swagger docs for the API will be accessible locally via URI "**http://localhost:8000/api**"

## Launch services for integration testing (using docker-compose)

- Execute `cp .env.example .env && cp .env.test.example .env.test`

- Run `cd ./gateway && npm install && npm run test` from the root of this repo

## Services

- API gateway
- Token service - responsible for creating, decoding, destroying JWT tokens for users
- User service - responsible for CRUD operations on users
- Tasks service - responsible for CRUD operations on users tasks records
- The service interact via **TCP sockets**

## Example CURL TASKS

```
curl --location --request GET 'http://localhost:8000/tasks' \
--header 'accept: application/json' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYwYWFmOGNkMjRlYTAwMmU0YTllY2IiLCJpYXQiOjE2MDAxNzA3NDQsImV4cCI6MTYwMjc2Mjc0NH0.Z31E_GQ_5GG7vGfNZ7po4Odnt8i1hOqCZHTLgEYShzM'
```

TESTE
