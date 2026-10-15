# Client-specific pickers

## Codex `request_user_input`

Available in Plan mode, and tighter than the other pickers:

- At most three questions with three options each, and no multiple selection. Ask what blocks
  you now and the rest next turn.
- Codex adds `Other` itself, so leave it out. Send no options for a question with no likely
  answers.
- Each option needs a label of a few words and one sentence on what picking it means.

## Paseo `request_user_input_async`

Use it instead of the lettered fallback. It returns before the user answers, so keep doing
independent work but pause every action that depends on the answer until the reply arrives.
Elapsed time or an empty response is not an answer.
