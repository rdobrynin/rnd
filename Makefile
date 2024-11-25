run:
	@make down && docker compose up -d && docker exec backend yarn migration:run

down:
	@docker compose down --remove-orphans
