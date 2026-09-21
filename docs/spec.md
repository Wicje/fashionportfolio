# Spec — fashionportfolio v1

> Durable across refactors: NO file paths, NO line numbers, NO code dumps.

## 1. Problem

A fashion photographer loses bookings when art directors can't judge the work
in under a minute. No portfolio exists yet: no gallery, no bio, no contact
path. For agencies scouting talent, why now: every missed week is missed casts.

## 2. Solution

A luxury-soft, mobile-first portfolio site: separate routes for home (hero),
work (filterable gallery), about (bio + credits), contact (mailto CTA).
Smallest working version first: the work gallery with category filters —
if that slice sings, the rest is composition.

## 3. User stories

- As a visitor, I can browse every frame of the book in shoot order, so that
  I see the full range. Acceptance: all frames render with honest captions;
  no genre labels on uninspected frames.
- As an art director, I can read a short bio with credits/clients, so that
  I trust the photographer. Acceptance: bio + credits render on all widths.
- As an art director, I can contact via email in one click, so that I can
  start a booking. Acceptance: CTA is a plain mailto anchor, works with no JS.
- As a first-time visitor, I see a hero with positioning + CTA, so that I
  know what this is and where to go. Acceptance: hero + CTA visible at 375px.

## 4. Implementation decisions

- Seams (public interfaces): route-per-section (`/` hero, work gallery route,
  about route, contact route); `Gallery` renders the full book from works
  data (frame number + caption per entry); `WorkCard` shared by gallery grid
  and home preview; `ContactCTA` renders a mailto anchor (no action/backend).
- Testing seams: gallery filter behavior through its props/render contract;
  mailto CTA asserted as anchor attributes; route smoke via e2e.
- Out-of-scope for v1: see §6.

## 5. Testing decisions

- Unit at seams: gallery filtering (select category → visible set + empty
  state) through render contract; CTA anchor correctness.
- E2E: home → work → about → contact flow stays green; keyboard traversal
  of filters.
- Visual: baseline update only if intentional (luxury-soft direction change).

## 6. Out-of-scope

No payments / paid booking flow. No CMS / admin. No form backend (mailto
only). No lightbox. No i18n, no blog, no auth, no DB.

## 7. Readiness

- [x] Seams agreed with human
- [x] Tracer bullet identified (slice 01: gallery + filters)
- [ ] Labelled `ready-for-tickets` in footprint — YES, ready-for-tickets
