# Podcast OS Web App Product Spec

## Purpose

The Podcast OS web app is a friendly agency and client-facing control center for managing podcast-led content production.

The app should make it easy to set up clients, configure access, assign tasks, track deliverables, enforce approvals, and move each episode through the production pipeline without exposing the complexity of the underlying agent system.

## Product Position

Podcast OS is production-operations-first.

Riverside-style recording, clipping, and media workflows are useful reference points, but the first product layer should focus on the operational system around production:

- Client setup
- Episode planning
- Tasks
- Approvals
- Deliverables
- Publishing status
- Reporting
- Agency/client visibility

## Primary Users

- Agency admin
- Producer/operator
- Editor or contractor
- Client owner
- Client reviewer
- Host or guest

## Core Jobs

### Agency Admin

- Create workspaces
- Add clients
- Configure user access
- Assign roles
- Configure service tiers
- Review production status
- Approve strategic changes

### Producer or Operator

- Run the episode pipeline
- Assign tasks
- Monitor blockers
- Prepare client-facing deliverables
- Request approvals
- Move work between stages

### Editor or Contractor

- See assigned tasks
- Access required files and links
- Upload or link deliverables
- Mark task status
- Flag blockers

### Client Reviewer

- Review topics, production sheets, edits, thumbnails, and reports
- Approve or request revisions
- See current deliverables
- Avoid internal agency complexity

### Host or Guest

- See recording details
- Review host brief
- Access preparation notes
- Confirm attendance or readiness

## First-Release Principle

The first version should feel like a simple operating dashboard, not a media suite.

Prioritize:

- Clear setup
- Clear next action
- Clear ownership
- Clear approval state
- Clear deliverable status
- Clear client visibility

Defer:

- Built-in recording
- Built-in video editor
- Built-in social scheduler
- Deep analytics integrations
- AI media generation

## Top-Level Navigation

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

## Core Objects

```yaml
workspace:
  id: string
  name: string
  plan: string

client:
  id: string
  workspace_id: string
  name: string
  service_tier: tier_1 | tier_2 | tier_3
  status: prospect | onboarding | active | paused | archived

episode:
  id: string
  client_id: string
  title: string
  episode_number: string
  current_stage: string
  status: planned | active | waiting_approval | blocked | complete

task:
  id: string
  episode_id: string
  title: string
  assignee_id: string
  status: todo | doing | waiting | blocked | done
  due_date: string

deliverable:
  id: string
  episode_id: string
  type: production_sheet | edit | thumbnail | transcript | clip | blog | social_post | report
  status: draft | ready_for_review | revision_requested | approved | published

approval:
  id: string
  deliverable_id: string
  gate: string
  status: pending | approved | rejected | revision_requested
```

## MVP Feature Set

1. Workspace and client setup
2. Role-based user access
3. Client Bible setup checklist
4. Episode pipeline board
5. Task assignment and ownership
6. Deliverable tracking
7. Approval requests
8. Publishing checklist
9. Simple report view
10. Audit-friendly activity log

## Non-Goals for MVP

- No built-in video editor
- No built-in recording studio
- No payment system
- No automated publishing without approval
- No direct API integrations until manual file/link workflows are stable

## Success Criteria

The first app succeeds when an agency can onboard a client, plan an episode, assign work, track deliverables, request approvals, and show the client what is ready without needing a spreadsheet.
