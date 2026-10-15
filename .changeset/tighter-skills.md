---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

Skills and convention rules say the same with fewer words, and fix the ask, deslop, pr, and changeset mistakes seen in recent sessions.

- `ask` and the `user-questions` rule put the bullet summary in the same reply as the picker, give every item its own single-select question, and never offer `All`, `None`, or `Apply both`.
- `deslop` leaves fixes uncommitted and asks before committing, pushing, or opening a stacked PR.
- `pr` keeps a branch the session assigns, such as `claude/<name>`, instead of renaming it.
- `changeset` recommends the bump the repo's changelog history gives the same kind of change.
- `humanizer` fixes tells in place in text the agent wrote in the same task.
