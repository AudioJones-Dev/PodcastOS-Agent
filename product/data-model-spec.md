# Web App Data Model Spec

## Purpose

Define the core data model for the Podcast OS web app before scaffolding application code.

The model must support a friendly agency/client UI for setup, access, tasks, deliverables, approvals, reports, and future workflow generators.

## Design Principles

- Keep agency, client, episode, task, and deliverable ownership explicit.
- Make approval gates first-class records.
- Use role and scope records instead of hard-coding visibility into screens.
- Support file and link references before native storage.
- Preserve auditability through activity logs.
- Keep generated Markdown artifacts traceable to app records.

## Core Entities

```txt
Workspace
User
Workspace Membership
Client
Client Membership
Episode
Task
Deliverable
Approval
Comment
File Reference
Activity Log
Report
Workflow Template
```

## Workspace

Represents an agency, team, or operating account.

```yaml
workspace:
  id: uuid
  name: string
  slug: string
  status: active | paused | archived
  created_at: datetime
  updated_at: datetime
```

## User

Represents a person who can sign in.

```yaml
user:
  id: uuid
  email: string
  name: string
  avatar_url: string | null
  status: invited | active | disabled
  created_at: datetime
  updated_at: datetime
```

## Workspace Membership

Connects a user to a workspace-level role.

```yaml
workspace_membership:
  id: uuid
  workspace_id: uuid
  user_id: uuid
  role: owner | admin | producer | contractor | viewer
  status: invited | active | disabled
  created_at: datetime
  updated_at: datetime
```

## Client

Represents an agency client account.

```yaml
client:
  id: uuid
  workspace_id: uuid
  name: string
  slug: string
  service_tier: tier_1 | tier_2 | tier_3
  status: prospect | onboarding | active | paused | archived
  primary_producer_id: uuid | null
  client_bible_status: not_started | draft | in_review | approved | needs_update
  created_at: datetime
  updated_at: datetime
```

## Client Membership

Gives a user scoped access to one client.

```yaml
client_membership:
  id: uuid
  client_id: uuid
  user_id: uuid
  role: client_owner | client_reviewer | host_guest | editor | contractor | viewer
  approval_authority: true | false
  status: invited | active | disabled
  created_at: datetime
  updated_at: datetime
```

## Episode

Represents one production cycle.

```yaml
episode:
  id: uuid
  client_id: uuid
  title: string
  episode_number: string | null
  description: string | null
  strategic_goal: awareness | authority | lead_generation | education | trust_building
  current_stage: discovery | topic_strategy | planning | pre_production | production | post_production | repurposing | publishing | analytics | complete
  status: planned | active | waiting_approval | blocked | complete | archived
  planned_publish_date: date | null
  recording_date: datetime | null
  created_at: datetime
  updated_at: datetime
```

## Task

Represents a unit of work assigned to one person.

```yaml
task:
  id: uuid
  workspace_id: uuid
  client_id: uuid
  episode_id: uuid | null
  title: string
  description: text | null
  assignee_id: uuid | null
  created_by_id: uuid
  status: todo | doing | waiting | blocked | done | canceled
  priority: low | normal | high | urgent
  due_date: datetime | null
  client_visible: true | false
  created_at: datetime
  updated_at: datetime
```

## Deliverable

Represents a production output that can be reviewed, approved, published, or reported on.

```yaml
deliverable:
  id: uuid
  workspace_id: uuid
  client_id: uuid
  episode_id: uuid | null
  task_id: uuid | null
  type: client_bible | topic_cluster | production_sheet | host_brief | long_form_edit | thumbnail | transcript | clip_package | blog | social_caption | publishing_checklist | distribution_log | analytics_report
  title: string
  description: text | null
  owner_id: uuid | null
  status: not_started | draft | internal_review | ready_for_client_review | revision_requested | approved | published | archived
  version: string
  client_visible: true | false
  approval_required: true | false
  created_at: datetime
  updated_at: datetime
```

## Approval

Represents an approval gate attached to a deliverable or strategy action.

```yaml
approval:
  id: uuid
  workspace_id: uuid
  client_id: uuid
  episode_id: uuid | null
  deliverable_id: uuid | null
  gate: client_acceptance | discovery_approval | topic_approval | production_sheet_approval | edit_approval | thumbnail_approval | publishing_approval | report_approval | strategy_approval
  requested_by_id: uuid
  approver_id: uuid | null
  status: pending | approved | rejected | revision_requested | canceled
  decision_notes: text | null
  requested_at: datetime
  decided_at: datetime | null
```

## Comment

Represents discussion on tasks, deliverables, approvals, and reports.

```yaml
comment:
  id: uuid
  workspace_id: uuid
  client_id: uuid
  episode_id: uuid | null
  entity_type: task | deliverable | approval | report | client
  entity_id: uuid
  author_id: uuid
  body: text
  client_visible: true | false
  created_at: datetime
  updated_at: datetime
```

## File Reference

Represents an external file or link before native storage exists.

```yaml
file_reference:
  id: uuid
  workspace_id: uuid
  client_id: uuid
  episode_id: uuid | null
  deliverable_id: uuid | null
  task_id: uuid | null
  label: string
  url_or_path: string
  provider: local_path | google_drive | dropbox | frame_io | youtube | website | other
  client_visible: true | false
  created_by_id: uuid
  created_at: datetime
```

## Activity Log

Represents an audit trail of important actions.

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

## Report

Represents a client-facing or internal report.

```yaml
report:
  id: uuid
  workspace_id: uuid
  client_id: uuid
  episode_id: uuid | null
  type: episode_report | monthly_report | strategy_report
  title: string
  status: draft | internal_review | ready_for_client_review | approved | sent | archived
  reporting_start: date | null
  reporting_end: date | null
  approval_id: uuid | null
  created_at: datetime
  updated_at: datetime
```

## Workflow Template

Represents a reusable sequence for creating tasks and deliverables.

```yaml
workflow_template:
  id: uuid
  workspace_id: uuid | null
  name: string
  type: client_onboarding | episode_cycle | publishing | analytics | custom
  status: active | paused | archived
  definition: object
  created_at: datetime
  updated_at: datetime
```

## MVP Boundary

The MVP data model should support manual file/link references and workflow tracking. It does not need native media storage, direct publishing integrations, or built-in recording tables yet.
