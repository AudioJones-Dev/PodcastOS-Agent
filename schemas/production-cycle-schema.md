# Production Cycle Schema

## Purpose

Defines the repeatable production cycle for each podcast episode.

## Sequence

```txt
1. Research
2. Topic Selection
3. Episode Planning
4. Production Sheet Creation
5. Pre-Production Meeting
6. Recording
7. Raw File Ingest
8. Editing
9. Transcript Generation
10. Content Repurposing
11. QA
12. Publishing
13. Distribution Logging
14. Analytics Review
15. Topic Refresh
```

## Workflow State

```yaml
episode_cycle:
  client: string
  episode_id: string
  tier: tier_1 | tier_2 | tier_3
  current_phase: string
  status: pending | active | blocked | waiting_approval | complete
  approval_gate: true | false
  next_action: string
  owner_agent: string
  outputs: []
```

## Completion Criteria

A production cycle is complete when:

- Long-form episode is published
- Repurposed assets are published or scheduled
- Distribution log is complete
- Analytics template is initialized
- Next-cycle recommendation is created
