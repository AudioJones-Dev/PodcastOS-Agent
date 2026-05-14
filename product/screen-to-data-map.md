# Screen to Data Map

## Purpose

Map MVP web app screens to the data records they require.

This ensures the data model supports the first app build before UI scaffolding begins.

## Dashboard

Required records:

- Workspace
- Client
- Episode
- Task
- Deliverable
- Approval
- Report
- Activity Log

Primary queries:

- Active clients by workspace
- Episodes by status
- Tasks due this week
- Pending approvals
- Blocked deliverables
- Reports due

## Client Setup

Required records:

- Client
- Client Membership
- Workspace Membership
- File Reference
- Activity Log

Primary queries:

- Client profile by id
- Assigned users by client
- Client Bible status
- Brand and asset links
- Setup checklist status

## Settings and Access

Required records:

- User
- Workspace Membership
- Client Membership
- Activity Log

Primary queries:

- Users by workspace
- Roles by workspace
- Users by client
- Approval authority by client
- Access change history

## Episode Pipeline

Required records:

- Client
- Episode
- Task
- Deliverable
- Approval
- Activity Log

Primary queries:

- Episodes by client
- Episode current stage
- Tasks by episode and status
- Deliverables by episode and status
- Pending approvals by episode

## Task Detail

Required records:

- Task
- User
- File Reference
- Deliverable
- Comment
- Activity Log

Primary queries:

- Task by id
- Assignee and creator
- Required input files
- Expected output deliverables
- Internal comments
- Blocker status

## Deliverable Review

Required records:

- Deliverable
- File Reference
- Approval
- Comment
- User
- Activity Log

Primary queries:

- Deliverable by id
- Current file or preview reference
- Approval status
- Revision comments
- Version history through activity logs

## Client Portal

Required records:

- Client
- Client Membership
- Episode
- Deliverable
- Approval
- Report
- File Reference
- Client-visible Activity Log

Primary queries:

- Client-visible episodes
- Pending approvals for client user
- Approved deliverables
- Client-visible reports
- Client-visible file references

## Reports

Required records:

- Report
- Client
- Episode
- Deliverable
- Approval
- File Reference

Primary queries:

- Reports by client
- Reports awaiting approval
- Report file references
- Reporting period

## Screen Readiness Rule

Do not build a screen until its required records and permission behavior are defined.
