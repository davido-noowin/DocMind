# DocMind

AI-powered personal knowledge assistant. Upload documents, chat with an AI that
answers questions grounded in your documents (RAG), with citations back to source text.

## Architecture

```
frontend/          Next.js + React + TypeScript — chat UI, uploads, auth pages
services/
  core-api/         Java Spring Boot — auth, users, document metadata, business logic
  ai-service/        Python FastAPI — parsing, chunking, embeddings, RAG, LLM calls
```

- **Primary DB:** PostgreSQL (+ pgvector) — users, doc metadata, embeddings
- **Secondary DB:** MongoDB — raw parsed chunks, chat transcripts

## Local Development

```bash
docker-compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Core API (Java) | http://localhost:8080 |
| AI Service (Python) | http://localhost:8000 |
| Postgres | localhost:5432 |
| MongoDB | localhost:27017 |

## Status

Sprint 0 (Day 0): repo scaffolding, health checks, docker-compose. No feature logic yet.

See `/docs` (coming soon) for sprint plan and architecture decisions.
