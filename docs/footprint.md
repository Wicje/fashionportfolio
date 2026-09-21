# Footprint — project memory (no-context recovery)

> This file is the project's long-term memory. An agent with ZERO prior
> context must be able to read ONLY this file + `docs/brief.md` and
> continue work safely. Keep it short, factual, current.
> Rule: read it first, update it last — every task.

## 1. Snapshot (stable — update only when it changes)
- **Project:** fashionportfolio
- **What it is (1 line):** _e.g. Landing page for a fashion photographer_
- **Stack:** Next.js + TypeScript + Tailwind (factory default)
- **Template:** unknown (landing | portfolio | dashboard | none)
- **Key routes/files:**
  - `src/app/page.tsx` — main page
  - `src/components/ui/` — shared components (do not duplicate)
- **Accounts:** github: no | vercel: no | supabase: no
- **Env / secrets needed:** _e.g. none, or SENTRY_DSN in .env.local_

## 2. Current state (update every task — 3 lines max)
- **Last known good:** 2026-09-21 — lint+build pass, ticket 01 gallery-filters done (`/work`)
- **Now working on:** ticket 02 hero-cta (frontier, unblocked)
- **Blocked / needs human:** real photos/bio/credits/booking email pending from owner

## 3. Decisions (why, not what — append, never rewrite)
| Date | Decision | Why |
|------|----------|-----|
| _2026-09-19_ | _Use mailto for contact, no backend yet_ | _Keep v1 shippable, no DB needed_ |

## 4. Change log (append-only — newest at bottom, 5 lines per entry max)
### Format for each entry (copy/paste):
```md
## YYYY-MM-DD HH:MM — short title
- Changed: what files / sections changed
- Reason: why (brief ref, bug, request)
- Checks: lint pass/fail, build pass/fail, tests pass/fail
- Notes: anything the next agent must know
```

### Log starts here:
## 2026-09-19 — project created
- Changed: scaffolded from factory template unknown
- Reason: initial creation via `./factory.sh new fashionportfolio`
- Checks: not-run yet
- Notes: fill in Snapshot + Brief before first agent run

<!-- APPEND NEW ENTRIES BELOW THIS LINE — do not edit old entries -->

## 2026-09-21 — grill → spec → tickets done
- Changed: `docs/brief.md` (new), `docs/spec.md` (new), 5 local tickets, footprint state/TODOs
- Reason: user asked to write brief then grill→spec→tickets; multi-route + self-contained gallery + gallery-first per human
- Checks: not-run (no code yet — docs only per grill-brief/to-spec/to-tickets)
- Notes: tracer 01 first; owner assets pending; implement tickets in fresh context per ticket

## 2026-09-21 — ticket 01 gallery-filters done
- Changed: new `src/data/works.ts`, `src/components/gallery.tsx`, `src/app/work/page.tsx`
- Reason: tracer bullet — proves content pipeline, luxury-soft direction, filter state
- Checks: lint pass, build pass (`/work` prerendered); unit N/A (no harness in package.json)
- Notes: stand-in gradient blocks with alt labels; empty Backstage category proves empty state; reused Button/Container/Text

## 5. Open TODOs / Next steps
- [x] ticket 01 gallery-filters done (`/work` route, lint+build green)
- [ ] tickets 02 hero-cta, 03 about-bio, 04 contact-mailto ready (parallelizable)
- [ ] ticket 05 nav-polish blocked by 02–04
- [ ] owner to supply: real photos, bio, credits, booking email
- [ ] note: no `test:unit` harness in package.json — unit N/A until one is added

## 6. Resume prompt (for a fresh agent with no memory)
> Read `docs/footprint.md`, `docs/brief.md`, `docs/coding-rules.md`, `AGENTS.md`.
> Then run `git log --oneline -10` and `git status --short`.
> Continue from "Now working on" + "Open TODOs" above. Do not re-do done work.

---
**Maintenance rules (token budget):**
1. Update Sections 2 + 4 + 5 at the END of every agent task. No exceptions.
2. One entry per task. Max ~10 lines. Facts only, no play-by-play.
3. Never rewrite history — append only. Fix mistakes with a new entry.
4. If log exceeds ~200 lines, archive oldest entries to `docs/footprint-archive-YYYY-MM.md` and keep a 1-line summary pointer here.
5. `factory.sh` helpers: `./factory.sh footprint <project> "message"` appends a timestamped entry with git state. `./factory.sh footprint <project> --show` prints Current state + last 5 entries.
