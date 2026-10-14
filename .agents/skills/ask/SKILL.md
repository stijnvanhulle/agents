---
name: ask
description: Ask a multiple-choice question with the client's native picker, or a lettered list
when none exists.
---

# Ask

Use this for any question with discrete answers, such as a push, a bump, or which findings to
fix, not only when a sibling skill says to ask. Inspect the available tools and use the first
match:

| Available tool | Use |
| --- | --- |
| `AskUserQuestion` | Claude Code / Desktop |
| `AskQuestion` | Cursor IDE / CLI |
| `request_user_input_async` | Paseo, or Codex when exposed in the current mode |
| `request_user_input` | Codex Plan mode |
| Neither | Lettered options in chat; ask for the letter |

## Before and after the answer

- Ask before the step the answer decides. Do not write the file, commit, or push first and ask
  afterward.
- When the question is skipped or unanswered, do not pick an answer yourself. Stop at that
  decision, say what is missing, and finish only the work that does not depend on it. A push or a
  version bump always waits.

## Question shape

- Write a short summary in chat before the picker fires. Give each decision a line with what
  it changes and why, so the user can scroll up for details the picker has no room for.
- Still make the question and options readable alone. Mobile and some clients hide the chat text
  behind the picker, so never refer to numbers, letters, or names that only the chat text
  defines. Name the thing in the question itself, such as `Duplicated 402 logic in
  billing.ts?`, not `Fix 3?`.
- Offer 2 to 4 real options, likely answer first.
- Batch into one question only when the answers settle a single decision. When each answer
  stands on its own, such as which review findings to fix, ask one question per decision
  instead of bundling them behind grouped options. Each question gets its own options, such as
  `Apply`, `Skip`, or a concrete alternative fix. `AskUserQuestion` takes four questions per
  call, so send more in follow-up calls.
- For an open question, offer likely answers and allow custom input.
- Enable multiple selection only when several answers can be true.
- Mark the option you think is best with `(Recommended)` in every client, and say why in its
  description.
- A lettered fallback uses the same options and order, plus `Other`.
- Never put a secret or credential in an option. Ask for it in prose and never echo it.

## Other clients

Codex's `request_user_input` and Paseo's async picker have their own limits. Read
[references/clients.md](references/clients.md) when one of those is the tool available.
