---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
"@stijnvanhulle/codex-plugin": patch
---

The `house` style draws visuals with the client's inline visual tool when the session has one, such as Claude's inline visuals, and falls back to Mermaid only in clients without one.

- Fix the `review` skill's frontmatter, which strict YAML loaders rejected.
- Stop `branch` and `backlog` from tracking `origin/main`, and drop the `git pull --ff-only` in `review` that failed before the first push.
- Run the `conventions` rules in the `code-reviewer` subagent instead of a hardcoded subset.
- Post inline review findings with `gh api` and `glab mr note create`, and triage with `gh issue edit`.
- Read the text after a Cursor command instead of `$1`, which Cursor does not fill in.
