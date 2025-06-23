# express-greet-copilot

A Node.js Express API with health and hello endpoints, CI, Docker, and Railway deployment.

## Features

- `/health`: Returns health status JSON
- `/hello?name=YourName`: Returns a hello message
- SOLID structure: controllers, services, routes, config
- Environment variable configuration
- Jest unit tests
- ESLint for linting
- GitHub Actions CI
- Docker & docker-compose support
- Railway deployment ready

## Setup

```bash
npm install
cp .env.example .env # or create your own .env
npm run dev
```

## Usage

- Health check: `GET /health`
- Hello: `GET /hello?name=YourName`

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Docker

Build and run with Docker:

```bash
docker build -t express-greet-copilot .
docker run -p 3000:3000 --env-file .env express-greet-copilot
```

Or with docker-compose:

```bash
docker-compose up --build
```

## Railway Deployment

1. [Create a Railway account](https://railway.app/)
2. Click "New Project" > "Deploy from GitHub repo"
3. Select this repository
4. Set environment variables in Railway dashboard
5. Deploy!

## Environment Variables

- `PORT`: Port to run the server (default: 3000)

## Project Structure

- `src/controllers/` - Route handlers
- `src/services/` - Business logic
- `src/routes/` - Route definitions
- `src/config/` - Configuration
- `tests/` - Unit tests

---

MIT License
