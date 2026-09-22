---
name: ask
description: Ask a blocking multiple-choice question with the client's native picker, or a lettered list when none exists.
---

# Ask

When a sibling skill says to ask, inspect the available tools and use the first match:

| Available tool | Use |
| --- | --- |
| `AskUserQuestion` | Claude Code / Desktop |
| `AskQuestion` | Cursor IDE / CLI |
| `request_user_input` | Codex CLI |
| Neither | Lettered options in chat; ask for the letter |

Never call an unavailable tool or guess the client.

## Question shape

- Offer 2–4 real options, likely answer first.
- Batch into one question only when the answers settle a single decision. When each answer
  stands on its own, such as which review findings to fix, ask one question per decision
  instead of bundling them behind grouped options.
- For an open question, offer likely answers and leave `Other` for custom input.
- Enable multiple selection only when several answers can be true.
- Cursor and Codex mark the likely label `(Recommended)`.
- A lettered fallback uses the same options and order, plus `Other`.
- Never put a secret or credential in an option. Ask for it in prose and never echo it.

## Codex

`request_user_input` is tighter than the other two pickers:

- Three questions at most, three options each, and no multiple selection. Ask the decisions
  that block you and take the rest next turn.
- Codex appends `Other` on its own, so leave it out. Send no options at all for a question with
  no likely answers to offer.
- Every option needs a label of a few words plus one sentence on what picking it means.
- Plan mode always has the tool. Default mode needs the `default_mode_request_user_input`
  feature flag, and a subagent cannot call it at all, so use the lettered fallback once Codex
  reports it unavailable.

Stop until the answer arrives. Do not guess now and report the guess later.
