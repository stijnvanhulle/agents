---
name: ask
description: Ask a multiple-choice question with the client's native picker, or a lettered list when none exists.
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

Never call an unavailable tool or guess the client.

## Question shape

- Offer 2 to 4 real options, likely answer first.
- Batch into one question only when the answers settle a single decision. When each answer
  stands on its own, such as which review findings to fix, ask one question per decision
  instead of bundling them behind grouped options.
- For an open question, offer likely answers and allow custom input.
- Enable multiple selection only when several answers can be true.
- Cursor and Codex mark the likely label `(Recommended)`.
- A lettered fallback uses the same options and order, plus `Other`.
- Never put a secret or credential in an option. Ask for it in prose and never echo it.
- With Paseo's async picker, ask at most three questions per call and keep titles and options
  short. The user can enter a free-text answer, so do not add a redundant `Other` option. Put the
  recommended option first.

## Codex

`request_user_input` is available in Plan mode and is tighter than the other pickers:

- Three questions at most, three options each, and no multiple selection. Ask the decisions
  that block you and take the rest next turn.
- Codex appends `Other` on its own, so leave it out. Send no options at all for a question with
  no likely answers to offer.
- Every option needs a label of a few words plus one sentence on what picking it means.

### Paseo's async picker

When `request_user_input_async` is available, use it instead of the lettered fallback. It returns
before the user answers. Continue independent work, but pause every action that depends on the
answer until the user's reply arrives. Do not treat elapsed time or an empty response as an answer.

With a blocking picker, stop until the answer arrives. Do not guess now and report the guess later.
