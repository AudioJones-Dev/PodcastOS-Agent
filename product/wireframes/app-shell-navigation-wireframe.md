# App Shell and Navigation Wireframe

## Purpose

Define the persistent app shell used across the Podcast OS web app.

## Users

All signed-in users.

## Layout

```txt
+--------------------------------------------------------------+
| Top Bar: Workspace switcher | Search | Create | Profile      |
+----------------------+---------------------------------------+
| Sidebar              | Main Content                          |
| - Dashboard          |                                       |
| - Clients            | Page Header                           |
| - Episodes           | Filters / Actions                     |
| - Tasks              | Primary Content                       |
| - Deliverables       | Context Panel, if needed              |
| - Approvals          |                                       |
| - Reports            |                                       |
| - Settings           |                                       |
+----------------------+---------------------------------------+
```

## Top Bar

Required elements:

- Workspace switcher
- Global search
- Create menu
- Notification indicator
- Profile menu

## Sidebar

Default agency navigation:

- Dashboard
- Clients
- Episodes
- Tasks
- Deliverables
- Approvals
- Reports
- Settings

Default client navigation:

- Overview
- Approvals
- Episodes
- Deliverables
- Reports
- Brand and Strategy

## Create Menu

Available actions depend on role:

- New client
- New episode
- New task
- New deliverable
- Request approval
- Add file/link

## Global Search

Search should include:

- Clients
- Episodes
- Tasks
- Deliverables
- Reports

## Empty State Behavior

If the user has no workspace access:

```txt
You do not have an active workspace yet.
```

Primary action:

- Accept invite
- Create workspace, owner only

## Permission Behavior

- Hide navigation items the user cannot access.
- Do not show disabled client-only internal routes.
- Client users should not see agency settings or internal task boards unless explicitly granted.

## Data Dependencies

- Workspace
- User
- Workspace Membership
- Client Membership
- Activity Log, for notification summaries

## Implementation Note

The app shell should support both agency mode and client portal mode from the beginning.
