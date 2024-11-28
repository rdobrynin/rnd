# rnd test assignment

### Chosen NestJS

Preferred NestJS, it has more readable and predictable code, 
also it built upon Express engine, however if needed, can be built upon Fastify in main.ts `await NestFactory.create`

### How to launch

1. `docker compose up -d`
2. `docker exec -it backend bash` and then run `yarn migration:run`

or run

1. `make run` - start and up all containers
2. `make migrate_db` - run DB migrations

stop containers
- `make down` - stop all containers

DB migrate
- `migrate_db` - run migrations

tests
- `make test` - run unit tests

### Local dependencies Backend
- `cd backend` from root
- `yarn install`

### Local dependencies Frontend
- `cd frontend` from root
- `yarn install`

### URLs

#### Swagger
http://localhost:3002/swagger

#### API
http://localhost:3002/api

#### FE
http://localhost:5173

#### REDIS COMMANDER
http://localhost:8081


#### DB Client
http://localhost:7777


#### Proxy Server
http://localhost:8080/dashboard

