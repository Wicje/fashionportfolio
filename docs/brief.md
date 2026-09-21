# Brief — fashionportfolio v1

## 1. Purpose
Win client bookings (brands, agencies, magazines). A visitor sees the work,
trusts the photographer, and contacts via email. Single conversion: click contact.

## 2. Audience
- Primary: art directors / agencies scouting fashion photographers.
- Secondary: peers, press, collaborators.

## 3. Sections (v1)
1. **Hero** — name, one-line positioning, CTA to contact + selected-work teaser.
2. **Gallery** — work grid with category filters (e.g. Editorial / Campaign /
   Portrait — labels confirmed at build). Keyboard-accessible filter controls.
3. **About / Bio** — face, short bio, selected credits / clients / publications.
4. **Contact** — `mailto:` link/CTA (+ social links if supplied). No form backend.

## 4. Content
- Hybrid: owner supplies real photos, bio, credits; gaps filled with tasteful
  AI fashion stand-ins, clearly swappable later (data-driven gallery/bio).
- Copy: short, editorial. Real bio/credits pending from owner — placeholders
  must read as intentional, not lorem ipsum.

## 5. Design direction
Brand system (owner-supplied): charcoal `#23262B`, offwhite `#FAF6EF`,
peach `#F2A172` (+ deep ember `#9C4E22` for small-text accents). Thesis:
warm editorial confidence — charcoal ink on offwhite paper, peach as the
spark. Elegant serif display + clean sans body, generous whitespace,
image-led. All text pairs AA-verified (lowest: ember/offwhite 5.53).
Mobile-first (375px → up). No surprise styling beyond this direction.

## 6. Must-work states
- Gallery: loading skeletons (or instant if local data), empty state per
  filter ("No works in this category yet"), images always `alt` (or decorative).
- Filters keyboard-operable with visible focus + accessible names.
- Contact CTA works with no JS (plain `mailto:` anchor).
- No console errors; contrast passes; tab order sane.

## 7. Out of scope (v1 — explicit)
- No payments / paid booking flow.
- No CMS / admin editing (content edits are code/data-file changes).
- No contact-form backend (mailto only).
- No lightbox (grid + filters only; lightbox is a later ticket if wanted).
- No i18n, no blog, no auth, no DB.

## 8. Decisions log (from grill)
- 2026-09-21: mailto over form-backend — keep v1 shippable, no DB needed.
- 2026-09-21: grid + category filters (no lightbox) — fast, accessible v1.
- 2026-09-21: hybrid content (owner assets + AI stand-ins).
- 2026-09-21: brand pivot luxury-soft → charcoal/offwhite/peach (owner request);
  home enriched to 4 sections (hero, work preview, about teaser, CTA band) per
  frontend-design skill (marketing mode, one idea per section).
