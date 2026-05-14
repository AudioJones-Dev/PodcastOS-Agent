# Client Portal Wireframe

## Purpose

Give clients a clean place to review approvals, see episode progress, access deliverables, and read reports without internal agency noise.

## Primary Users

- Client owner
- Client reviewer
- Host or guest, limited view

## Layout

```txt
+--------------------------------------------------------------+
| Client Portal: [Client Name]                                  |
+--------------------------------------------------------------+
| Tabs: Overview | Approvals | Episodes | Deliverables | Reports|
+--------------------------------------------------------------+
| Current Production Status                                     |
| Pending Approvals                                             |
| Recent Deliverables                                           |
| Upcoming Dates                                                |
+--------------------------------------------------------------+
```

## Overview

Sections:

- Current episode
- Items waiting on client
- Recently approved deliverables
- Upcoming recording or publishing dates
- Latest report

## Approvals

Approval cards show:

- Deliverable title
- Approval gate
- Why approval is needed
- Requested by
- Due date
- Preview/link
- Approve action
- Request revision action

## Episodes

Episode cards show:

- Working title
- Stage
- Status
- Planned publish date
- Approved deliverables
- Pending deliverables

## Deliverables

Grouped by episode:

- Production sheet
- Host brief
- Long-form edit
- Thumbnail
- Transcript
- Clips
- Blog
- Social captions
- Report

Only client-visible deliverables appear.

## Reports

Shows:

- Monthly reports
- Episode reports
- Strategy reports
- Approval status
- Sent status

## Brand and Strategy

Client-visible strategy:

- Client Bible summary
- ICP summary
- Offer map summary
- Approved topic clusters
- Messaging notes

## Empty States

No pending approvals:

```txt
No approvals are waiting on you right now.
```

No reports:

```txt
No reports are available yet.
```

## Data Dependencies

- Client
- Client Membership
- Episode
- Deliverable
- Approval
- Report
- File Reference
- Client-visible Activity Log

## Permission Behavior

Client users should not see:

- Internal agency comments
- Contractor notes
- Private task assignments
- Cost or pricing notes
- Agent routing details

## UX Rule

The client portal should reduce status questions. It should always make clear what the client needs to review and what the agency is handling.
