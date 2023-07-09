.PHONY: dev
dev:
	docker compose run app npm run dev

.PHONY: build
build:
	docker compose run app npm run build