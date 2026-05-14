# Automation Trigger Schema

## Purpose

Defines how events, file states, and approvals can trigger Podcast OS workflows.

## Trigger Object

```yaml
trigger:
  id: string
  name: string
  source: lead_intake | discovery | client_bible | topic_strategy | production_cycle | publishing | analytics | human_operator
  event: string
  status: active | paused | retired
  required_inputs:
    - string
  conditions:
    - field: string
      operator: equals | exists | changed | missing | approved | rejected
      value: string | true | false | null
  target_workflow: string
  owner_agent: string
  approval_required: true | false
  outputs:
    - string
```

## Example

```yaml
trigger:
  id: trigger-new-client-onboarded
  name: new_client_onboarded
  source: lead_intake
  event: client_approved
  status: active
  required_inputs:
    - client_name
    - business_goal
    - brand_assets
    - discovery_notes
  conditions:
    - field: approval.status
      operator: approved
      value: true
  target_workflow: discovery-to-client-bible-workflow
  owner_agent: podcast_os_producer_agent
  approval_required: false
  outputs:
    - client_folder_created
    - client_bible_started
    - discovery_sop_launched
```

## Rules

- Triggers must not bypass approval gates.
- Human approval events should be logged before downstream workflows begin.
- Trigger outputs must be auditable through workflow state.
