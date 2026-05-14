# Wireframe Index

## Purpose

Define the MVP web app screen structure before implementation begins.

These wireframes are text-first product specs. They describe screen purpose, layout zones, primary actions, data dependencies, empty states, and role behavior.

## MVP Screens

| Screen | Spec File | Primary Users |
| --- | --- | --- |
| App Shell and Navigation | app-shell-navigation-wireframe.md | All users |
| Agency Dashboard | agency-dashboard-wireframe.md | Owner, admin, producer |
| Client Setup | client-setup-wireframe.md | Owner, admin, producer |
| Settings and Access | settings-access-wireframe.md | Owner, admin |
| Episode Pipeline | episode-pipeline-wireframe.md | Admin, producer, editor, contractor |
| Task Detail | task-detail-wireframe.md | Producer, assignee |
| Deliverable Review | deliverable-review-wireframe.md | Producer, client owner, client reviewer |
| Client Portal | client-portal-wireframe.md | Client owner, client reviewer |
| Reports | reports-wireframe.md | Admin, producer, client owner |

## Design Direction

The UI should feel like a calm production console:

- Clear status hierarchy
- Low-friction setup
- Obvious next actions
- Dense but readable operational views
- Client-safe surfaces separated from internal work
- Approval states visible without hunting

## MVP Navigation

```txt
Dashboard
Clients
Episodes
Tasks
Deliverables
Approvals
Reports
Settings
```

## Build Rule

Do not add decorative marketing pages before the operational screens exist.
