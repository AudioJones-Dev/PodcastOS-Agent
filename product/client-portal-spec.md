# Client Portal Spec

## Purpose

Give clients a simple, low-noise place to review approvals, see deliverables, understand episode status, and access reports.

## Client Experience Principle

The client portal should hide internal complexity.

Clients should not need to understand agent names, internal production handoffs, or agency task details. They should see progress, decisions, and deliverables.

## Client Navigation

```txt
Overview
Approvals
Episodes
Deliverables
Reports
Brand and Strategy
```

## Overview Page

The overview should show:

- Current production cycle
- Items waiting for client review
- Recently approved deliverables
- Upcoming recording or publishing dates
- Latest report

## Approval Experience

Each approval card should include:

- Deliverable name
- Why approval is needed
- Preview or link
- Version
- Requested by
- Due date
- Approve button
- Request revision button
- Comment field

## Episode Page

Each episode should show:

- Working title
- Current stage
- Strategic goal
- Key dates
- Approved deliverables
- Pending deliverables
- Publishing status

## Deliverables Page

Deliverables should be grouped by episode:

- Production sheet
- Host brief
- Long-form edit
- Thumbnail
- Transcript
- Clips
- Blog
- Social captions
- Report

## Brand and Strategy Page

Client-visible strategy should include:

- Approved Client Bible summary
- ICP summary
- Offer map summary
- Approved topic clusters
- Messaging notes

## Client Hidden Fields

Do not expose:

- Internal task comments
- Contractor cost notes
- Private agency notes
- Agent routing details
- Draft strategy before approval

## Revision Flow

```yaml
revision_request:
  deliverable_id: string
  requested_by: client_user
  reason: string
  comment: string
  status: open | accepted | resolved
```

## Success Criteria

The client can answer these questions without asking the producer:

- What needs my approval?
- What is the current episode status?
- What deliverables are ready?
- What has been published?
- What are the results?
