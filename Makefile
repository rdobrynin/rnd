run:
	@make down && docker compose up -d

migrate_db:
	@docker exec backend yarn migration:run

down:
	@docker compose down --remove-orphans

test:
	@docker exec backend yarn test
