# Episode Plan to Production Workflow

## Purpose

Prepare and complete recording for an approved episode plan.

## Trigger

```yaml
trigger: production_sheet_approved
required_approval: production_sheet_approval
owner_agent: production_coordinator_agent
next_agent: post_production_agent
```

## Flow

```txt
Approved Production Sheet
-> Pre-Production Meeting
-> Recording Readiness
-> Record Episode
-> Raw File Ingest
-> Post-Production Handoff
```

## Steps

1. Confirm production sheet approval.
2. Prepare pre-production checklist.
3. Confirm host, guest, schedule, equipment, and location.
4. Record episode.
5. Log production notes and technical issues.
6. Ingest or link raw files in the episode folder.

## Outputs

- pre-production-checklist.md
- production-notes.md
- raw-file-ingest-note.md
- technical-issues.md

## Approval Gate

Production Sheet Approval

## Completion Criteria

The workflow is complete when raw files are accounted for and post-production has a documented handoff.
