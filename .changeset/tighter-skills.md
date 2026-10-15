---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

Skills and convention rules load about a fifth fewer words with the same instructions, so every request that loads them costs fewer tokens.

- `humanizer` fixes tells in place when you wrote the text yourself in the same task, and asks only about text someone else wrote.
- `ask` forbids bundled options such as `All (1-7)` for every caller, not only `deslop`.
