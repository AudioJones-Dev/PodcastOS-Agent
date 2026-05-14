# Approval Gates Schema

## Purpose

Defines actions that require human approval.

## Required Approval Gates

| Gate | Required Before |
| --- | --- |
| Client Acceptance | Starting full onboarding |
| Discovery Approval | Building Client Bible |
| Topic Approval | Creating production sheet |
| Production Sheet Approval | Pre-production meeting |
| Edit Approval | Publishing long-form episode |
| Thumbnail Approval | Publishing episode |
| Publishing Approval | Uploading/scheduling assets |
| Report Approval | Sending client report |
| Strategy Approval | Changing content direction |

## Approval State

```yaml
approval:
  gate: string
  status: pending | approved | rejected | revision_requested
  approver: human_operator
  notes: string
  timestamp: string
```

## Rules

- Approval gates must be explicit.
- Rejected or revision-requested approval states block downstream workflow steps.
- Publishing approval must be separate from edit approval.
- Strategy approval is required before changing topic direction, offer positioning, or client-facing recommendations.
