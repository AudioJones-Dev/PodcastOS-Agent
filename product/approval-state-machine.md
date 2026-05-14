# Approval State Machine

## Purpose

Define approval behavior for the web app so strategy, production sheets, edits, thumbnails, publishing, and reports cannot move forward without explicit authorization.

## Approval Gates

| Gate | Entity | Required Before |
| --- | --- | --- |
| client_acceptance | Client | Full onboarding |
| discovery_approval | Client Bible inputs | Client Bible build |
| topic_approval | Topic cluster | Episode planning |
| production_sheet_approval | Production sheet | Pre-production meeting |
| edit_approval | Long-form edit | Publishing prep |
| thumbnail_approval | Thumbnail | Publishing prep |
| publishing_approval | Publishing package | Uploading or scheduling |
| report_approval | Report | Sending client report |
| strategy_approval | Strategy change | Changing content direction |

## Approval States

```yaml
approval_status:
  - pending
  - approved
  - rejected
  - revision_requested
  - canceled
```

## State Transitions

```txt
pending -> approved
pending -> rejected
pending -> revision_requested
pending -> canceled
revision_requested -> pending
rejected -> canceled
```

## Revision Loop

When a revision is requested:

1. Approval status becomes `revision_requested`.
2. Deliverable status becomes `revision_requested`.
3. A revision task is created or reopened.
4. Reviewer comment is required.
5. Revised deliverable moves back to internal review.
6. Producer requests approval again.

## Approval Requirements

```yaml
approval_request:
  required_fields:
    - gate
    - requested_by_id
    - approver_id_or_role
    - entity_reference
    - reason
    - preview_or_file_reference
```

## Publishing Lock

Publishing actions remain disabled unless:

```yaml
publishing_unlock:
  edit_approval: approved
  thumbnail_approval: approved
  publishing_approval: approved
```

## Report Lock

Client report sending remains disabled unless:

```yaml
report_unlock:
  report_approval: approved
```

## Strategy Lock

Topic direction, offer positioning, and client-facing strategy changes require:

```yaml
strategy_unlock:
  strategy_approval: approved
```

## Audit Events

The app should log:

- Approval requested
- Approval approved
- Approval rejected
- Revision requested
- Approval canceled
- Approval reassigned
- Deliverable changed after approval

## Approved Deliverable Change Rule

If an approved deliverable changes materially, the app should create a new version and require approval again when the change affects client-facing output or publishing.
