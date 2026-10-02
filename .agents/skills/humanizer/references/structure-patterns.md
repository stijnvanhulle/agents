# Structure patterns

Tells in how a text is built rather than how it sounds. They matter most for text a person acts
on alone, such as a PR description, a ticket, a runbook step, an error message, or an instruction
for an agent.

## History in the deliverable

What you tried, when, and how it compares to before does not belong in the result. The reader
wants the current state. Put the story in a comment or leave it out.

> Before: "Previously this used a polling loop, which we replaced after profiling showed it was
> 40% slower."
> After: "The job waits for the queue event instead of polling."

## Vague referents

Name the thing: the PR by number, the file or setting you changed, the person by name. Avoid
"both", "the config", and "they".

> Before: "Both PRs touch the config, so they need to land together."
> After: "#41 and #44 both edit `vite.config.ts`, so they need to land together."

## Remembered numbers

Copy every number and identifier from its source as you write. When a report has many figures,
generate them with a script and diff them against the prose.

## Length and count anchors

Do not anchor a prose field to a length ("about 150 words") or a count ("at least 5 findings").
It pads thin input and truncates rich input.

## Unmatched house format

Read several recent examples of the same kind in the same repository, such as merged PR
descriptions or decision records, and follow them before inventing a layout.

## Instructions a person or agent acts on

- One instruction per sentence, with the condition before the command ("If the build fails, read
  the log").
- A warning puts the command or the condition first and the risk second.
- One word per concept across the document. Pick one of check, verify, or confirm.
- State each instruction once. Before adding a rule, find the rule that contradicts it and
  rewrite that one instead.
- When you forbid something, name what to do instead in the same sentence.
- No capitals for emphasis and no `MUST`. A competent reader follows calm prose.
- Never change code, identifiers, commands, flags, paths, or quoted error messages.
