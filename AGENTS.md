<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router, Turbopack, React 19) portfolio site — no backend, database, or environment variables. Scripts live in `package.json` (`dev`, `build`, `start`, `lint`).

- Dev server: `npm run dev` serves on http://localhost:3000. Run it in a long-lived tmux session (not a one-shot background job).
- `npm run lint` currently reports pre-existing errors/warnings (e.g. `react-hooks/set-state-in-effect` in `components/ThemeToggle.tsx`, an unused var in `lib/caseStudies.ts`). These are not caused by environment setup — do not assume you broke something.
- Content is data-driven: work/case-study pages come from `lib/*.ts` (`projects.ts`, `caseStudies.ts`, `resume.ts`); `/work/[slug]` routes are statically generated from these.
