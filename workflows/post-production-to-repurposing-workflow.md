# Post-Production to Repurposing Workflow

## Purpose

Transform approved episode and transcript material into derivative content assets.

## Trigger

```yaml
trigger: transcript_available
required_approval: edit_approval
owner_agent: transcript_analysis_agent
next_agent: repurposing_agent
```

## Flow

```txt
Transcript
-> Transcript Analysis
-> Quote Bank
-> Clip Moment Log
-> Blog and Social Drafts
-> Repurposing Package
```

## Steps

1. Analyze transcript for themes, quotes, questions, and clip opportunities.
2. Create transcript insights and SEO/AEO answer map.
3. Draft show notes, blog, captions, and clip package.
4. Align CTA to the client offer map.
5. Package repurposed assets for publishing review.

## Outputs

- transcript-insights.md
- quote-bank.md
- clip-moment-log.md
- seo-aeo-answer-map.md
- show-notes.md
- blog.md
- social-posts.md
- clip-package.md

## Approval Gate

Publishing Approval

## Completion Criteria

The workflow is complete when derivative assets are ready for publishing approval.
