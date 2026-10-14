---
"@stijnvanhulle/claude-plugin": patch
"@stijnvanhulle/codex-plugin": patch
"@stijnvanhulle/cursor-plugin": patch
---

The `jsdoc` rule now applies to every request, so projects that install the plugin get the multi-line JSDoc format.

- Before, the rule loaded only when the agent opened a `.ts` file inside this repo, so other projects never saw it.
- The rule shows a one-sentence type property in multi-line form.
