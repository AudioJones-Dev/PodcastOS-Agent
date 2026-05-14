# Reports Wireframe

## Purpose

Provide an internal and client-facing surface for episode and monthly reports.

## Primary Users

- Workspace owner
- Agency admin
- Producer
- Client owner
- Client reviewer

## Layout

```txt
+--------------------------------------------------------------+
| Reports                                      [Create Report] |
+--------------------------------------------------------------+
| Filters: Client | Period | Type | Status                     |
+--------------------------------------------------------------+
| Report List                                                  |
+--------------------------------------------------------------+
| Selected Report Preview / Detail                             |
+--------------------------------------------------------------+
```

## Report List

Columns:

- Report title
- Client
- Type
- Period
- Status
- Approval
- Owner
- Updated

## Report Detail

Sections:

- Executive summary
- Episodes published
- Performance summary
- Channel metrics
- Content lessons
- Next-cycle recommendations
- Approval state
- File/link references

## Report Statuses

```yaml
report_status:
  - draft
  - internal_review
  - ready_for_client_review
  - approved
  - sent
  - archived
```

## Approval Flow

Reports require approval before external delivery.

Actions:

- Save draft
- Request internal review
- Request client review
- Approve report
- Request revision
- Mark sent

## Client View

Client users see only:

- Approved or client-review reports
- Client-visible comments
- Client-safe file references

## Empty States

No reports:

```txt
Create the first monthly report for this client.
```

No filtered reports:

```txt
No reports match these filters.
```

## Data Dependencies

- Report
- Client
- Episode
- Deliverable
- Approval
- File Reference
- Comment
- Activity Log

## UX Rule

Reports should connect performance to next actions. They should not become a static archive detached from topic refresh.
