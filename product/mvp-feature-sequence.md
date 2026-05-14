# MVP Feature Sequence

## Purpose

Define the build sequence for turning the Markdown Podcast OS foundation into a friendly web app.

## Phase 2.1 - Product Spec Lock

Status: Complete

Outputs:

- Web app product spec
- User roles and permissions
- Agency admin dashboard spec
- Client portal spec
- Deliverables workflow spec
- Task/access/deliverables spec
- Riverside benchmark notes

Completion criteria:

- Core users are defined.
- MVP modules are defined.
- Non-goals are explicit.
- Approval gates remain intact.

## Phase 2.2 - Data Model Lock

Status: Complete

Outputs:

- Workspace model
- Client model
- User/role model
- Episode model
- Task model
- Deliverable model
- Approval model
- Activity log model
- Entity relationship map
- Approval state machine
- Screen-to-data map
- MVP lock decisions

Completion criteria:

- Models support all MVP screens.
- Models support role-based access.
- Models support approval gates.
- Models support file/link references.

## Phase 2.3 - Wireframe Spec

Status: Complete

Outputs:

- App shell and navigation wireframe
- Dashboard wireframe
- Client setup wireframe
- Episode pipeline wireframe
- Task detail wireframe
- Deliverable review wireframe
- Client portal wireframe
- Settings/access wireframe
- Reports wireframe

Completion criteria:

- Every MVP workflow has a screen path.
- Every user role has a clear home view.
- Every approval has an obvious review action.

## Phase 2.4 - Technical Stack Decision

Status: Next

Recommended default:

- Next.js
- TypeScript
- Auth with role-based access
- Postgres
- File/link references first
- Storage integration later

Completion criteria:

- Stack decision is documented.
- Auth and data boundaries are defined.
- Local development path is clear.

## Phase 2.5 - App Scaffold

Status: Planned

Outputs:

- Web app scaffold
- Dashboard shell
- Client setup flow
- Episode pipeline prototype
- Task and deliverable screens
- Approval flow prototype

Completion criteria:

- The app runs locally.
- A demo agency can create a client and episode.
- A producer can assign a task.
- A client can approve a deliverable.

## Phase 2.6 - Workflow Generator Bridge

Status: Planned

Outputs:

- Generate client folders from app data
- Generate Client Bible starter files
- Generate episode folders
- Generate production sheets
- Generate publishing checklists
- Generate analytics templates

Completion criteria:

- Web app data can produce Markdown operating artifacts.
- Markdown specs remain aligned with app behavior.

## Build Rule

Do not scaffold the app until Phase 2.1 and Phase 2.2 are locked enough to avoid rework.
