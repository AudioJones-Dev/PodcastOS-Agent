# Codex Build Prompt - Podcast OS Repo Foundation

You are working inside the repository:

```txt
C:\dev\AJ DIGITAL AGENTS\PODCAST OS
```

Your task is to create the full Markdown-based repo foundation for the Podcast OS AI Producer Agent.

## Goal

Create a structured repo containing:

- Master spec
- Agent role definitions
- SOPs
- Schemas
- Templates
- Workflow maps
- Tool stack documentation
- Productization notes

## Rules

1. Create Markdown files only.
2. Do not install packages.
3. Do not add secrets.
4. Do not create executable scripts yet.
5. Preserve clear folder structure.
6. Use kebab-case file names.
7. Use readable Markdown headings.
8. Use YAML blocks where schema/state definitions are useful.
9. Keep all files focused and modular.
10. Do not introduce Firebase.

## Required Directories

```txt
agents/
sops/
schemas/
templates/
workflows/
prompts/
docs/
```

## Required Root Files

```txt
README.md
PODCAST_OS_AGENT_MASTER_SPEC.md
ROADMAP.md
REPO_MANIFEST.md
CHANGELOG.md
```

## Required Agent Files

```txt
agents/podcast-os-producer-agent.md
agents/lead-intake-agent.md
agents/discovery-agent.md
agents/client-kb-agent.md
agents/topic-strategy-agent.md
agents/episode-planning-agent.md
agents/production-coordinator-agent.md
agents/post-production-agent.md
agents/transcript-analysis-agent.md
agents/repurposing-agent.md
agents/publishing-agent.md
agents/distribution-admin-agent.md
agents/analytics-agent.md
agents/topic-refresh-agent.md
```

## Required SOP Files

```txt
sops/client-onboarding-sop.md
sops/discovery-sop.md
sops/client-bible-build-sop.md
sops/topic-strategy-sop.md
sops/episode-planning-sop.md
sops/pre-production-meeting-sop.md
sops/production-sop.md
sops/post-production-sop.md
sops/repurposing-sop.md
sops/publishing-sop.md
sops/distribution-admin-sop.md
sops/analytics-sop.md
sops/topic-refresh-sop.md
```

## Required Schema Files

```txt
schemas/client-folder-schema.md
schemas/production-cycle-schema.md
schemas/agent-task-schema.md
schemas/automation-trigger-schema.md
schemas/service-tier-cadence-schema.md
schemas/approval-gates-schema.md
```

## Required Template Files

```txt
templates/client-bible-template.md
templates/discovery-summary-template.md
templates/ideal-client-profile-template.md
templates/offer-map-template.md
templates/topic-cluster-template.md
templates/production-sheet-template.md
templates/episode-outline-template.md
templates/host-brief-template.md
templates/publishing-checklist-template.md
templates/distribution-log-template.md
templates/analytics-template.md
templates/monthly-report-template.md
```

## Required Workflow Files

```txt
workflows/full-production-cycle-workflow.md
workflows/lead-to-discovery-workflow.md
workflows/discovery-to-client-bible-workflow.md
workflows/client-bible-to-topic-cluster-workflow.md
workflows/topic-cluster-to-episode-plan-workflow.md
workflows/episode-plan-to-production-workflow.md
workflows/production-to-post-production-workflow.md
workflows/post-production-to-repurposing-workflow.md
workflows/repurposing-to-publishing-workflow.md
workflows/publishing-to-analytics-workflow.md
workflows/analytics-to-topic-refresh-workflow.md
```

## Done Criteria

The task is complete when:

- All directories exist
- All required files exist
- Root README explains the system
- Master spec describes the complete operating model
- Each agent file has role, mission, inputs, tasks, outputs, and rules
- Each SOP has purpose, trigger, inputs, procedure, outputs, and completion criteria
- Each schema includes usable workflow/state structure
- Each template is ready to copy into a client folder
