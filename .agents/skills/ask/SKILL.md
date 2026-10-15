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

In the same reply as the picker call, and before it, write one bullet per decision: what it
changes and why. The picker has no room for detail and covers the chat on mobile, so the bullets
are the only place the user can judge each decision. A prose paragraph or a line such as
"findings will follow" is not a summary.

```md
- `render.tsx:14`: the comment still says "@kubb/ast pin". Reword to "Studio's Kubb pin", since
  `@kubb/ast` is no longer a direct dependency. Recommend Apply.
- `render.tsx:31`: `as ApiMeta` repeats the inferred type. Remove the cast. Recommend Apply.
```

## 3. Shape the questions

- Each question stands alone. Mobile clients hide the chat behind the picker, so name the thing
  (`Duplicated 402 logic in billing.ts?`) and never point at a number or letter only the chat
  defines (`Fix 3?`).
- Offer 2 to 4 real options, likely answer first. Mark the one you think is best `(Recommended)`
  and give the reason in its description.
- One question per independent decision, sent together. `AskUserQuestion` takes four per call,
  so send the rest in a follow-up call rather than dropping any. Merge questions only when their
  answers settle one decision.
- Per-item decisions, such as review findings, get one single-select question each, offering
  `Apply`, `Skip`, or a concrete alternative. Never a bundle such as `All (1-7)`, `None`, or
  `Apply both`.
- Allow multiple selection only when several answers can be true, never for per-item decisions.
- For an open question, offer likely answers and allow custom input, unless the calling skill
  forbids guessed options.
- Never put a secret or credential in an option. Ask for it in prose and never echo it.

## 4. Wait

Ask before the step, not after: do not write the file, commit, or push that the answer decides
until it arrives. When the question is skipped or unanswered, do not choose for the user, and do
not guess now and report the guess later. Stop at that decision, say what is missing, and finish
only the work that does not depend on it. A push or a version bump always waits.

## Output

The bullets, then the picker. After the answer, one bullet per decision naming the choice, then
the work it unlocked.
