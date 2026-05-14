# Auth and Access Enforcement

## Purpose

Define authentication and authorization decisions for the Podcast OS web app.

## Authentication Decision

Use Auth.js for identity and session handling.

Auth.js is responsible for:

- Sign in
- Sign out
- Session retrieval
- Provider integration
- Invite acceptance flow support

Auth.js is not the full business permission system.

## Authorization Decision

Use database-backed authorization based on:

- Workspace Membership
- Client Membership
- Approval Authority
- Entity ownership
- Client-visible flags

## Enforcement Layers

### UI Layer

The UI can hide actions the user should not see.

This is convenience, not security.

### Middleware Layer

Middleware can perform optimistic route checks:

- Signed in or not signed in
- Basic workspace access
- Basic client portal access

Middleware should not be the only access check for sensitive data.

### Data Access Layer

The data access layer is the secure enforcement point.

Every sensitive query or mutation should check:

- Who is the user?
- What workspace are they in?
- What client scope do they have?
- What role do they hold?
- Are they allowed to perform this action?

## Permission Helpers

Recommended helpers:

```txt
requireUser()
requireWorkspaceAccess()
requireClientAccess()
requireEpisodeAccess()
requireTaskAccess()
requireDeliverableAccess()
requireApprovalAuthority()
canViewClientVisibleRecord()
```

## Role Rule

Roles grant baseline permissions. Specific approval authority must be explicit.

Example:

```yaml
client_membership:
  role: client_reviewer
  approval_authority: true
```

## Approval Rule

Approval decisions must verify the approver is allowed to decide that gate.

```yaml
approval_check:
  gate: publishing_approval
  required_authority: true
  allowed_scope: client
```

## Client Portal Rule

Client users only receive client-visible records.

Internal records remain hidden even when tied to the same client or episode.

## Audit Rule

Access changes and approval decisions must create activity log records.
