# Client-specific pickers

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
