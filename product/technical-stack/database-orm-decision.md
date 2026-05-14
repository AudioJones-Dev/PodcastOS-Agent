# Database and ORM Decision

## Purpose

Lock the database and ORM approach for the first Podcast OS web app build.

## Decision

Use Postgres with Drizzle ORM and Drizzle Kit migrations.

## Why Postgres

Podcast OS has relational workflow data:

- Workspaces
- Users
- Memberships
- Clients
- Episodes
- Tasks
- Deliverables
- Approvals
- Comments
- File references
- Reports
- Activity logs

Postgres fits this model better than document-first storage.

## Why Drizzle

Drizzle keeps schema definitions close to TypeScript and supports migration workflows.

Use Drizzle for:

- Typed schema definitions
- Query building
- Migrations
- Relations
- Enum-like workflow fields

## Provider Decision

Use a Postgres-compatible provider.

Default recommendation:

- Neon for managed serverless Postgres

Acceptable alternatives:

- Supabase Postgres
- Local Postgres for development
- Vercel Marketplace Postgres integration

## Schema Rules

- Use UUID primary keys.
- Use explicit foreign keys.
- Use timestamp fields on core records.
- Use status enums or constrained text for workflow state.
- Use indexes on workspace, client, episode, assignee, status, and due-date fields.
- Prefer archive status over destructive deletes.

## Migration Rules

- Migrations must be committed.
- Schema changes should be reviewed before deploy.
- Production migrations should be run intentionally.
- Do not mutate production schema from ad hoc UI experiments.

## Local Development Options

Preferred:

- Local Postgres if available

Fallback:

- Neon development branch

Required env var:

```txt
DATABASE_URL
```

## First Tables

The first scaffold should implement:

- users
- workspaces
- workspace_memberships
- clients
- client_memberships
- episodes
- tasks
- deliverables
- approvals
- comments
- file_references
- activity_logs
- reports
- workflow_templates

## Data Safety Rule

Do not put secrets, raw client media, or private credential material in the database. Store references and metadata only unless a future storage phase explicitly approves native storage.
