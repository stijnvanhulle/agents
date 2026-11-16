---
"@stijnvanhulle/claude-plugin": minor
"@stijnvanhulle/cursor-plugin": minor
"@stijnvanhulle/codex-plugin": minor
---

Rename the `create-brain-note` skill to `brain-note`, so it no longer collides with the `/create-brain-note` command.

```diff
- $agents:create-brain-note owner/repo
+ $agents:brain-note owner/repo
```
