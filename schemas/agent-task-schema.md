# Agent Task Schema

## Purpose

Defines the shape of a task assigned to any Podcast OS agent.

## Task Object

```yaml
agent_task:
  id: string
  title: string
  client: string
  episode_id: string | null
  assigned_agent: string
  requested_by: podcast_os_producer_agent | human_operator
  source_workflow: string
  status: pending | active | blocked | waiting_approval | complete | canceled
  priority: low | normal | high | urgent
  due_date: string | null
  required_inputs:
    - name: string
      status: available | missing | blocked
      location: string | null
  outputs:
    - name: string
      path: string
      status: pending | created | approved | rejected
  approval_required: true | false
  approval_gate: string | null
  blocker_notes: string
  completion_notes: string
```

## Required Rules

- Every task must have one owner agent.
- Every task must point to a source workflow.
- Missing required inputs must block the task.
- Approval-required tasks cannot be marked complete until approval state is approved.
- Outputs must stay inside the client folder unless explicitly linked in the Client Bible.
