---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

Questions from `ask` and `deslop` now read on their own, including on mobile where the picker hides the chat.

- Summarize each decision in chat before the picker opens.
- Name the subject in every question instead of a number.
- Ask one question per finding with `Apply` and `Skip` options.
- Mark the best option `(Recommended)` in every client.

```diff
- All (1-7) (Recommended)
- Real fixes only (1-3)
+ Unused `enabled` flag in Studio?    Apply (Recommended) / Skip
+ Duplicated 402 logic in billing.ts? Apply (Recommended) / Skip
```
