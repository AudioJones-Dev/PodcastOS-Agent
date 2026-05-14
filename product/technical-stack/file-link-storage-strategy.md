# File and Link Storage Strategy

## Purpose

Define how Podcast OS should handle production files and deliverable references in the MVP.

## MVP Decision

Store file and link references only.

Do not store native media files in the first app milestone.

## Supported Reference Types

```yaml
providers:
  - local_path
  - google_drive
  - dropbox
  - frame_io
  - youtube
  - website
  - other
```

## File Reference Record

```yaml
file_reference:
  label: string
  url_or_path: string
  provider: local_path | google_drive | dropbox | frame_io | youtube | website | other
  client_visible: true | false
  deliverable_id: uuid | null
  task_id: uuid | null
```

## Why This Comes First

Podcast production files can be large and often already live in external systems.

The MVP should solve:

- Where is the file?
- Who can see it?
- What task or deliverable does it belong to?
- Is it approved?
- Is it published?

It should not yet solve:

- Large file uploads
- Video storage
- Transcoding
- Clip rendering
- Media CDN

## Future Storage Options

Potential future storage layers:

- Vercel Blob
- S3-compatible storage
- Google Drive integration
- Dropbox integration
- Frame.io integration

## Visibility Rule

Client visibility must be explicit on both:

- Deliverable
- File reference

This prevents an internal deliverable from leaking through a visible file link.

## Security Rule

Do not store secret-bearing URLs, API keys, private credentials, or unrestricted internal drive links without access review.
