# Lead to Discovery Workflow

## Purpose

Move a qualified lead from intake into a structured discovery process.

## Trigger

```yaml
trigger: lead_intake_complete
required_approval: client_acceptance
owner_agent: lead_intake_agent
next_agent: discovery_agent
```

## Flow

```txt
Lead Intake
-> Qualification Summary
-> Client Acceptance Approval
-> Discovery Scheduling
-> Discovery Prep
```

## Steps

1. Capture lead source, contact, goals, and fit indicators.
2. Create lead intake summary.
3. Request client acceptance approval.
4. If approved, open discovery workflow.
5. If rejected or deferred, document status and stop.

## Outputs

- lead-intake-summary.md
- qualification-status.md
- discovery-prep-note.md

## Approval Gate

Client Acceptance

## Completion Criteria

The workflow is complete when discovery is scheduled or the lead is marked rejected, deferred, or not a fit.
