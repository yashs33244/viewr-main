# Docker Setup for ViewR Surveillance Platform

This guide will help you run the ViewR application using Docker and Docker Compose.

## Prerequisites

- Docker Desktop installed on your machine
- Docker Compose (usually included with Docker Desktop)

## Files Created

- `Dockerfile` - Production-ready multi-stage build
- `Dockerfile.dev` - Development build with hot reloading
- `docker-compose.yml` - Production deployment
- `docker-compose.dev.yml` - Development deployment with volume mounting
- `.dockerignore` - Excludes unnecessary files from Docker build

## Quick Start

### Production Deployment

1. **Build and run the production container:**
   ```bash
   bun run docker:up-build
   ```

2. **Access the application:**
   - Open http://localhost:3000 in your browser

3. **Stop the container:**
   ```bash
   bun run docker:down
   ```

### Development with Hot Reloading

1. **Build and run the development container:**
   ```bash
   bun run docker:dev
   ```

2. **Access the application:**
   - Open http://localhost:3001 in your browser
   - Changes to your code will automatically reload

3. **Stop the development container:**
   ```bash
   bun run docker:dev-down
   ```

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun run docker:build` | Build the production Docker image |
| `bun run docker:up` | Start the production container |
| `bun run docker:up-build` | Build and start the production container |
| `bun run docker:down` | Stop and remove the production container |
| `bun run docker:dev` | Build and start the development container with hot reloading |
| `bun run docker:dev-down` | Stop and remove the development container |

## Docker Commands Reference

### Direct Docker Compose Commands

```bash
# Production
docker-compose up --build              # Build and start
docker-compose up -d                   # Start in background
docker-compose down                    # Stop and remove
docker-compose logs -f viewr-app       # View logs

# Development
docker-compose -f docker-compose.dev.yml up --build
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml logs -f viewr-app-dev
```

### Docker Commands

```bash
# Build image manually
docker build -t viewr-surveillance .

# Run container manually
docker run -p 3000:3000 viewr-surveillance

# View running containers
docker ps

# View all containers
docker ps -a

# Remove containers
docker rm <container_id>

# Remove images
docker rmi <image_id>
```

## Container Details

### Production Container
- **Image:** Based on `oven/bun:1.2.16-alpine`
- **Port:** 3000
- **Build:** Multi-stage optimized build
- **User:** Non-root user for security
- **Health Check:** Enabled with curl

### Development Container
- **Image:** Based on `oven/bun:1.2.16-alpine`
- **Port:** 3001
- **Features:** Hot reloading with volume mounting
- **Command:** `bun dev`

## Troubleshooting

### Port Already in Use
If port 3000 or 3001 is already in use:
```bash
# Check what's using the port
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different ports in docker-compose.yml
ports:
  - "3002:3000"  # Use port 3002 instead
```

### Build Issues
```bash
# Clean up Docker system
docker system prune -a

# Rebuild without cache
docker-compose build --no-cache

# Remove all containers and rebuild
docker-compose down --volumes --remove-orphans
docker-compose up --build
```

### View Container Logs
```bash
# Production logs
docker-compose logs -f viewr-app

# Development logs
docker-compose -f docker-compose.dev.yml logs -f viewr-app-dev
```

## Environment Variables

You can add environment variables to the docker-compose files:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_TELEMETRY_DISABLED=1
  - YOUR_CUSTOM_VAR=value
```

Or use an `.env` file:

```yaml
env_file:
  - .env
```

## Security Notes

- The production container runs as a non-root user
- Sensitive files are excluded via `.dockerignore`
- Health checks are enabled for monitoring
- Container networks are isolated

## Performance Optimization

The production Dockerfile uses:
- Multi-stage builds to reduce image size
- Alpine Linux for smaller base image
- Standalone Next.js output for optimal performance
- Proper layer caching for faster builds

## Continuous Integration

This project uses GitHub Actions for continuous integration and automated Docker image publishing.

### GitHub Actions Workflow

The workflow in `.github/workflows/docker-publish.yml` automatically:
- Builds the Docker image
- Pushes to Docker Hub with two tags:
  - `latest`
  - Git SHA (for version tracking)

### Required Secrets

Add these secrets to your GitHub repository:
- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token (not password)

### Docker Hub Repository

The images are published to:
```
docker.io/yashs3324/viewr_main:latest
docker.io/yashs3324/viewr_main:<git-sha>
```

To pull the latest image:
```bash
docker pull yashs3324/viewr_main:latest
``` 