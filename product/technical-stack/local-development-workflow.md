# Local Development Workflow

## Purpose

Define the recommended local development setup for the future Podcast OS web app.

## Expected Environment

- Windows local workspace
- GitHub remote
- Node.js LTS
- npm
- Next.js App Router
- Postgres database
- `.env.local` for local environment values

## Future Scaffold Command

When app scaffolding begins, use a non-interactive command.

If scaffolding inside the existing repo root, use `--force` because the repo already contains Markdown files and Git metadata.

```bash
npx create-next-app@latest . --yes --force --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

## Recommended Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:studio": "drizzle-kit studio"
  }
}
```

## Environment Variables

Required:

```txt
DATABASE_URL=
AUTH_SECRET=
AUTH_URL=
```

Provider-specific values come later.

## Local Validation Sequence

After scaffold and implementation:

```bash
npm run typecheck
npm run lint
npm run build
```

When database migrations exist:

```bash
npm run db:generate
npm run db:migrate
```

## Secret Rule

Do not commit `.env.local`.

Do not paste secret values into Markdown, chat, issues, or commits.

## Repo Layout Rule

Keep specs in place.

Future app code can live alongside specs:

```txt
src/
product/
agents/
sops/
schemas/
templates/
workflows/
prompts/
docs/
```

## Development Server Rule

When the app exists, verify locally in the browser before claiming the UI works.
