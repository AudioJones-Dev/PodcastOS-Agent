# Integration Map

## Purpose

Map future Podcast OS integrations to the workflows they support.

## Current Integration Surface

| Integration Area | Workflow Supported | Status |
| --- | --- | --- |
| Local filesystem | Client folder and episode asset storage | Current |
| GitHub | Spec version control | Current |
| Obsidian | Knowledge base browsing | Current |
| Claude/Codex | Documentation and local execution | Current |
| Hermes/OpenClaw | Orchestration and routing | Planned |

## Future Integration Surface

| Integration | Workflow Supported | Notes |
| --- | --- | --- |
| Google Drive / Dropbox | Asset storage and sharing | Must preserve folder schema |
| Notion / Airtable / ClickUp / Linear | Task and workflow tracking | Must preserve approval gates |
| Riverside / Zoom | Recording source | Raw file ingest required |
| Descript / Premiere / DaVinci / CapCut | Editing | Export and transcript handoff required |
| YouTube / Spotify / Apple Podcasts | Publishing | Publishing approval required |
| WordPress / Webflow / Sanity | Blog publishing | Publishing approval required |
| Buffer / Metricool | Social scheduling | Publishing approval required |
| GA / GSC / YouTube Analytics | Analytics | Data must be source-attributed |

## Rule

No integration should create, update, publish, schedule, or send client-facing material without the correct approval state.
