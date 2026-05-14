# Discovery to Client Bible Workflow

## Purpose

Convert approved discovery findings into the Client Production Bible.

## Trigger

```yaml
trigger: discovery_summary_approved
required_approval: discovery_approval
owner_agent: discovery_agent
next_agent: client_kb_agent
```

## Flow

```txt
Discovery Notes
-> Discovery Summary
-> Approval
-> Client Bible Build
-> Client Bible Review
```

## Steps

1. Review intake and discovery materials.
2. Create discovery summary and open questions.
3. Request approval.
4. Build Client Bible files.
5. Flag missing or unverified knowledge.
6. Notify Producer Agent when ready.

## Outputs

- discovery-summary.md
- open-questions.md
- client-profile.md
- brand-guidelines.md
- offer-map.md
- ideal-client-profile.md
- messaging-notes.md

## Approval Gate

Discovery Approval

## Completion Criteria

The workflow is complete when the Client Bible is initialized and ready for topic strategy.
