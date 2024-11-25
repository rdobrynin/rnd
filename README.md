# rnd test assignment

### Chosen NestJS

Preferred NestJS, it has more readable and predictable code, 
also it built upon Express engine, however if needed, can be build upon Fastify in main.ts `await NestFactory.create`

###
How to launch

1. `docker comopose up -d`
2. `docker exec -it backend bash` and then run `yarn migration:run`
or run

- `make run` - ti start and up all containers with migrations
- `makwe down` - stop all containers
