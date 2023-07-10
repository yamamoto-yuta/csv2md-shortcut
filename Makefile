.PHONY: i
i:
	docker compose run app npm i

.PHONY: dev
dev:
	docker compose run app npm run dev

.PHONY: build
build:
	docker compose run app npm run build