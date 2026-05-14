# Analytics to Topic Refresh Workflow

## Purpose

Use performance data to update topic priorities for the next production cycle.

## Trigger

```yaml
trigger: analytics_report_ready
required_approval: report_approval
owner_agent: analytics_agent
next_agent: topic_refresh_agent
```

## Flow

```txt
Analytics Data
-> Performance Summary
-> Report Approval
-> Topic Refresh
-> Next-Cycle Recommendations
-> Strategy Approval
```

## Steps

1. Gather platform, website, social, and CTA data.
2. Draft performance summary and monthly report.
3. Request report approval before client delivery.
4. Identify winning, weak, and fatigued topics.
5. Refresh topic scores and recommendations.
6. Request strategy approval for direction changes.

## Outputs

- analytics.md
- performance-summary.md
- monthly-report.md
- refreshed-topic-clusters.md
- next-cycle-topic-recommendations.md

## Approval Gate

Report Approval and Strategy Approval

## Completion Criteria

The workflow is complete when approved recommendations are ready to feed the next topic strategy cycle.
