---
name: ask
description: Puts a decision to the user through the client's native picker, or a lettered list when none exists. Use for any question with discrete answers, such as a push, a version bump, or which findings to fix, even when no other skill says to ask.
---

# Ask

Put a decision to the user and wait for the answer before the step it decides.

## 1. Pick the tool

Use the first one the session has. Never call a tool that is not available.

| Tool | Client |
| --- | --- |
| `AskUserQuestion` | Claude Code, Claude Desktop |
| `AskQuestion` | Cursor |
| `request_user_input_async` | Paseo, or Codex when the mode exposes it |
| `request_user_input` | Codex Plan mode |
| None | Lettered options in chat, same order plus `Other`. Ask for the letter |

Codex and Paseo pickers have their own limits. Read
[references/clients.md](references/clients.md) when one of them is the tool.

## 2. Summarize in bullets

Before the picker, write one bullet per decision in chat: what it changes and why. The picker has
no room for detail, so the bullets are where the user reads it. Never fold decisions into a prose
paragraph.

## 3. Shape the questions

- Each question stands alone. Mobile clients hide the chat behind the picker, so name the thing
  (`Duplicated 402 logic in billing.ts?`) and never point at a number or letter only the chat
  defines (`Fix 3?`).
- Offer 2 to 4 real options, best first. Mark it `(Recommended)` and give the reason in its
  description.
- One question per independent decision, sent together. `AskUserQuestion` takes four per call,
  so send the rest in a follow-up call. Merge questions only when their answers settle one
  decision.
- Per-item decisions, such as review findings, offer `Apply`, `Skip`, or a concrete
  alternative. Never a bundle such as `All (1-7)`.
- Allow multiple selection only when several answers can be true.
- For an open question, offer likely answers and allow custom input, unless the calling skill
  forbids guessed options.
- Never put a secret or credential in an option. Ask for it in prose and never echo it.

## 4. Wait

Ask before the step, not after: no file write, commit, or push until the answer arrives. When the
question is skipped or unanswered, do not choose for the user. Stop at that decision, say what is
missing, and finish only the work that does not depend on it. A push or a version bump always
waits.

## Output

The bullets, then the picker. After the answer, one bullet per decision naming the choice, then
the work it unlocked.
