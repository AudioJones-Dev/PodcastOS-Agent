# Agency Dashboard Wireframe

## Purpose

Give agency owners, admins, and producers an immediate view of what needs attention.

## Primary Users

- Workspace owner
- Agency admin
- Producer

## Layout

```txt
+--------------------------------------------------------------+
| Dashboard                                      [Create menu] |
+--------------------------------------------------------------+
| Attention Strip: Overdue | Waiting Approval | Blocked        |
+--------------------------------------------------------------+
| Status Cards: Clients | Episodes | Tasks | Reports          |
+--------------------------------------------------------------+
| Left: Today / This Week             | Right: Approvals Queue |
| - Due tasks                         | - Pending approvals    |
| - Recordings                        | - Age of request       |
| - Publishing dates                  | - Waiting on           |
+--------------------------------------------------------------+
| Client Production Table                                      |
+--------------------------------------------------------------+
| Recent Activity                                               |
+--------------------------------------------------------------+
```

## Attention Strip

Shows high-priority counts:

- Overdue tasks
- Waiting approvals
- Blocked episodes
- Reports due

Each count links to the filtered view.

## Status Cards

Cards:

- Active clients
- Episodes in production
- Tasks due this week
- Deliverables in review
- Reports due

## Today / This Week Panel

Rows should include:

- Task title
- Client
- Episode
- Owner
- Due date
- Status

Primary actions:

- Open task
- Reassign
- Mark blocked

## Approvals Queue

Rows should include:

- Gate
- Client
- Deliverable
- Waiting on
- Age
- Status

Primary actions:

- Open approval
- Send reminder
- Reassign approver

## Client Production Table

Columns:

- Client
- Tier
- Current episode
- Stage
- Next action
- Owner
- Blocker

## Empty States

No clients:

```txt
Create your first client to start a production workflow.
```

No approvals:

```txt
No pending approvals.
```

No tasks:

```txt
No tasks due right now.
```

## Data Dependencies

- Client
- Episode
- Task
- Deliverable
- Approval
- Report
- Activity Log

## UX Rule

The dashboard should optimize for decisions, not decoration. Every visible section should answer what is happening, who owns it, and what needs action.
