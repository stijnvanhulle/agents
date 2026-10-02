---
name: writing
description: Write or tighten prose a person reads and acts on, such as a PR description, ticket, review reply, runbook step, error message, or instruction for an agent.
---

# Writing

This skill covers structure and content. The `plain-language` rule sets the standard and the
`humanizer` skill finds AI tells in finished text.

## Rules

- Lead with the answer. The verdict or the ask comes first, the reason after.
- Write for a tired reader who is not a native English speaker. Every sentence must survive one
  read.
- Cut filler. "Simply", "easily", "robust", and "comprehensive" carry no information.
- Leave out history: what you tried, when, how it compares to before. That belongs in a comment
  or nowhere. The reader wants the current state.
- Name the referent. Write the PR by number, the file or setting you changed, the person by name.
  Avoid "both", "the config", and "they".
- Copy every number and identifier from its source as you write. When a report has many figures,
  generate them with a script and diff them against the prose.
- Match the house format. Read several recent examples of the same kind in the same repo, such as
  PR descriptions or decision records, and follow them.
- Never anchor a prose field to a length ("about 150 words") or a count ("at least 5 findings").
  It pads thin input and truncates rich input.
- Use the team's words. Check that the repo uses a term before you use it. Names that only the
  code uses (functions, fields, events) describe nothing to the reader.
- A long doc gets skipped. A README is one screen. A diagram beats three paragraphs.

## Text a person acts on alone

Runbook steps, agent instructions, and error messages need one more pass.

- Decide whether the passage is procedural or descriptive and do not mix them.
- Procedural: imperative, one instruction per sentence, the condition before the command ("If the
  build fails, read the log"), 20 words at most.
- Descriptive: simple present, past, or future, one new fact per sentence, 25 words at most.
- Active voice. Only the modals `can`, `will`, and `must`. A suggestion is stated as a fact or
  deleted.
- No contractions, no `e.g.` or `i.e.`, and no `-ing` clause doing a verb's job (", making",
  ", ensuring").
- Keep articles and the word "that".
- One word per concept across the document. Pick one of check, verify, or confirm.
- A warning puts the command or the condition first and the risk second.
- Never change code, identifiers, commands, flags, paths, or quoted error messages.
