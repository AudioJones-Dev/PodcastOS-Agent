# Deliverables Workflow Spec

## Purpose

Define how deliverables move from draft to review, approval, publishing, and reporting.

## Deliverable Types

| Type | Typical Owner | Approval Required |
| --- | --- | --- |
| Client Bible | Producer | yes |
| Topic Cluster | Topic Strategy Agent / Producer | yes |
| Production Sheet | Episode Planning Agent / Producer | yes |
| Host Brief | Producer | optional |
| Long-Form Edit | Editor | yes |
| Thumbnail | Designer / Editor | yes |
| Transcript | Post-Production Agent | optional |
| Clip Package | Editor / Repurposing Agent | yes |
| Blog | Repurposing Agent / Copywriter | yes |
| Social Captions | Repurposing Agent | yes |
| Publishing Checklist | Publishing Agent / Producer | yes |
| Distribution Log | Distribution Admin Agent | no |
| Analytics Report | Analytics Agent / Producer | yes |

## Deliverable States

```yaml
deliverable_status:
  - not_started
  - draft
  - internal_review
  - ready_for_client_review
  - revision_requested
  - approved
  - published
  - archived
```

## State Flow

```txt
not_started
-> draft
-> internal_review
-> ready_for_client_review
-> approved
-> published
```

Revision loop:

```txt
ready_for_client_review
-> revision_requested
-> draft
-> internal_review
-> ready_for_client_review
```

## Deliverable Record

```yaml
deliverable:
  id: string
  client_id: string
  episode_id: string | null
  type: string
  title: string
  owner_user_id: string
  status: string
  version: string
  source_path: string | null
  preview_url: string | null
  client_visible: true | false
  approval_required: true | false
  approval_gate: string | null
  due_date: string | null
```

## Approval Button Rules

- Approve marks the approval record approved.
- Request revision opens a required comment field.
- Reject should be reserved for deliverables that should not continue.
- Publishing controls remain disabled until publishing approval is approved.

## Deliverable List UX

Deliverables should be grouped by:

- Client
- Episode
- Stage
- Approval status
- Owner
- Due date

## File and Link Strategy

MVP should support file and link references first:

- Local path reference
- Google Drive link
- Dropbox link
- Frame.io link
- YouTube draft link
- Website draft link

Native storage can come later after the operational workflow is stable.
