# Data Model MVP Lock

## Purpose

State the minimum model decisions required before scaffolding the web app.

## Locked MVP Records

The MVP should include these records:

- Workspace
- User
- Workspace Membership
- Client
- Client Membership
- Episode
- Task
- Deliverable
- Approval
- Comment
- File Reference
- Activity Log
- Report
- Workflow Template

## Locked MVP Decisions

### Workspaces

The app is multi-workspace from the beginning so one agency account can manage many clients.

### Clients

Clients belong to a workspace and carry service tier, lifecycle status, primary producer, and Client Bible status.

### Users and Access

Users receive access through workspace membership and client membership records. Client approval authority is explicit.

### Episodes

Episodes are the main production cycle unit and carry stage, status, dates, and client relationship.

### Tasks

Tasks are assigned to one owner and can be scoped to a client or episode.

### Deliverables

Deliverables are first-class records because they drive review, approval, publishing, and client visibility.

### Approvals

Approvals are first-class records and cannot be reduced to a boolean on a deliverable.

### File References

The MVP uses links and paths before native storage.

### Activity Logs

Important workflow and access events should be logged from the beginning.

## Deferred Records

Do not model these in the first app scaffold unless needed later:

- Native recording session media chunks
- Built-in video editor timelines
- Payment subscriptions
- Deep channel analytics snapshots
- Social scheduler queue
- Native file storage objects
- AI generation job tables

## Ready for Wireframes

Phase 2.2 is complete when:

- Core entities are defined.
- Relationships are mapped.
- Approval state machine is defined.
- Activity log rules are defined.
- Screen-to-data map exists.
- MVP deferrals are explicit.

After this, the next best phase is wireframe specification.
