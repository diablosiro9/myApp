.PHONY: all up down clean backend frontend db logs

# Build and start all services
all: up

# Start the Docker containers
up:
	docker-compose up --build -d

#Commande for starting expo
start-expo:
	cd frontend && npx expo start --tunnel

# Stop all running containers
down:
	docker-compose down

# View logs of all services
logs:
	docker-compose logs -f

# Clean up all containers, networks, volumes, and images
clean:
	docker-compose down --volumes --rmi all

# Specific service management
backend:
	docker-compose up --build -d backend

frontend:
	docker-compose up --build -d frontend

db:
	docker-compose up --build -d db

