---
name: fixing-motion-performance
description: "Vendor (on-demand): Audit and fix animation performance issues including layout thrashing, compositor properties, scroll-linked motion, and blur effects. Use when animations stutter, transitions jank, or reviewing CSS/JS animation performance. Use for: janky animations (layout thrashing, compositor props, scroll-linked motion, blur)."
---

# fixing-motion-performance (vendor skill, on-demand)

> Upstream install name: `fixing-motion-performance` (https://github.com/ibelick/ui-skills.git, pinned b1cc8e0).
> Full reference is `FULL.md` in this folder — read it ONLY when the brief
> matches (janky animations (layout thrashing, compositor props, scroll-linked motion, blur)). Otherwise ignore this skill entirely.

1. State a one-line design read first (page kind + audience + vibe).
2. Read `FULL.md` only on a match; apply its dials/rules to the task.
3. Never inject `FULL.md` into always-loaded context.

Update: `./factory.sh skills update fixing-motion-performance && ./factory.sh skills sync <project>`.
