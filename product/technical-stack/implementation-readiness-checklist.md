# Implementation Readiness Checklist

## Purpose

Define what must be true before Phase 2.5 app scaffolding begins.

## Phase 2.4 Completion Checklist

- [x] Framework decision documented
- [x] TypeScript decision documented
- [x] UI system decision documented
- [x] Auth decision documented
- [x] Authorization enforcement model documented
- [x] Database decision documented
- [x] ORM decision documented
- [x] File/link strategy documented
- [x] Local development workflow documented
- [x] Deployment path documented

## Before Scaffold

Confirm:

- Existing Markdown specs should stay in repo root.
- App code should be scaffolded into the existing repo root unless a separate `apps/web` layout is chosen.
- Database provider is selected.
- Auth provider settings are available.
- Local `.env.local` can be created without committing secrets.
- Vercel project strategy is approved.

## Scaffold Candidate

Default:

```bash
npx create-next-app@latest . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

## First Implementation Slice

The first app slice should include:

1. App shell
2. Mock or seed-backed dashboard
3. Client setup route
4. Episode pipeline route
5. Task detail route
6. Deliverable review route
7. Client portal route

## Stop Conditions

Stop before scaffolding if:

- The operator wants a separate app repo.
- The operator wants a monorepo layout.
- The operator wants Supabase Auth instead of Auth.js.
- The operator wants native file storage in MVP.
- The operator wants production deployment before local validation.
