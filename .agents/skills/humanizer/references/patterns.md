# AI writing patterns

Phrase lists per group, with one before/after per group. The groups match the table in
`SKILL.md`.

## Language

- Overused AI vocabulary: additionally, crucial, leverage, utilize, delve into, explore, plays a
  role in, it is worth noting, in today's world, navigate the complexities.
- Copula avoidance: serves as, acts as, functions as, when "is" works.
- Negative parallelism: "not just about X, but also about Y".
- Rule of three: three-item lists by default. Use two or one when that is the accurate count.
- Elegant variation: different words for the same thing (app, application) to avoid repetition.
- False ranges: "everything from small startups to large enterprises".
- Filler: in order to, has the ability to, is able to, due to the fact that, it is important to
  note that, it should be noted that.
- Hedging: might potentially, could possibly, may or may not.
- Generic conclusions: "Overall, the outlook is positive and the future looks promising."

> Before: "Additionally, the system plays a crucial role in optimizing workflows."
> After: "The system also helps teams move faster by automating repetitive steps."

| Replace | With |
|---------|------|
| utilize, leverage | use |
| implement | add, build |
| facilitate | help, allow |
| comprehensive, seamless | omit |
| powerful, innovative, robust | be specific |
| in order to | to |
| it is worth noting | just state it |
| as mentioned above | cut the reference |

## Style

- Dashes joining clauses or setting off an aside: the em dash (`—`), the en dash (`–`), or a
  spaced hyphen (` - `). Use a comma, parentheses, or a separate sentence. Hyphenated compounds
  such as `spec-driven` are fine.
- Semicolons joining two clauses.
- Bold on product names, common nouns, or ordinary words mid-sentence.
- Inline-header lists: bullets that start with a bolded label and a colon.
- Title-case headings. Use sentence case.
- Emoji in documentation.

> Before: "The update improves performance — especially on older devices; it is also reliable."
> After: "The update improves performance, especially on older devices, and it is reliable."

## Structure

Tells in how a text is built. They matter most for text a person acts on alone: a PR
description, a ticket, a runbook step, an error message, an instruction for an agent.

- History in the deliverable: what you tried, when, and how it compares to before. The reader
  wants the current state.
- Vague referents: "both", "the config", "they". Name the PR by number, the file, the person.
- Remembered numbers: copy every number and identifier from its source as you write. When a
  report has many figures, generate them with a script and diff them against the prose.
- Length and count anchors: "about 150 words", "at least 5 findings". They pad thin input and
  truncate rich input.
- Unmatched house format: read several recent examples of the same kind in the same repository
  before inventing a layout.
- Instruction shape: one instruction per sentence, condition before command ("If the build
  fails, read the log"); a warning puts the command or condition first and the risk second; one
  word per concept (pick one of check, verify, confirm); state each instruction once, and before
  adding a rule rewrite the one it contradicts; when you forbid something, name what to do
  instead in the same sentence; no capitals for emphasis and no `MUST`; never change code,
  identifiers, commands, flags, paths, or quoted error messages.

> Before: "Both PRs touch the config, so they need to land together."
> After: "#41 and #44 both edit `vite.config.ts`, so they need to land together."

## Content

Patterns that inflate or fake substance. Replace each with the specific fact or source.

- Undue significance: stands as, testament to, pivotal, underscores, highlights its importance,
  reflects broader, symbolizing, setting the stage, evolving landscape, key turning point.
- Credibility signals without content: independent coverage, major publications, leading
  expert, widely discussed, active social media presence.
- Fake depth with -ing participles: highlighting, emphasizing, ensuring, reflecting,
  contributing, fostering, showcasing.
- Marketing language: vibrant, rich, breathtaking, renowned, nestled, powerful, seamless,
  intuitive, unlock their full potential.
- Vague attributions: experts argue, some critics, observers believe, industry reports suggest.
- Generic filler sections: "challenges and future prospects" or "conclusion" with nothing
  concrete.

> Before: "The 2021 rebranding marked a pivotal moment in the company's evolution."
> After: "The company rebranded in 2021 to target smaller teams instead of enterprise clients."

## Communication

Conversational artifacts that leak from a chat assistant into finished writing.

- Chatbot artifacts: Here is a breakdown, Let me know if you need more details!, Certainly!,
  Of course!.
- Sycophantic openers: Great question!, That's a really insightful observation, Absolutely!.

> Before: "Great point. Here is a breakdown of the process. Let me know if you need more details!"
> After: "The process has three steps: data collection, processing, and analysis."
