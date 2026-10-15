---
name: create-brain-note
description: Saves a conversation recap or an idea as a dated note in a chosen GitHub repository. Use when asked to note, save, remember, jot down, or recap something for later.
---

# Create a brain note

Append a dated entry to a notes repository on GitHub.

## 1. Pick the repository

The destination is the `owner/repo` the request names as the place to save. A repository the
note is about is not the destination. When none is named, ask for `owner/repo` as free text with
the `ask` skill. Never infer it from the working directory or offer a guessed name as an option.

## 2. Pick the content

When an idea follows the repository, summarize that idea. Otherwise recap today's conversation.
Use only known facts and leave out secrets. When there is nothing useful to save, ask what to
save.

## 3. Write the entry

On the default branch, open `daily/YYYY-MM-DD.md` for the local date, creating it with
`# YYYY-MM-DD` when absent. Add a short `##` entry with the idea or recap, plus decisions and
next steps when there are any. Update an existing entry for the same idea, and keep everything
else in the file.

## 4. Save

Write with an authenticated GitHub tool or `gh`. An API update needs the file's current SHA, so
fetch it again and retry after a conflict.

## Output

One line: the note URL, or why the write failed. When the run stops before writing: the
question, the target path, and the prepared entry.
