# Production to Post-Production Workflow

## Purpose

Move raw recording assets into edit, transcript, and review-ready post-production outputs.

## Trigger

```yaml
trigger: raw_files_ingested
required_approval: false
owner_agent: post_production_agent
next_agent: transcript_analysis_agent
```

## Flow

```txt
Raw Files
-> Edit Project
-> Long-Form Export
-> Transcript
-> Thumbnail and Clips
-> Edit Approval
```

## Steps

1. Confirm raw files and production notes exist.
2. Prepare edit project folder.
3. Coordinate long-form edit and export.
4. Generate transcript.
5. Prepare thumbnail and clip candidates.
6. Run post-production QA.
7. Request edit and thumbnail approval.

## Outputs

- edit-status.md
- transcript.md
- clip-candidates.md
- thumbnail-review-note.md
- post-production-qa.md

## Approval Gate

Edit Approval and Thumbnail Approval

## Completion Criteria

The workflow is complete when post-production assets are approved or returned for revision.
