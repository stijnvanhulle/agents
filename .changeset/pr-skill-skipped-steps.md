---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

`pr` stops before pushing when an earlier step did not run, instead of leaving it to the PR body.

- Asks to load the skill before the first commit when you open a PR.
- Renames an unpushed branch whose name does not match the `branch` shape.
- Splits an existing commit that mixes changes before the first push.
- Runs the check scripts from the repo root so they cover the whole workspace.
