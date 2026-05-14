# Topic Cluster to Episode Plan Workflow

## Purpose

Turn an approved topic cluster into a specific episode plan.

## Trigger

```yaml
trigger: topic_cluster_approved
required_approval: topic_approval
owner_agent: episode_planning_agent
next_agent: production_coordinator_agent
```

## Flow

```txt
Approved Topic Cluster
-> Episode Angle
-> Production Sheet
-> Host Brief
-> Outline
-> Production Sheet Approval
```

## Steps

1. Select topic from approved cluster.
2. Define target audience, goal, core problem, and core promise.
3. Draft hook, title options, and talking points.
4. Identify CTA, clip opportunities, blog angle, and thumbnail direction.
5. Create host brief and outline.
6. Request production sheet approval.

## Outputs

- production-sheet.md
- outline.md
- host-brief.md
- title-options.md

## Approval Gate

Production Sheet Approval

## Completion Criteria

The workflow is complete when the production sheet is approved or returned for revision.
