# Task, Access, and Deliverables Spec

## Purpose

Connect task assignment, access scope, and deliverable creation so users only see the work and files required for their role.

## Task Model

```yaml
task:
  id: string
  workspace_id: string
  client_id: string
  episode_id: string | null
  title: string
  description: string
  assignee_id: string
  created_by: string
  status: todo | doing | waiting | blocked | done
  priority: low | normal | high | urgent
  due_date: string | null
  required_inputs:
    - deliverable_id: string
    - file_link: string
  expected_outputs:
    - deliverable_type: string
      approval_required: true | false
```

## Task Creation Sources

Tasks can be created from:

- Workflow templates
- Episode pipeline stage
- Manual producer request
- Revision request
- Approval blocker
- Report deadline

## Access Inheritance

When a task is assigned, the assignee receives minimum necessary access to:

- The task
- The related episode
- Required input deliverables
- Required file links
- Output upload/link fields

The assignee does not automatically receive access to all client files.

## Deliverable Creation from Task

When a task output is submitted:

```yaml
task_output:
  task_id: string
  deliverable_id: string
  submitted_by: string
  status: submitted
  notes: string
  file_or_link: string
```

The deliverable then moves to internal review or ready for client review based on workflow settings.

## Blocker Handling

```yaml
blocker:
  task_id: string
  blocker_type: missing_file | missing_access | unclear_scope | approval_needed | technical_issue | client_delay
  description: string
  owner_user_id: string
  status: open | resolved
```

## Friendly UX Requirements

- Every task should have one clear owner.
- Every task should show the next action.
- Every blocked task should show who can unblock it.
- Required files should appear directly on the task.
- Deliverable submission should be one obvious action.
- Client-visible outputs should be clearly marked.

## Agency Control Rule

Producers and admins can override assignment and visibility. Contractors and clients cannot escalate their own access.
