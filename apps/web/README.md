# Podcast OS Web App

Next.js App Router scaffold for the Podcast OS agency/client production console.

## Current Slice

This scaffold includes static MVP routes for:

- Agency dashboard
- Client setup
- Episode pipeline
- Task detail
- Deliverable review
- Reports
- Settings/access
- Client portal

The first implementation uses seed data from `src/lib/mock-data.ts`. Database, auth, and workflow generators are intentionally deferred until the UI scaffold is validated.

## Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Local URL

```txt
http://127.0.0.1:3000/dashboard
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react

See the root repo specs in `product/technical-stack/` for the locked stack and next implementation steps.
