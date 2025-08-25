# Freight Fleet — Full‑stack MVP

B2B logistics site with a polished, mobile‑first Next.js frontend and a minimal .NET 8 API backend. Run locally or via Docker Compose with Nginx reverse proxy.

## Quick start (Docker)

• Copy envs:

```sh
cp frontend/.env.example frontend/.env.local 2>/dev/null || true
```

• Build and run:

```sh
docker compose up --build
```

- App: <http://localhost:8080>
- Health: <http://localhost:8080/api/health>

## Local dev

Frontend:

```sh
cd frontend
npm i
npm run dev
```

Backend:

```sh
cd backend/Freight.Api
dotnet restore
dotnet run
```

## Environment

Frontend `.env` keys:

- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_POSTHOG_KEY
- NEXT_PUBLIC_AAD_B2C_TENANT, CLIENT_ID, AUTHORITY, REDIRECT_URI
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (optional for admin route planner)

Backend `appsettings.json` keys:

- ConnectionStrings:Default (SQLite)
- AzureAdB2C: Tenant, ClientId, Audience, Authority

## License

Proprietary — for internal evaluation.

## CI/CD

GitHub Actions workflow at `.github/workflows/ci.yml` runs on all branches (push and PR):

- Frontend: install, lint, build (Node 20)
- Backend: restore and build (.NET 8)
- On push, builds and pushes Docker images to Docker Hub:
	- Frontend tags: `jassra/myfreight:fe-<sha7>`, `jassra/myfreight:fe-latest`
	- Backend tags: `jassra/myfreight:be-<sha7>`, `jassra/myfreight:be-latest`

Repository secrets required:

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
