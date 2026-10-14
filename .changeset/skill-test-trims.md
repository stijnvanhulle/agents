---
"@stijnvanhulle/claude-plugin": minor
"@stijnvanhulle/codex-plugin": minor
"@stijnvanhulle/cursor-plugin": minor
---

Every skill now follows one layout: numbered steps, an Output section with the exact shape of the deliverable, a References table saying when to load each file, and Related skills. Each run loads less text and produces a shorter, comparable result.

- Descriptions are third person and name the requests that should trigger the skill.
- `deslop`, `humanizer`, `conventions`, `pr`, `changeset`, `jsdoc`, and `documentation` define their report shape, such as one line per finding or a pass/fail row per step.
- `humanizer` merges five reference files into one `patterns.md`; `SKILL.md` lists the tell groups so short texts need no reference.
- `documentation` splits `content-patterns.md` into `vitepress.md` and `blog.md`, loaded only for that kind of page.
- `ask` and `issue` move Codex, Paseo, and Jira guidance into reference files loaded only when that client or tracker is in use.
- `backlog` reads issue comments before triage; `branch` falls back to the title when no issue carries the requested label.
- `changelog` includes pending changesets and remote tags; `changeset` treats a behavior fix in a skill as `patch`.
- `code-style` prefers `const` with a ternary or a returning function over a `let` a branch reassigns.
