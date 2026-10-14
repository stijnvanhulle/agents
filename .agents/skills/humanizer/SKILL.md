---
name: humanizer
description: Finds AI writing tells and applies only the rewrites the user confirms. Use on docs, comments, PR text, changesets, and any prose before it ships, or when asked whether text sounds generated.
---

# Humanizer

Make prose read as if a person who knows the subject wrote it.

## 1. Read and mark

Mark every tell from the groups below. Open
[references/patterns.md](references/patterns.md) for the phrase lists and an example of each
group; a short text with no match needs no reference.

| Group | Tells | Applies to |
| --- | --- | --- |
| Language | AI vocabulary, "serves as", negative parallelism, rule of three, elegant variation, false ranges, filler, hedging, generic conclusions | All text |
| Style | dashes or semicolons joining clauses, bold on ordinary words, inline-header lists, title-case headings, emoji | All text |
| Structure | history in the deliverable, vague referents, remembered numbers, count anchors, unmatched house format, instruction shape | PR text, tickets, runbooks, skill files |
| Content | undue significance, empty credibility, -ing filler, marketing words, vague attribution, filler sections | Blog and marketing prose |
| Communication | chatbot artifacts, sycophantic openers | Chat output |

## 2. List, then ask

List every tell (see Output) without editing. Then follow the `ask` skill: one question per
rewrite or closely related group, with `Apply`, `Skip`, or `Show more`, and `(Recommended)` on
your pick.

## 3. Apply what is confirmed

Apply only the confirmed rewrites. Then read the accepted rewrites once more, ask "what makes
this obviously AI generated?", and fix what that turns up.

## 4. Add voice, for blog and marketing prose only

Docs, comments, skill files, and PR text stay neutral; skip this step for them. For a blog post
or marketing page, removing patterns is only half the job, since sterile, voiceless writing is
just as obvious. Have opinions and react to facts instead of only reporting them. Vary sentence
rhythm: short punchy sentences, then longer ones that take their time. Acknowledge complexity
("it works, but it also feels like a workaround"), use specific details, and let natural asides
appear.

## Output

One line per tell: `path:line`, the tell, the rewrite; a rewrite longer than a line goes in a
block under it. A file with no tells gets one line saying so. After applying: what changed and
what was skipped, one line each.

## References

| File | Load when |
| --- | --- |
| [references/patterns.md](references/patterns.md) | You need the phrase list for a group, or an example of the rewrite |

## Related skills

| Skill | Use for |
| --- | --- |
| [deslop](../deslop/SKILL.md) | The same confirm step, for code and mixed diffs |
