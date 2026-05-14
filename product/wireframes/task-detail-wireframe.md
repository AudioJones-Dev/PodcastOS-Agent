# Task Detail Wireframe

## Purpose

Give assignees one clear place to understand, complete, and hand off assigned work.

## Primary Users

- Producer
- Editor
- Contractor
- Agency admin

## Layout

```txt
+--------------------------------------------------------------+
| Task Title                                      [Status Menu] |
+--------------------------------------------------------------+
| Meta: Client | Episode | Assignee | Due | Priority            |
+--------------------------------------------------------------+
| Left: Task Brief / Requirements / Inputs                      |
| Right: Output Submission / Blockers / Activity                |
+--------------------------------------------------------------+
| Comments                                                      |
+--------------------------------------------------------------+
```

## Task Header

Fields:

- Task title
- Status
- Client
- Episode
- Assignee
- Due date
- Priority
- Client-visible flag

## Task Brief

Includes:

- Description
- Acceptance criteria
- Related workflow stage
- Required approval gate, if any

## Required Inputs

Rows:

- Input name
- Type
- Link/path
- Status
- Client-visible flag

## Output Submission

Fields:

- Deliverable type
- Deliverable title
- Version
- File/link/path
- Notes
- Client-visible toggle

Actions:

- Save draft
- Submit for internal review
- Mark task done

## Blocker Panel

Blocker types:

- Missing file
- Missing access
- Unclear scope
- Approval needed
- Technical issue
- Client delay

Actions:

- Open blocker
- Assign blocker owner
- Resolve blocker

## Comments

Comment visibility:

- Internal
- Client-visible

## Empty States

No inputs:

```txt
No input files are attached to this task.
```

No comments:

```txt
No comments yet.
```

## Data Dependencies

- Task
- User
- Client
- Episode
- Deliverable
- File Reference
- Comment
- Activity Log

## UX Rule

The assignee should never need to hunt across the app to find the files, context, and expected output for the task.
