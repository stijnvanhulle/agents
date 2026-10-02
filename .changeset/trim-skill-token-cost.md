---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

Cut repeated text from the skills and fix wording. The `user-questions` rule and the `code-reviewer` subagent no longer restate the `ask`, `deslop`, and `jsdoc` content, and the Related skills tables keep only hand-off rows. `documentation` and `changelog` now say their VitePress sections apply only to repos with a VitePress docs site, with neutral examples and no invented percentages. `pr` now runs the scripts a repo defines and works without a pull request template. `AGENTS.md` no longer carries a generated copy of every skill description.
