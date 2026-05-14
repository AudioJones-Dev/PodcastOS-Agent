# Agency Admin Dashboard Spec

## Purpose

Give agency owners and admins a simple command surface for client setup, production status, task load, approvals, and deliverable readiness.

## Dashboard Goals

- Show what needs attention today
- Surface blocked work
- Surface approvals waiting on clients
- Surface upcoming recording and publishing dates
- Make client setup easy
- Make user access obvious

## Primary Layout

```txt
Top Bar
Sidebar Navigation
Main Status Grid
Right Action Rail
```

## Main Status Cards

Use compact operational cards:

- Active clients
- Episodes in production
- Tasks due this week
- Waiting approvals
- Blocked deliverables
- Reports due

## Today View

The top of the dashboard should answer:

```txt
What needs attention right now?
```

Recommended sections:

- Overdue tasks
- Waiting client approvals
- Blocked episodes
- Recordings this week
- Publishing deadlines
- Reports due

## Client Setup Flow

The admin dashboard should include a guided setup flow:

1. Add client
2. Select service tier
3. Add client users
4. Assign agency producer
5. Create Client Bible checklist
6. Add brand/assets links
7. Start discovery workflow

## Access Setup Flow

When adding a user:

1. Choose role
2. Choose workspace/client/episode/task scope
3. Choose approval authority if relevant
4. Send invite
5. Log access grant

## Admin Tables

### Clients

| Field | Description |
| --- | --- |
| Client | Client name |
| Tier | Service tier |
| Status | Onboarding, active, paused |
| Producer | Owner |
| Current Episode | Active episode |
| Waiting On | Next blocker |

### Tasks

| Field | Description |
| --- | --- |
| Task | Task name |
| Client | Client name |
| Episode | Episode |
| Assignee | Owner |
| Due | Due date |
| Status | Current state |

### Approvals

| Field | Description |
| --- | --- |
| Gate | Approval type |
| Client | Client name |
| Deliverable | Deliverable name |
| Requested By | Producer |
| Waiting On | Approver |
| Age | Time since request |

## Empty States

Empty states should give a single clear next action:

- No clients: Add first client
- No episodes: Create episode cycle
- No tasks: Add task from workflow
- No approvals: No pending approvals
- No reports: No reports due

## UX Rule

Avoid making the admin dashboard feel like a marketing landing page. It should feel like a clean production console with calm status hierarchy and obvious next actions.
