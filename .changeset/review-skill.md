---
"@stijnvanhulle/claude-plugin": minor
"@stijnvanhulle/codex-plugin": minor
"@stijnvanhulle/cursor-plugin": minor
---

Add the `review` skill for a GitHub pull request or GitLab merge request.

- Give it a number or URL, or nothing for the current branch. It reads the request with `gh` or
  `glab`, checks out the branch, and runs the `conventions`, `deslop`, `jsdoc`, `humanizer`,
  `documentation`, and `pr` passes, through the `code-reviewer` subagent in Claude Code and Cursor.
- It then asks per finding whether to comment, fix, or skip, and asks for the verdict: comment,
  request changes, approve, or close. Nothing is posted, edited, or closed without an answer.
- The `code-reviewer` subagent now takes a diff file and returns its findings to the caller
  instead of trying to ask the user itself.
