# AI writing patterns

Phrase lists for each group in `SKILL.md`, with one before and after per group.

## Language

- AI vocabulary: additionally, crucial, leverage, utilize, delve into, explore, plays a role in,
  it is worth noting, in today's world, navigate the complexities.
- Copula avoidance: serves as, acts as, functions as, where "is" works.
- Negative parallelism: "not just about X, but also about Y".
- Rule of three: three items by default. Use the real count.
- Elegant variation: different words for one thing (app, application) to avoid repetition.
- False ranges: "everything from small startups to large enterprises".
- Filler: in order to, has the ability to, is able to, due to the fact that, it is important to
  note that, it should be noted that.
- Hedging: might potentially, could possibly, may or may not.
- Generic conclusions: "Overall, the outlook is positive and the future looks promising."

| Replace | With |
| --- | --- |
| utilize, leverage | use |
| implement | add, build, create |
| facilitate | help, allow |
| comprehensive, seamless | omit |
| powerful, innovative, robust | the specific property |
| in order to | to |
| it is worth noting, as mentioned above | state it, or cut the reference |

> Before: "Additionally, the system plays a crucial role in optimizing workflows."
> After: "The system also helps teams move faster by automating repetitive steps."

## Style

- A dash joining clauses or setting off an aside: `—`, `–`, or a spaced ` - `. Use a comma,
  parentheses, or a new sentence. Hyphenated compounds such as `spec-driven` are fine.
- A semicolon joining two clauses.
- Bold on product names or ordinary words mid-sentence.
- Inline-header lists: bullets that open with a bold label and a colon. Labels that mirror a
  template's section names are fine.
- Title-case headings. Use sentence case.
- Emoji in documentation.

> Before: "The update improves performance — especially on older devices; it is also reliable."
> After: "The update improves performance, especially on older devices, and it is reliable."

## Structure

These matter most in text a person acts on alone: a PR body, a ticket, a runbook step, an error
message, or an instruction for an agent.

- History in the deliverable: what you tried, when, and how it compares to before. Give the
  current state.
- Vague referents: "both", "the config", "they". Name the PR number, the file, the person.
- Remembered numbers: copy each number and identifier from its source. For a report with many
  figures, generate them with a script and diff them against the prose.
- Count anchors: "about 150 words", "at least 5 findings". They pad thin input and cut rich
  input.
- Unmatched house format: read a few recent examples of the same kind in the repository before
  inventing a layout.
- Instruction shape:
  - One instruction per sentence, condition first: "If the build fails, read the log."
  - A warning puts the command or condition first and the risk second.
  - One word per concept: pick one of check, verify, or confirm.
  - State each instruction once. Before adding a rule, rewrite the one it contradicts.
  - When you forbid something, say what to do instead in the same sentence.
  - No capitals for emphasis and no `MUST`.
  - Never change code, identifiers, commands, flags, paths, or quoted error messages.

> Before: "Both PRs touch the config, so they need to land together."
> After: "#41 and #44 both edit `vite.config.ts`, so they need to land together."

## Content

Patterns that inflate or fake substance. Replace each with the specific fact or source.

- Undue significance: stands as, testament to, pivotal, underscores, highlights its importance,
  reflects broader, symbolizing, setting the stage, evolving landscape, key turning point.
- Credibility without content: independent coverage, major publications, leading expert, widely
  discussed, active social media presence.
- Fake depth with -ing words: highlighting, emphasizing, ensuring, reflecting, contributing,
  fostering, showcasing.
- Marketing words: vibrant, rich, breathtaking, renowned, nestled, powerful, seamless, intuitive,
  unlock their full potential.
- Vague attribution: experts argue, some critics, observers believe, industry reports suggest.
- Filler sections: "challenges and future prospects" or a conclusion with nothing concrete.

> Before: "The 2021 rebranding marked a pivotal moment in the company's evolution."
> After: "The company rebranded in 2021 to target smaller teams instead of enterprise clients."

## Communication

Chat habits that leak into finished writing.

- Chatbot artifacts: Here is a breakdown, Let me know if you need more details!, Certainly!,
  Of course!
- Sycophantic openers: Great question!, That's a really insightful observation, Absolutely!

> Before: "Great point. Here is a breakdown of the process. Let me know if you need more details!"
> After: "The process has three steps: data collection, processing, and analysis."
