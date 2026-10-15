---
name: ask
description: Puts a decision to the user through the client's native picker, or a lettered list when none exists. Use for any question with discrete answers, such as a push, a version bump, or which findings to fix, even when no other skill says to ask.
---

# Ask

Put a decision to the user and wait for the answer.

## 1. Pick the tool

Use the first match. Never call a tool that is not available.

| Available tool | Use |
| --- | --- |
| `AskUserQuestion` | Claude Code / Desktop |
| `AskQuestion` | Cursor IDE / CLI |
| `request_user_input_async` | Paseo, or Codex when exposed in the current mode |
| `request_user_input` | Codex Plan mode |
| Neither | Lettered options in chat; ask for the letter |

Codex's `request_user_input` and Paseo's async picker have their own limits; read
[references/clients.md](references/clients.md) when one of those is the tool available.

## 2. Summarize first

Before the picker fires, write a bulleted list in chat, one bullet per decision: what it changes
and why. Never fold the decisions into a prose paragraph. The picker has no room for detail, so
this list is where the user scrolls for it.

## 3. Shape the question

- Make the question and options readable alone. Mobile and some clients hide the chat text
  behind the picker, so never refer to numbers, letters, or names that only the chat text
  defines. Name the thing in the question itself, such as `Duplicated 402 logic in
  billing.ts?`, not `Fix 3?`.
- Offer 2 to 4 real options, likely answer first. Mark the one you think is best
  `(Recommended)` in every client, and say why in its description.
- One question per decision, and independent decisions go as separate questions in the same
  call. Batch into one question only when the answers settle a single decision. When each answer
  stands on its own, such as which review findings to fix, each question gets its own options:
  `Apply`, `Skip`, or a concrete alternative. `AskUserQuestion` takes four questions per call, so
  send more in follow-up calls.
- For an open question, offer likely answers and allow custom input, unless the calling skill
  forbids guessed options.
- Enable multiple selection only when several answers can be true.
- A lettered fallback uses the same options and order, plus `Other`.
- Never put a secret or credential in an option. Ask for it in prose and never echo it.

## 4. Wait for the answer

- Ask before the step the answer decides. Do not write the file, commit, or push first and ask
  afterward.
- When the question is skipped or unanswered, do not pick an answer yourself. Stop at that
  decision, say what is missing, and finish only the work that does not depend on it. A push or a
  version bump always waits.

## Output

The bulleted summary, then the picker. After the answer, one bullet per decision naming what was
chosen, then the work that depended on it.

## References

| File | Load when |
| --- | --- |
| [references/clients.md](references/clients.md) | Codex or Paseo's picker is the tool available |
