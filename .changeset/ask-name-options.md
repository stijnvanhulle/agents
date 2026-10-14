---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

`ask` and `deslop` make each question readable on its own, including on mobile where the picker hides the chat text.

- `ask` writes a short summary in chat before the picker, so you can scroll up for details.
- Each question names its subject instead of a number such as `1-7`.
- `deslop` asks one question per finding with its own options instead of bundles.
- Every client marks the best option `(Recommended)`.
