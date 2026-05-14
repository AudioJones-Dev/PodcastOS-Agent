# Entity Relationship Map

## Purpose

Describe how Podcast OS web app records connect to each other.

## High-Level Relationship Diagram

```txt
Workspace
  -> Workspace Membership
  -> Client
      -> Client Membership
      -> Episode
          -> Task
          -> Deliverable
          -> Approval
          -> File Reference
          -> Report
      -> Task
      -> Deliverable
      -> Approval
      -> File Reference
      -> Report
  -> Workflow Template
  -> Activity Log
```

## Relationship Rules

### Workspace to Client

- A workspace can have many clients.
- A client belongs to one workspace.
- Client records inherit workspace-level security and settings.

### User to Workspace

- A user can belong to many workspaces.
- Workspace-level role is stored in `workspace_membership`.
- Workspace role does not automatically grant client approval authority.

### User to Client

- A user can have client-scoped access through `client_membership`.
- Client access can be narrower than workspace access.
- Client approval authority is explicit.

### Client to Episode

- A client can have many episodes.
- An episode belongs to one client.
- Episode status should roll up to client dashboard status.

### Episode to Task

- An episode can have many tasks.
- A task can also be client-level without an episode.
- A task should have one owner when active.

### Task to Deliverable

- A task can create one or more deliverables.
- A deliverable can reference the task that created it.
- A deliverable can exist without a task when created manually.

### Deliverable to Approval

- A deliverable can have zero or many approvals over time.
- Only one active approval should exist for the same deliverable and gate at a time.
- Published state requires the relevant approval gate to be approved.

### Deliverable to File Reference

- A deliverable can have many file references.
- File references can be local paths or external links.
- Client visibility is controlled on both deliverable and file reference.

### Report to Approval

- Reports that leave the agency require report approval.
- A report can reference an approval record.

### Activity Log

- Important changes should write activity records.
- Activity logs can attach to workspace, client, episode, or specific entity records through metadata.

## Rollup Status Rules

### Episode Status

```yaml
episode_rollup:
  blocked: any open blocker exists
  waiting_approval: any required approval is pending
  active: at least one task or deliverable is active
  complete: all required deliverables complete and distribution logged
```

### Client Status

```yaml
client_rollup:
  onboarding: client bible not approved
  active: at least one active episode or recurring workflow
  paused: manually paused
  archived: manually archived
```

## Data Integrity Rules

- Delete should usually mean archive, not hard delete.
- Activity logs should not be editable by normal users.
- Approval decisions should not be silently overwritten.
- Client-visible records should never expose internal-only comments or files.
- External file links should preserve original provider and label.
