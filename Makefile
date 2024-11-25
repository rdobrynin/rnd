run:
	@make down && docker compose up -d && docker exec backend yarn migration:run

migrate_db:
	@ocker exec backend yarn migration:run

down:
	@docker compose down --remove-orphans

test:
	@docker exec backend yarn test
