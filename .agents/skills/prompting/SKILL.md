---
name: prompting
description: Write or revise text a model reads, such as a skill, rule, agent prompt, tool description, or LLM judge, and decide when wording is the wrong lever.
---

# Prompting

The `writing` skill covers prose for people. This skill covers what is particular to text a
model reads.

Wording carries the work when the context around it is clean. A model filters a prompt the way a
person stops seeing furniture that has been in the room for months. The more standing text, the
less any one sentence means. When a rule is not followed, first ask what else is in the window:
a stale instruction, a skill loaded for another task, three overlapping ways of saying the same
thing. The fix is usually to cut, not to add.

Structure is the lever for what must never be missed, such as a required output field, a first
step with a visible result, or a value the model must quote from the data. Prose is the lever for
everything else, and it works when it is the only text on its subject.

## Writing the prompt

- Before adding a rule, find the rule that contradicts what you want, in every file that feeds
  the prompt. Rewrite or remove it instead of adding. The rule that wins is usually the most
  strongly worded one, not the most appropriate: an unconditional "use it whenever" beats a
  conditional "only when the description calls for it".
- When you change a rule, name what to do instead in the same sentence. Forbidding the wrong
  behavior only moves the failure elsewhere.
- State each instruction once.
- Say what a good result looks like and let the agent find the path. Long step lists ("first call
  X, then ask Y, then call Z") pile up into confusion.
- Write calm prose to a competent colleague. No capitals for emphasis, no `MUST`. Use at most one
  emphasis, where the model demonstrably needs it.
- Put no word or character target on a prose field, and no count anchor ("at least 5 findings").
  A "do not pad" line next to the anchor does not release the pressure.
- Anchor completeness to the source. Describe what unaccounted-for input looks like ("a gap in the
  timeline where the person is still working means you skipped steps") and let the count fall out.
- Skill and tool descriptions are routing text. Say when to use it and what it does, so the right
  skill loads for the right task. Keep the body for what the agent would not do on its own.

## Judges and evaluators

- Order the output so analysis and reasons come before verdicts and scores.
- Prefer free-form description when a person or another model reads the result. Keep a small
  structured spine for what must be sorted or trended, such as a score, a boolean flag, or a
  confidence level. Quotes belong in the prose, not a separate field.
- Never let the judged agent's account of its own work stand in for what happened. Check its
  claims against its tool calls. A difference between the two is a finding.
- Require the exact words as evidence for every verdict.
- Do not force facts that do not compare into one number. "4 excellent cards out of 5 requested"
  is neither a 3 nor a 5. Score what was delivered, flag the gap, and describe it.
- Pin the scoring target (the whole requested set, or the final artifact).
- Models criticize their tools, prompts, and context more readily than themselves. Use that
  framing to surface problems, not to get a calibrated score.
- The deciding judge is independent of what it grades: a different model family from every
  candidate, and never the model that produced the material. Two runs of one prompt are one
  opinion.
- With a few dozen labeled examples or fewer, write one careful judge prompt and score it on a
  train and a test split. Read the gap between them. Tuning against that little data fits the
  labels you have.

## Check the change

Judge a wording change by whether the failure it targets drops, per attempt, quoting the line
that shows it. Prose that reads better is not evidence. If the failure does not drop, change the
mechanism, such as a check that fails or a required output field, not the wording.
