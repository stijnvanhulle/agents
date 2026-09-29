---
name: brain
description: Save a concise daily recap or an idea from the current conversation to stijnvanhulle/brain.
---

# Brain

Save a useful note from the current conversation in the private `stijnvanhulle/brain` repository.

## Choose the content

- When the command has an argument, use it as the idea or topic to capture. Include relevant context from the conversation.
- Without an argument, summarize the substantive ideas, decisions, and next steps discussed today. Leave out unrelated small talk.
- Use only information available in this conversation. Do not invent decisions, outcomes, or next steps.
- If there is no substantive content to save, ask the user what to capture using the `ask` skill.
- Check the draft for secrets. Leave out credentials and personal data that are not needed to explain the idea.

## Write the note

Use the current local date in `YYYY-MM-DD` form. Save to `daily/YYYY-MM-DD.md` on the default branch of `stijnvanhulle/brain`.

Create the file with `# YYYY-MM-DD` if it does not exist. Add one `##` heading per idea or recap, followed by a short paragraph or bullets that explain the idea, any decision made, and concrete next steps when there are any. Keep the wording specific and brief. Do not add empty sections.

Read the existing file before writing. If the same idea is already there, update that entry instead of adding a duplicate. Preserve other entries. Use an authenticated GitHub tool or `gh` to read and write the file. When updating through the GitHub contents API, include the current file SHA and retry after re-reading if the file changed concurrently. Do not modify the user's working tree just to save the note.

The command itself authorizes saving the note. If repository access fails, leave the note unwritten and report the error. After a successful write, return the note URL and a one-sentence summary of what was saved.
