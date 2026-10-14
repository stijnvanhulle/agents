---
"@stijnvanhulle/claude-plugin": minor
"@stijnvanhulle/codex-plugin": minor
"@stijnvanhulle/cursor-plugin": minor
---

Every skill shares one layout and states what it produces, so a run loads less text and returns a shorter result.

- Follow numbered steps, an `Output` section, and a `References` table in every skill.
- Trigger skills from the requests their descriptions now name.
- Load one `humanizer` pattern file instead of five.
- Load VitePress and blog guidance in `documentation` only for that kind of page.
- Prefer `const` with a ternary or a returning function over a reassigned `let` in `code-style`.

```diff
- let test = true
- if (allowed) {
-   test = false
- }
+ const test = !allowed
```
