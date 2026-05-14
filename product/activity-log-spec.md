# Activity Log Spec

## Purpose

Define the audit trail for the Podcast OS web app.

The activity log helps agencies understand who changed what, when approvals happened, what was published, and why a workflow is blocked.

## Logged Event Categories

- Workspace setup
- User invitation
- Role or access change
- Client creation
- Client status change
- Client Bible status change
- Episode creation
- Episode stage change
- Task assignment
- Task status change
- Deliverable created
- Deliverable status change
- File reference added
- Approval requested
- Approval decision
- Revision requested
- Publishing status change
- Report status change
- Workflow template run
- Blocker opened or resolved

## Activity Object

```yaml
activity_log:
  id: uuid
  workspace_id: uuid
  client_id: uuid | null
  episode_id: uuid | null
  actor_id: uuid | null
  action: string
  entity_type: string
  entity_id: uuid | null
  summary: string
  metadata: object
  created_at: datetime
```

## Example Events

```yaml
- action: approval.requested
  entity_type: approval
  summary: Production sheet approval requested for Episode 003.

- action: deliverable.status_changed
  entity_type: deliverable
  summary: Thumbnail moved from internal_review to ready_for_client_review.

- action: access.changed
  entity_type: client_membership
  summary: Jordan Lee was granted client_reviewer access to Acme Podcast.
```

## Visibility

Activity events can be:

- Internal-only
- Client-visible

Default should be internal-only.

Client-visible activity should avoid internal comments, cost data, private agency notes, and contractor details.

## Retention Rule

Activity logs should be append-only for normal users. Administrative correction can be handled by creating a new correcting event.

## MVP Rule

Log important workflow changes first. Do not attempt to log every minor field edit in the first version.
