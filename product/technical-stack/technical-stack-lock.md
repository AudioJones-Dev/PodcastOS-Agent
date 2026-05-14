# Technical Stack Lock

## Purpose

Lock the recommended technical stack for the first Podcast OS web app build.

This is a product and architecture decision document. It does not scaffold code yet.

## Stack Decision

```yaml
frontend_framework: Next.js App Router
language: TypeScript
ui: Tailwind CSS + shadcn/ui + lucide-react
runtime_model: Server Components first, Client Components only for interactivity
mutations: Server Actions for app forms, Route Handlers for webhooks/public APIs
auth: Auth.js for identity and session handling
authorization: database-backed workspace/client membership checks
database: Postgres
orm: Drizzle ORM
migrations: Drizzle Kit
file_strategy_mvp: external file/link references
deployment_default: Vercel
repo_source: GitHub
```

## Why This Stack

Podcast OS is a workflow-heavy B2B app with dashboards, forms, approvals, task state, and role-based access.

The stack should optimize for:

- Fast product iteration
- Strong TypeScript models
- Server-rendered data views
- Secure mutation handling
- Clear database schema ownership
- Simple deployment from GitHub
- Future integration with storage, publishing, analytics, and agent workflow runners

## Locked Choices

### Next.js App Router

Use App Router for layouts, nested routes, Server Components, Server Actions, loading states, and route groups.

### TypeScript

All app code should be TypeScript.

### Tailwind CSS, shadcn/ui, and lucide-react

Use shadcn/ui primitives for dashboard, form, table, dialog, tabs, sheet, dropdown, badge, and empty-state patterns. Use lucide-react for interface icons.

### Auth.js

Use Auth.js for authentication and sessions. Do not rely on Auth.js roles alone for business permissions.

### Postgres and Drizzle

Use Postgres as the system of record. Use Drizzle ORM and Drizzle Kit for typed schema and migrations.

### File and Link References First

MVP should store references to files and external links, not native media assets.

### Vercel Deployment

Use Vercel as the default deployment target for the future Next.js app, with GitHub as the source of truth.

## Explicit Non-Choices for MVP

- No Firebase
- No built-in recorder
- No built-in video editor
- No native file storage as the first milestone
- No automated publishing without approval gates
- No payment system until the production workflow is useful

## Source References

- Next.js App Router docs: https://nextjs.org/docs/app
- Next.js authentication and authorization guide: https://nextjs.org/docs/app/guides/authentication
- Auth.js: https://authjs.dev/
- Drizzle schema docs: https://orm.drizzle.team/docs/sql-schema-declaration
- Drizzle migrations docs: https://orm.drizzle.team/docs/migrations
- Vercel Next.js docs: https://vercel.com/docs/frameworks/nextjs
- Vercel Postgres storage docs: https://vercel.com/docs/storage/vercel-postgres
