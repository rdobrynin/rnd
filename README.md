# rnd test assignment

### Chosen NestJS

Preferred NestJS, it has more readable and predictable code, 
also it built upon Express engine, however if needed, can be build upon Fastify in main.ts `await NestFactory.create`

###
How to launch

1. `docker comopose up -d`
2. `docker exec -it backend sh` and then run `yarn migration:run`

or run

- `make run` - start and up all containers with migrations
- `make down` - stop all containers

tests
- `make test` - run unit tests

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

