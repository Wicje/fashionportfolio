---
name: create-design-md
description: "Vendor (on-demand): Create or update a DESIGN.md from an existing product repository or public website. Use when asked to document an interface's design language, reconstruct its visual system, extract design tokens and guidance from current evidence, or give coding agents persistent UI context. Do not modify product source or promote accidental implementation patterns into design decisions. Use for: creating/updating DESIGN.md design tokens from existing product or site."
---

# create-design-md (vendor skill, on-demand)

> Upstream install name: `create-design-md` (https://github.com/ibelick/ui-skills.git, pinned b1cc8e0).
> Full reference is `FULL.md` in this folder — read it ONLY when the brief
> matches (creating/updating DESIGN.md design tokens from existing product or site). Otherwise ignore this skill entirely.

1. State a one-line design read first (page kind + audience + vibe).
2. Read `FULL.md` only on a match; apply its dials/rules to the task.
3. Never inject `FULL.md` into always-loaded context.

Update: `./factory.sh skills update create-design-md && ./factory.sh skills sync <project>`.
