# Coding Rules - plain language

These rules exist so every project looks and works the same.
Follow them on every single project. No exceptions.

## Before you write code

- Read the design/requirements first. Ask questions if unclear.
- Note what the smallest working version is and build that first.

## While you write code

- **No dead code.** If you don't use it, delete it before finishing.
- **Name things clearly.** A variable called `users` is better than `d`.
- **One job per file.** A Button file makes buttons. Nothing else.
- **Type everything.** No `any` unless there is genuinely no type.
- **Mobile first.** Make it work small, then scale up.
- **Every user interaction must be keyboard-accessible and have a label.**
- **No inline styles.** Use classes. Reuse existing styles first.
- **No comments unless the code is confusing without them.** Prefer writing code that is self-explanatory.

## Before you commit

- Run `npm run lint` and `npm run build` locally. Both must pass.
- Re-read your diff. Does each change make sense? Remove experiments.
- Commit messages describe the change: "add pricing section", not "edit stuff".

## What "done" means

- Feature works on mobile and desktop
- Keyboard accessible, proper labels
- Lint passes, build passes
- Looks like the design (no surprise styling)

If any of these are uncertain, say so instead of assuming done.