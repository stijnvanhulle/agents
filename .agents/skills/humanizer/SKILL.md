---
name: humanizer
description: Finds AI writing tells and applies only the rewrites the user confirms, or fixes them in place in text the agent wrote in the same task. Use on docs, comments, PR text, changesets, and any prose before it ships, or when asked whether text sounds generated.
---

# Humanizer

Make prose read as if a person who knows the subject wrote it.

## 1. Mark the tells

Check the groups that apply to the text. [references/patterns.md](references/patterns.md) has
the phrase lists and a before and after for each group. A short text with no match needs no
reference.

| Group | Tells | Applies to |
| --- | --- | --- |
| Language | AI vocabulary, "serves as", negative parallelism, rule of three, elegant variation, false ranges, filler, hedging, generic conclusions | All text |
| Style | dashes or semicolons joining clauses, bold on ordinary words, inline-header lists, title-case headings, emoji | All text |
| Structure | history in the deliverable, vague referents, remembered numbers, count anchors, unmatched house format, instruction shape | PR text, tickets, runbooks, skill files |
| Content | undue significance, empty credibility, -ing filler, marketing words, vague attribution, filler sections | Blog and marketing prose |
| Communication | chatbot artifacts, sycophantic openers | Chat output |

## 2. List, then ask

List every tell without editing (see Output). Then follow the `ask` skill: one question per
rewrite or closely related group, offering `Apply`, `Skip`, or `Show more`.

When you wrote the text yourself in this task, such as a docs page or PR body, fix the tells in
place without asking.

## 3. Apply what was confirmed

Apply only the confirmed rewrites. Then reread them, ask "what makes this obviously AI
generated?", and fix what that turns up.

For code and mixed diffs, the `deslop` skill runs the same confirm step.

## 4. Add voice, for blog and marketing prose only

Docs, comments, skill files, and PR text stay neutral. A blog post or marketing page with the
tells removed but no voice still reads as generated, so: react to facts with an opinion, vary
sentence length, admit complexity ("it works, but it feels like a workaround"), and use specific
details and natural asides.

## Output

One bullet per tell: `path:line`, the tell, the rewrite. Put a rewrite longer than a line in a
block under its bullet. A file with no tells gets one bullet saying so. After applying, one
bullet per change and one per skipped tell.
