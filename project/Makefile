bash:
	docker run -it nginx bash

build: 
	docker build -t custom-nginx -f ops/Dockerfile .

run: build
	docker run -p 8080:80 custom-nginx

up:
	docker compose up