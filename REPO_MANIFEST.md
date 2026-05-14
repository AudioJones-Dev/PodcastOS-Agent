# Repo Manifest

## Repo Name

PODCAST-OS-AI-PRODUCER-AGENT

## Local Path

```txt
C:\dev\AJ DIGITAL AGENTS\PODCAST OS
```

## Git Remote

```txt
https://github.com/AudioJones-Dev/PodcastOS-Agent.git
```

## Purpose

This repository contains the architecture, SOPs, schemas, workflows, templates, and agent instructions for the Podcast OS AI Producer Agent.

## Primary Output

A productized AI Podcast Producer Agent operating system.

## Directory Responsibilities

| Directory | Purpose |
| --- | --- |
| agents/ | Individual agent role definitions |
| sops/ | Standard operating procedures |
| schemas/ | Data, workflow, cadence, and approval schemas |
| templates/ | Reusable production and reporting templates |
| workflows/ | End-to-end agent workflow maps |
| prompts/ | Prompts for Claude, Codex, Hermes, and OpenClaw |
| docs/ | Supporting documentation and productization notes |
| product/ | Web app product specs, UX modules, role/access rules, and MVP sequencing |

## Source of Truth

The master source of truth is:

```txt
PODCAST_OS_AGENT_MASTER_SPEC.md
```

## Current Stage

Product layer specification.

## Next Stage

Lock the web app data model for workspaces, clients, users, roles, episodes, tasks, deliverables, approvals, and activity logs.

## Product Spec Files

| File | Purpose |
| --- | --- |
| product/webapp-product-spec.md | Core product definition for the agency/client web app |
| product/user-roles-and-permissions.md | Role-based access and permission rules |
| product/agency-admin-dashboard.md | Agency dashboard and setup surface |
| product/client-portal-spec.md | Client-facing review and visibility portal |
| product/deliverables-workflow-spec.md | Deliverable states, approval flow, and version concepts |
| product/task-access-deliverables-spec.md | Task assignment, scoped access, and deliverable output rules |
| product/riverside-feature-benchmark.md | Riverside-style feature inspiration and MVP boundaries |
| product/mvp-feature-sequence.md | Recommended build sequence before app scaffold |
| product/data-model-spec.md | MVP entity definitions for the future web app |
| product/entity-relationship-map.md | Relationship rules and rollup behavior |
| product/approval-state-machine.md | Approval gates, states, locks, and revision loops |
| product/activity-log-spec.md | Audit trail rules and logged event categories |
| product/screen-to-data-map.md | MVP screen dependencies mapped to records |
| product/data-model-mvp-lock.md | Locked MVP data model decisions and deferred records |
