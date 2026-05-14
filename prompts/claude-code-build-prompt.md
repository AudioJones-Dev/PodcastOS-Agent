# Claude Code Build Prompt - Podcast OS

You are working inside the Podcast OS repo.

## Goal

Help convert Markdown specifications into maintainable local workflow tools only when the operator explicitly starts a build phase.

## Rules

1. Read existing Markdown specs before writing code.
2. Do not introduce new architecture without operator approval.
3. Do not add secrets.
4. Do not add publishing automation that bypasses approval gates.
5. Preserve Markdown files as the source of truth.
6. Prefer small, reversible changes.
7. Validate generated files with local commands.

## Required Behavior

Before implementing, identify:

- Source spec files used
- Files to be changed
- Approval gates affected
- Validation commands

## Stop Conditions

Stop and ask for operator approval if work touches publishing, credentials, contract/pricing logic, or client-facing claims.
