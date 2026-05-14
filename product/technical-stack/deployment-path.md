# Deployment Path

## Purpose

Define the default deployment path for the future Podcast OS web app.

## Decision

Use GitHub as source control and Vercel as the default deployment platform.

## Deployment Flow

```txt
Local branch
-> Git commit
-> GitHub push
-> Vercel preview deployment
-> Review
-> Production promotion after approval
```

## Environment Separation

Recommended environments:

- Local
- Preview
- Production

## Database Separation

Recommended database strategy:

- Local database or development branch for local work
- Preview database branch for preview deployments
- Production database for production only

## Production Gate

Do not promote production until:

- Build passes
- Database migrations are reviewed
- Auth works
- Role-based access is tested
- Approval gates are tested
- Client portal visibility is tested
- No secrets are exposed

## Vercel Project Requirements

The future Vercel project should configure:

- Framework: Next.js
- Root directory: repo root, unless app moves to a subdirectory
- Environment variables per environment
- GitHub integration
- Preview deployments enabled

## Deployment Non-Goals for MVP

- No multi-region media storage
- No background media processing
- No direct publishing integrations
- No production activation without manual review

## Rollback Rule

Keep production rollback simple:

- Use Vercel deployment rollback for app code.
- Use reviewed migration strategy for database changes.
- Avoid destructive migrations until backup/restore process is confirmed.
