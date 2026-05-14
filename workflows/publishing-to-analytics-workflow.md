# Publishing to Analytics Workflow

## Purpose

Log distribution records and prepare performance tracking after publishing.

## Trigger

```yaml
trigger: publishing_handoff_complete
required_approval: false
owner_agent: distribution_admin_agent
next_agent: analytics_agent
```

## Flow

```txt
Publishing Handoff
-> Distribution Log
-> URL Reconciliation
-> Analytics Readiness
-> Reporting Window
```

## Steps

1. Review the publishing handoff.
2. Log URLs, platform names, publish dates, and statuses.
3. Reconcile missing channels or failed uploads.
4. Mark scheduled assets pending until live.
5. Notify Analytics Agent when tracking can begin.

## Outputs

- distribution-log.md
- missing-distribution-note.md
- analytics-readiness-note.md

## Approval Gate

None, unless distribution changes require publishing approval.

## Completion Criteria

The workflow is complete when distribution status is reconciled and analytics tracking can start.
