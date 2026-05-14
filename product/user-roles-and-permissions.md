# User Roles and Permissions

## Purpose

Define access levels for the Podcast OS web app so agencies, clients, contractors, hosts, and reviewers see only what they need.

## Role Summary

| Role | Primary Use | Access Level |
| --- | --- | --- |
| Workspace Owner | Owns the agency account | Full |
| Agency Admin | Manages clients, users, settings | High |
| Producer | Runs production workflows | High |
| Editor | Completes assigned editing tasks | Limited |
| Contractor | Completes assigned production tasks | Limited |
| Client Owner | Reviews client account and approvals | Client-scoped |
| Client Reviewer | Reviews assigned deliverables | Review-only |
| Host/Guest | Views briefs and recording details | Minimal |

## Permission Matrix

| Capability | Owner | Admin | Producer | Editor | Contractor | Client Owner | Client Reviewer | Host/Guest |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Manage workspace settings | yes | yes | no | no | no | no | no | no |
| Add users | yes | yes | no | no | no | no | no | no |
| Create clients | yes | yes | yes | no | no | no | no | no |
| Edit Client Bible | yes | yes | yes | no | no | review | review | no |
| Create episodes | yes | yes | yes | no | no | no | no | no |
| Assign tasks | yes | yes | yes | no | no | no | no | no |
| Complete assigned tasks | yes | yes | yes | yes | yes | no | no | no |
| Upload or link deliverables | yes | yes | yes | yes | yes | no | no | no |
| Request approval | yes | yes | yes | no | no | no | no | no |
| Approve deliverables | yes | yes | yes | no | no | yes | yes | no |
| Publish content | yes | yes | yes | no | no | no | no | no |
| View reports | yes | yes | yes | limited | limited | yes | yes | no |
| View host brief | yes | yes | yes | yes | yes | yes | yes | yes |

## Access Scopes

```yaml
access_scope:
  workspace: all clients and settings
  client: one assigned client
  episode: one assigned episode
  task: one assigned task
  deliverable: one assigned deliverable
```

## Client Visibility Rule

Clients should see:

- Approved strategy summaries
- Items awaiting approval
- Current episode status
- Final deliverables
- Reports

Clients should not see:

- Internal agency notes
- Contractor notes unless marked client-visible
- Pricing/admin notes unless intentionally exposed
- Internal agent routing
- Private task comments

## Contractor Visibility Rule

Contractors should see only:

- Assigned tasks
- Required input files or links
- Deliverable requirements
- Due dates
- Relevant episode context

Contractors should not see:

- Full client business strategy unless needed
- Financial details
- Unassigned client accounts
- Private approval conversations

## Approval Authority

Approval authority can be configured per client and per gate.

```yaml
approval_authority:
  gate: publishing_approval
  approvers:
    - producer
    - client_owner
  mode: any_one | all_required
```

## Default Rule

Default to least access. Increase access intentionally by role, client, episode, task, or deliverable.
