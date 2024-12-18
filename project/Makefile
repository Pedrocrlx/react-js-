bash:
	docker run -it nginx bash

build: 
	docker build -t my-first-react -f ../ops/Dockerfile .

run: build
	docker run -p 8080:80 my-first-react

up:
	docker compose up