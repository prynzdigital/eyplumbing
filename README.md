# EY Plumbing Solution — Website Source

Next.js 14 (App Router) + TypeScript + TailwindCSS. Built by the PRYNZ Developer Agent, Stage 5,
from the approved Stage 2 (SEO), Stage 3 (Content), and Stage 4 (Design) outputs in
`.prynz/clients/ey-plumbing-solutions/`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Environment Variables

See `05-development/build-notes.md` for the full list (names only — no secrets are required for
this build; there is no form backend, CMS, or analytics wired up yet).

## Structure

```
app/                 Next.js App Router routes (19 pages per 02-seo/metadata.md)
components/ui/        Design-system primitives (Button/CallCTA, Card, Accordion, etc.)
components/sections/  Page-section building blocks (Hero, EmergencyBand, etc.)
components/layout/     Header, Footer, StickyEmergencyBar
lib/                  Business constants (NAP, services, towns, FAQ), schema.org builders
public/               Static assets (currently empty — see public/README.md)
```

See `05-development/build-notes.md` for stack details, known limitations, and the QA smoke-test
checklist.
