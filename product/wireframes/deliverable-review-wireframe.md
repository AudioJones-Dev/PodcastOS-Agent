# Deliverable Review Wireframe

## Purpose

Provide a focused review surface for approving, rejecting, or requesting revisions on deliverables.

## Primary Users

- Producer
- Agency admin
- Client owner
- Client reviewer

## Layout

```txt
+--------------------------------------------------------------+
| Deliverable Title                         [Approve] [Revise] |
+--------------------------------------------------------------+
| Meta: Client | Episode | Type | Version | Status | Gate       |
+--------------------------------------------------------------+
| Preview / File Link                                           |
+--------------------------------------------------------------+
| Review Checklist                    | Approval Panel          |
| Comments                            | Version / Activity      |
+--------------------------------------------------------------+
```

## Deliverable Header

Fields:

- Title
- Type
- Version
- Status
- Client
- Episode
- Owner
- Approval gate

## Preview Area

Supports:

- External file link
- Local path reference
- Website draft link
- YouTube draft link
- Image preview later
- Document preview later

MVP can show link cards first.

## Review Checklist

Checklist depends on deliverable type.

Examples:

Production sheet:

- Strategic goal defined
- CTA included
- Topic approved
- Clip opportunities listed

Long-form edit:

- Audio/video acceptable
- Intro/outro correct
- CTA included
- Brand issues checked

Publishing checklist:

- Title approved
- Description approved
- Thumbnail approved
- Links checked
- Publish date confirmed

## Approval Panel

Required controls:

- Approve
- Request revision
- Reject
- Add comment

Revision request must require a comment.

## Version and Activity

Shows:

- Current version
- Previous versions
- Approval history
- Revision history
- File reference changes

## Empty States

No preview:

```txt
No preview or file link has been attached.
```

No approval required:

```txt
This deliverable does not require approval.
```

## Data Dependencies

- Deliverable
- Approval
- File Reference
- Comment
- User
- Activity Log

## UX Rule

Approval actions should be visually obvious and gated. Publishing approval should never be implied by edit approval.
