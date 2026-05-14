# Client Bible to Topic Cluster Workflow

## Purpose

Use the Client Bible to create topic clusters and episode recommendations.

## Trigger

```yaml
trigger: client_bible_ready
required_approval: strategy_approval
owner_agent: topic_strategy_agent
next_agent: episode_planning_agent
```

## Flow

```txt
Client Bible
-> Authority Themes
-> Search/AEO Research
-> Topic Clusters
-> Topic Scoring
-> Episode Recommendations
-> Approval
```

## Steps

1. Review Client Bible, ICP, offer map, and messaging.
2. Identify authority themes and content gaps.
3. Gather SEO, AEO, competitor, and trend inputs.
4. Group opportunities into clusters.
5. Score clusters and individual episode ideas.
6. Request topic approval.

## Outputs

- topic-clusters.md
- topic-score-table.md
- episode-recommendations.md

## Approval Gate

Topic Approval

## Completion Criteria

The workflow is complete when at least one topic cluster is approved for episode planning.
