# Next.js Architecture Decisions

## Purpose

Define how the future Podcast OS web app should use Next.js.

## App Router

Use the App Router under `src/app`.

Recommended route groups:

```txt
src/app/
  (agency)/
  (client)/
  (auth)/
  api/
```

## Server Components First

Default to Server Components for:

- Dashboards
- Tables
- Detail pages
- Client portal views
- Report views
- Deliverable read views

Use Client Components only for:

- Interactive forms
- Dialogs
- Menus
- Drag/reorder interactions
- Optimistic UI
- Rich comment inputs

## Data Fetching

Use Server Components and a data access layer for reads.

```txt
Page -> Data Access Layer -> Database
```

Do not fetch sensitive app data directly from Client Components.

## Mutations

Use Server Actions for:

- Client setup forms
- Task status changes
- Deliverable submissions
- Approval decisions
- Access changes
- Report state changes

Use Route Handlers for:

- Webhooks
- External API endpoints
- Future upload callbacks
- Future integration callbacks

## Route Groups

Agency routes:

```txt
/(agency)/dashboard
/(agency)/clients
/(agency)/episodes
/(agency)/tasks
/(agency)/deliverables
/(agency)/approvals
/(agency)/reports
/(agency)/settings
```

Client routes:

```txt
/(client)/portal
/(client)/portal/approvals
/(client)/portal/episodes
/(client)/portal/deliverables
/(client)/portal/reports
```

Auth routes:

```txt
/(auth)/sign-in
/(auth)/accept-invite
```

## Loading and Error States

Each major route segment should define:

- `loading.tsx`
- `error.tsx`
- Empty state component
- Access-denied state

## Lazy Initialization Rule

Database clients, auth helpers, and service SDKs should not be initialized in a way that breaks builds when runtime env vars are unavailable.

Use getter functions for runtime clients when needed.

## Cache Rule

Start conservative. Prioritize correctness over aggressive caching for:

- Approvals
- Access control
- Task status
- Deliverable state

Add cache tags and revalidation only after the core workflow is stable.
