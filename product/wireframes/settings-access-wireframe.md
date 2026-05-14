# Settings and Access Wireframe

## Purpose

Manage workspace settings, users, roles, client access, and approval authority.

## Primary Users

- Workspace owner
- Agency admin

## Layout

```txt
+--------------------------------------------------------------+
| Settings                                                     |
+--------------------------------------------------------------+
| Tabs: Workspace | Users | Client Access | Approval Authority |
+--------------------------------------------------------------+
| Main Table / Form                                             |
| Right Rail: Selected User or Client Details                   |
+--------------------------------------------------------------+
```

## Workspace Tab

Fields:

- Workspace name
- Workspace slug
- Default timezone
- Default production cadence

## Users Tab

Columns:

- Name
- Email
- Workspace role
- Status
- Last active
- Actions

Actions:

- Invite user
- Change role
- Disable user
- Resend invite

## Client Access Tab

Filters:

- Client
- Role
- Status

Columns:

- User
- Client
- Role
- Approval authority
- Status
- Actions

Actions:

- Grant access
- Remove access
- Change role
- Toggle approval authority

## Approval Authority Tab

Rows:

- Client
- Gate
- Approver role
- Specific approvers
- Mode: any one, all required

Gates:

- Topic approval
- Production sheet approval
- Edit approval
- Thumbnail approval
- Publishing approval
- Report approval
- Strategy approval

## Empty States

No users:

```txt
Invite your first team member.
```

No client access:

```txt
Select a client to configure access.
```

## Data Dependencies

- User
- Workspace
- Workspace Membership
- Client
- Client Membership
- Approval
- Activity Log

## UX Rule

Access changes should be explicit and logged. The UI should avoid broad all-client access unless the user is an owner, admin, or producer who truly needs it.
