---
name: repo-describe
description: "Sync the GitHub repo description from docs/brief.md (and spec). Use when the remote description is generic, stale, or the human says 'update the repo description'."
version: 1
disable-model-invocation: true
---

# repo-describe — brief -> GitHub description

Use when the GitHub description is generic ("Created with Software
Factory"), stale, or the human asks. Goal: one line telling a stranger
what the project is and who it's for.

## Preconditions (fail closed)

1. Remote must exist: `git remote get-url origin` inside the project.
   None -> stop: push with `--github` first (or `gh repo create --source . --push`).
2. `gh auth status` must pass. Fails -> stop: run `gh auth login`.

## Rounds

1. Read `docs/footprint.md` + `docs/brief.md` (+ `docs/spec.md`
   if non-empty). Facts the brief doesn't state MUST NOT appear.
2. Draft ONE candidate, max ~140 chars: what it is + who it's for.
   No hype ("revolutionary", "blazingly"), no emoji, no trailing period.
3. Show current (`gh repo view --json description -q .description`)
   vs candidate. Ask one question: apply, edit, or skip.
4. On apply, run inside the project dir (owner/repo resolves
   from the remote): `gh repo edit --description "<candidate>"`.
   Then re-read to verify it stuck.

## Enforcement

- MUST NOT write code, run builds, or touch any file except one
  short `docs/footprint.md` entry (old -> new description, date).
- MUST derive only from brief/spec. Vague brief -> say so and
  grill it first (`Call the Skill tool with "grill-brief"`), don't invent.
- MUST confirm before applying. Never batch-apply across projects.
- Reject: over ~140 chars, claims the brief doesn't support,
  touching topics/homepage (out of scope — say so if asked).
