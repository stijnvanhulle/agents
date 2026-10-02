---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

Cut repeated text from the skills and fix wording. The `user-questions` rule and the `code-reviewer` subagent no longer restate the `ask`, `deslop`, and `jsdoc` content, and the Related skills tables keep only hand-off rows. `documentation` and `changelog` now say their VitePress sections apply only to repos with a VitePress docs site, with neutral examples and no invented percentages. `pr` now runs the scripts a repo defines and works without a pull request template. `AGENTS.md` no longer carries a generated copy of every skill description. `pr` and `backlog` now ask through the `ask` skill before any push, and the `ask` skill covers any question with discrete answers. The `ask` skill now says to ask before the step the answer decides and to stop when a question is skipped, and `changeset` writes no file until the bump is known. `create-brain-note` asks for the repository as free text and never offers a guessed name.
