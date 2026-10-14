---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

Every skill now loads less text per run and no longer makes the agent guess at a contradiction.

- `ask` and `issue` move Codex, Paseo, and Jira guidance into reference files that load only when that client or tracker is in use.
- `backlog` reads issue comments before triage, and `branch` falls back to the title when no issue carries the requested label.
- `changelog` includes pending changesets and remote tags; `changeset` treats a behavior fix in a skill as `patch`.
- `deslop` and `pr` state their audit-only and assess paths up front.
- `humanizer` limits "Adding voice" to blog and marketing prose and says which references apply to docs.
- `jsdoc`, `conventions`, and `documentation` drop the sections that repeated a sibling file.
- `code-style` prefers `const` with a ternary or a returning function over a `let` a branch reassigns.
