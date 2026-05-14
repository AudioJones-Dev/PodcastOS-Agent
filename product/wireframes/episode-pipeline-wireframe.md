# Episode Pipeline Wireframe

## Purpose

Show every active episode as it moves through the Podcast OS production lifecycle.

## Primary Users

- Agency admin
- Producer
- Editor
- Contractor, scoped view

## Layout

```txt
+--------------------------------------------------------------+
| Episodes                         [Client Filter] [New Episode]|
+--------------------------------------------------------------+
| Pipeline Columns                                               |
| Discovery | Strategy | Planning | Production | Post | Publish |
+--------------------------------------------------------------+
| Episode Cards                                                  |
+--------------------------------------------------------------+
| Bottom or Right Detail Panel for Selected Episode              |
+--------------------------------------------------------------+
```

## Pipeline Columns

Recommended columns:

- Discovery
- Topic Strategy
- Planning
- Pre-Production
- Production
- Post-Production
- Repurposing
- Publishing
- Analytics
- Complete

## Episode Card

Each card should show:

- Episode title
- Client
- Stage
- Status
- Owner
- Next action
- Due date
- Approval badge
- Blocker badge

## Detail Panel

Selected episode shows:

- Strategic goal
- Recording date
- Planned publish date
- Open tasks
- Required deliverables
- Pending approvals
- Recent activity

Actions:

- Open episode
- Add task
- Add deliverable
- Request approval
- Mark blocked

## Filters

- Client
- Owner
- Stage
- Status
- Approval state
- Due date

## Empty States

No episodes:

```txt
Create the first episode cycle for this client.
```

No filtered results:

```txt
No episodes match these filters.
```

## Data Dependencies

- Client
- Episode
- Task
- Deliverable
- Approval
- Activity Log

## Permission Behavior

- Producers see all assigned clients.
- Editors and contractors see only assigned episode/task scope.
- Clients do not use this internal pipeline unless explicitly granted a client-safe episode view.

## UX Rule

Pipeline movement should not bypass approval locks. Dragging or moving an episode into a gated stage should show the missing approval requirement.
