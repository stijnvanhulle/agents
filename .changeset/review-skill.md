---
"@stijnvanhulle/claude-plugin": minor
"@stijnvanhulle/codex-plugin": minor
"@stijnvanhulle/cursor-plugin": minor
---

Rename the `pr` skill to `review` and give it a review mode for a GitHub pull request or GitLab merge request.

- Give it a number or URL, or nothing for the current branch. It reads the request with `gh` or
  `glab`, checks out the branch, and runs the `conventions`, `deslop`, `jsdoc`, `humanizer`, and
  `documentation` passes plus the ship steps as checks, through the `code-reviewer` subagent in
  Claude Code and Cursor.
- It then asks per finding whether to comment, fix, or skip, and asks for the verdict: comment,
  request changes, approve, or close. Nothing is posted, edited, or closed without an answer.
- The former `pr` steps are unchanged and now sit under a Ship heading. `/create-pr` and the
  `backlog` and `branch` skills point at that mode.
- New `github` and `gitlab` skills hold the `gh`, `glab`, and GitHub MCP commands. `review`,
  `issue`, `branch`, and `backlog` point at them instead of carrying the commands, so a tracker
  such as Linear can be added as one more skill.
- The `code-reviewer` subagent now takes a diff file and returns its findings to the caller
  instead of trying to ask the user itself.
