---
'@stijnvanhulle/claude-plugin': patch
'@stijnvanhulle/cursor-plugin': patch
'@stijnvanhulle/codex-plugin': patch
---

Make the `changeset` skill write shorter notes built from bullets and `diff` fences.

- Caps the headline at 20 words, the bullets at three, and the body at ten lines.
- Requires a `diff` fence when config or output changes, and never a paragraph after the headline.
