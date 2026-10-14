---
name: humanizer
description: Find AI writing tells and apply only confirmed rewrites. Use on docs, comments, PR
text, and any prose before it ships.
---

# Humanizer

Identifies and removes AI-generated text patterns so writing sounds natural and specific
instead of generic and hollow.

## Process

1. Read the input text.
2. Identify AI patterns using the references below.
3. List every tell: file or passage, the pattern it matches, and the proposed rewrite. Do not
   edit anything yet.
4. Follow the `ask` skill to confirm before applying: apply / skip / show more, per rewrite or
   per closely related group.
5. Apply only what is confirmed. Then do a final anti-AI pass on the accepted rewrites: ask
   "what makes this obviously AI generated?", name remaining tells, and fix those too.

## Adding voice (blog and marketing prose only)

Docs, comments, skill files, and PR text stay neutral; skip this section for them. For a blog
post or marketing page, removing patterns is only half the job. Sterile, voiceless writing is just
as obvious. Have opinions and react to facts instead of only reporting them. Vary sentence rhythm:
short punchy sentences, then longer ones that take their time. Acknowledge complexity ("it works,
but it also feels like a workaround"), use specific details, and let natural asides appear.

## Pattern references

Load the category you need. Docs, comments, and PR text need language, style, and structure.
Blog and marketing prose adds content. Chat output adds communication.

| Reference | Covers |
| --- | --- |
| [content-patterns.md](references/content-patterns.md) | Undue significance, empty credibility signals, -ing-participle filler, marketing language, vague attributions, generic filler sections |
| [language-patterns.md](references/language-patterns.md) | AI vocabulary, copula avoidance, negative parallelisms, rule-of-three, elegant variation, false ranges, filler and hedging, words to cut |
| [style-patterns.md](references/style-patterns.md) | Dashes and semicolons as punctuation, unnecessary bold, inline-header lists, title-case headings, emojis |
| [communication-patterns.md](references/communication-patterns.md) | Chatbot artifacts, sycophantic openers |
| [structure-patterns.md](references/structure-patterns.md) | History in the deliverable, vague referents, remembered numbers, count anchors, unmatched house format, instructions a person or agent acts on |

## Related skills

| Skill | Use for |
| --- | --- |
| [deslop](../deslop/SKILL.md) | The same confirm step, for code and mixed diffs |
