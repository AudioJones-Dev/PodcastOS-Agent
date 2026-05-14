# Client Setup Wireframe

## Purpose

Make onboarding a new client simple and structured.

## Primary Users

- Workspace owner
- Agency admin
- Producer

## Layout

```txt
+--------------------------------------------------------------+
| New Client Setup                              [Save] [Start] |
+--------------------------------------------------------------+
| Stepper: Profile -> Tier -> Users -> Assets -> Bible -> Start|
+--------------------------------------------------------------+
| Main Step Content                                             |
|                                                              |
| Right Rail: Setup Checklist / Missing Items / Next Action     |
+--------------------------------------------------------------+
```

## Step 1 - Client Profile

Fields:

- Client name
- Client slug
- Website
- Primary contact
- Business summary
- Status: prospect, onboarding, active

Primary action:

- Save and continue

## Step 2 - Service Tier

Fields:

- Tier 1 monthly
- Tier 2 bi-weekly
- Tier 3 weekly
- Start date
- Producer owner

Shows expected cadence:

- Episodes per month
- Production cycles per month
- Reporting expectation

## Step 3 - Users and Access

Fields:

- Invite client owner
- Invite client reviewer
- Invite host or guest
- Assign producer
- Assign editor or contractor

Access controls:

- Role
- Client scope
- Approval authority

## Step 4 - Assets and Links

Input rows:

- Brand assets
- Website
- Existing podcast
- Existing videos
- Social links
- Shared drive
- Discovery notes

Each row supports:

- Label
- Link or path
- Provider
- Client-visible toggle

## Step 5 - Client Bible Checklist

Checklist:

- Client profile
- Brand guidelines
- Offer map
- Ideal client profile
- Messaging notes
- Discovery summary

Each item:

- Not started
- Draft
- Needs review
- Approved

## Step 6 - Start Workflow

Options:

- Start discovery workflow
- Start Client Bible build
- Create first episode

## Empty States

No client users:

```txt
Add at least one client contact before requesting approvals.
```

No brand links:

```txt
Add brand assets now or mark them as missing.
```

## Data Dependencies

- Client
- User
- Workspace Membership
- Client Membership
- File Reference
- Activity Log

## Completion Criteria

Client setup is complete when the client exists, service tier is selected, internal owner is assigned, access is configured, and the next workflow is selected.
