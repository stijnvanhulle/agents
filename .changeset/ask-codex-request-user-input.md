---
'@stijnvanhulle/claude-plugin': minor
'@stijnvanhulle/cursor-plugin': minor
'@stijnvanhulle/codex-plugin': minor
---

Use Codex's `request_user_input` picker instead of dropping to a lettered list.

- Adds `request_user_input` to the `ask` skill's tool table and the `user-questions` rule.
- Records the limits Codex enforces: three questions, three options, no multiple selection, and
  an `Other` option it appends itself.
- Notes that Default mode needs the `default_mode_request_user_input` flag and that a subagent
  cannot call the tool, so those sessions still get the lettered list.
