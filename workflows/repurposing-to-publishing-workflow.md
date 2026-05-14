# Repurposing to Publishing Workflow

## Purpose

Move approved episode and derivative assets into upload, scheduling, and release.

## Trigger

```yaml
trigger: repurposing_package_approved
required_approval: publishing_approval
owner_agent: publishing_agent
next_agent: distribution_admin_agent
```

## Flow

```txt
Approved Asset Package
-> Metadata QA
-> Platform Formatting
-> Upload or Schedule
-> URL Handoff
```

## Steps

1. Confirm publishing approval and approved asset versions.
2. Validate title, description, thumbnail, CTA links, and channel formatting.
3. Prepare platform metadata.
4. Upload or schedule assets according to operator direction.
5. Send URLs and statuses to Distribution Admin Agent.

## Outputs

- publishing-checklist.md
- platform-metadata.md
- schedule-status.md
- publishing-handoff.md

## Approval Gate

Publishing Approval

## Completion Criteria

The workflow is complete when all approved assets are published, scheduled, or documented as blocked.
