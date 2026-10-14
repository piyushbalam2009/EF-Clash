# EF Clash — Rebuild (Stage 1)

A clean foundation for an eFootball tournament platform. This stage delivers the application shell, responsive design, route structure, and clearly labelled sample UI. It is **not yet a live tournament platform**: no authentication, registrations, rankings, match submissions, or data persistence are enabled.

## Requirements

- Node.js 20.19+ or 22.12+ (recommended for current Vite)
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`).

## Validate

```bash
npm run typecheck
npm run build
npm run preview
```

## Stage 1 includes

- Minimal professional gaming UI with responsive sidebar and mobile layout
- Overview dashboard and tournament cards
- Tournament search and status filters
- Leaderboard search and sorting
- Route placeholders for profile, players, activity, settings, and tournament details
- TypeScript strict mode
- `.gitignore` excludes local env files and build output
- `.env.example` contains placeholders only

## Stage 2 planned

- Supabase client and environment validation
- Database schema and Row Level Security
- Authentication and profile persistence
- Replace sample tournament data with database reads

## Security notes

- Never commit `.env`, `.env.local`, service-role keys, Gemini keys, or other private secrets.
- `VITE_*` variables are embedded in the browser bundle and are not secrets. Only a Supabase publishable/anon key and project URL belong in frontend config.
- Do not enable real tournament registration until database constraints and RLS policies are in place.
- AI verification will be added in a server-side function in a later stage; this stage has no verification endpoint.

## Design decisions

- React + TypeScript + Vite
- React Router
- Lucide icons
- CSS design system without a utility CSS build step
- Demo data lives only in `src/data/demo.ts` and is labelled as illustrative
