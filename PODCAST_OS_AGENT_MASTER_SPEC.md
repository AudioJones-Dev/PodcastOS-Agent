# Podcast OS Agent Master Spec

## Version

v0.1

## Project

Podcast OS - AI Podcast Producer Agent

## Owner

AJ Digital / Audio Jones

## Purpose

Podcast OS is an agentic production operating system for managing podcast-led content marketing workflows.

The system is designed to convert human podcast production operations into structured SOPs, agent workflows, sub-agent responsibilities, repeatable templates, automation triggers, and productized service delivery loops.

## Core Definition

Podcast OS manages the full podcast production lifecycle:

```txt
Lead Capture
-> Discovery
-> Client Knowledge Base
-> Topic Strategy
-> Episode Planning
-> Pre-Production
-> Production
-> Post-Production
-> Repurposing
-> Publishing
-> Distribution Administration
-> Analytics
-> Topic Refresh
-> Repeat
```

## Operating Thesis

A podcast is not simply a recording.

A podcast is a long-form content asset that can be transformed into:

- Search-indexable content
- Authority assets
- Social media clips
- Thought leadership posts
- Website traffic drivers
- Lead-generation assets
- Client education materials
- Brand trust infrastructure

Podcast OS exists to make that process repeatable.

## 1. System Objectives

### 1.1 Business Objectives

Podcast OS should help a client:

- Increase brand awareness
- Build authority
- Create organic content consistently
- Improve search and AEO visibility
- Generate qualified leads
- Repurpose expertise into multiple media formats
- Track content performance
- Improve future content based on data

### 1.2 Agentic Objectives

Podcast OS should help the operator:

- Standardize production workflows
- Reduce manual administrative work
- Improve pre-production quality
- Automate documentation
- Generate production sheets
- Organize client assets
- Create topic clusters
- Turn transcripts into assets
- Track publishing status
- Produce repeatable monthly reports
- Refresh content strategy based on analytics

## 2. Client Production Bible

Every client receives a dedicated Client Production Bible.

This is the central source of truth for:

- Brand identity
- Client profile
- Offers
- Ideal client profile
- Messaging
- Authority topics
- SEO/AEO research
- Topic clusters
- Episode plans
- Production assets
- Publishing records
- Analytics
- Next-cycle recommendations

### 2.1 Client Bible Function

The Client Bible allows the agent to make informed decisions instead of generating generic podcast ideas.

The agent must use the Client Bible before creating:

- Topic clusters
- Episode outlines
- Host briefs
- Production sheets
- Blog posts
- Social captions
- Thumbnails
- Reports

## 3. Production Cycle

### 3.1 Standard Cycle

Each episode follows the same core cycle:

```txt
Research
-> Plan
-> Pre-Production Meeting
-> Record
-> Ingest
-> Edit
-> Transcribe
-> Repurpose
-> QA
-> Publish
-> Log
-> Analyze
-> Recommend
```

### 3.2 Service Tier Cadence

| Tier | Cadence | Production Cycles |
| --- | ---: | ---: |
| Tier 1 | Monthly | 1 per month |
| Tier 2 | Bi-weekly | 2 per month |
| Tier 3 | Weekly | 4 per month |

## 4. Agent Architecture

### 4.1 Primary Agent

#### Podcast OS Producer Agent

The Podcast OS Producer Agent is the main orchestrator.

It owns:

- Client lifecycle
- Production cycle management
- Sub-agent delegation
- Approval gates
- Folder consistency
- Workflow state
- Reporting
- Next-cycle readiness

### 4.2 Sub-Agents

| Agent | Responsibility |
| --- | --- |
| Lead Intake Agent | Captures and qualifies leads |
| Discovery Agent | Collects client context |
| Client KB Agent | Builds the Client Bible |
| Topic Strategy Agent | Creates topic clusters |
| Episode Planning Agent | Creates episode plans |
| Production Coordinator Agent | Prepares shoot logistics |
| Post-Production Agent | Coordinates editing workflow |
| Transcript Analysis Agent | Converts transcript into insight |
| Repurposing Agent | Creates derivative assets |
| Publishing Agent | Prepares and publishes assets |
| Distribution Admin Agent | Logs URLs and publishing status |
| Analytics Agent | Reviews performance |
| Topic Refresh Agent | Updates strategy for next cycle |

## 5. Human Approval Gates

The system must require human approval before:

- Accepting a new client
- Finalizing a client strategy
- Approving episode topics
- Approving production sheets
- Publishing content
- Sending final reports
- Making pricing or contract changes
- Editing brand-sensitive claims
- Making strategic recommendations to clients

## 6. Tool Stack

### 6.1 Current Local Tools

| Tool | Role |
| --- | --- |
| Obsidian | Knowledge base and Markdown structure |
| Claude CoWork | Strategy, reasoning, documentation |
| Claude Code | Local code and workflow development |
| Codex Desktop | Execution and repo build tasks |
| Hermes Agent | Agent orchestration and memory |
| OpenClaw | Multi-agent/channel routing |
| GitHub | Version control |
| Local filesystem | Client folder storage |

### 6.2 Future Integrations

Potential future integrations:

- Google Drive
- Dropbox
- Notion
- Airtable
- ClickUp
- Linear
- Descript
- Premiere Pro
- DaVinci Resolve
- CapCut
- Riverside
- Zoom
- YouTube Studio
- Spotify for Podcasters
- Apple Podcasts Connect
- WordPress
- Webflow
- Sanity
- Buffer
- Metricool
- Google Search Console
- Google Analytics
- YouTube Analytics

## 7. Automation Logic

### 7.1 Core Trigger Schema

```yaml
trigger:
  name: new_client_onboarded
  source: lead_intake
  required_inputs:
    - client_name
    - business_goal
    - brand_assets
    - discovery_notes
  outputs:
    - client_folder_created
    - client_bible_started
    - discovery_sop_launched
```

### 7.2 Standard Workflow Object

```yaml
workflow:
  id: episode-production-cycle
  client: client_name
  episode: episode_id
  phase: current_phase
  status: pending | active | waiting_approval | complete | blocked
  owner_agent: podcast_os_producer_agent
  sub_agents:
    - topic_strategy_agent
    - episode_planning_agent
    - post_production_agent
  approval_required: true
  outputs:
    - production_sheet
    - edited_episode
    - transcript
    - content_package
    - analytics_report
```

## 8. Build Phases

### Phase 1 - Documentation Foundation

Create the Markdown operating system:

- Master spec
- Agent specs
- SOPs
- Schemas
- Templates
- Workflow maps

### Phase 2 - Generators

Create local generators for:

- Client folders
- Client Bible files
- Episode folders
- Production sheets
- Publishing checklists
- Analytics reports

### Phase 3 - Agent Execution

Wire the specs into agentic workflows:

- Hermes orchestration
- Claude/Codex execution
- Obsidian retrieval
- File state tracking
- Approval gates
- Workflow logs

### Phase 4 - Productization

Turn Podcast OS into a sellable Agent Operating System:

- Client onboarding package
- Demo workflow
- Product documentation
- Pricing model
- Installation guide
- Agency deployment model
