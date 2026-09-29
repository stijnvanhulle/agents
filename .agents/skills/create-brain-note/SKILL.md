---
name: create-brain-note
description: Save a conversation recap or idea to a chosen GitHub repository.
---

# Create a brain note

Use the `owner/repo` named in the request. If none is given, ask for it with the `ask` skill. Never infer a destination from the working directory.

If an idea follows the repository, summarize that idea. Otherwise recap today's conversation. Use only known facts and omit secrets. Ask what to save if there is no useful content.

In the repository's default branch, read `daily/YYYY-MM-DD.md` using the local date. Create it with `# YYYY-MM-DD` when absent. Add a short `##` entry for the idea or recap, including decisions and next steps when relevant. Update an existing entry for the same idea and preserve other content.

Write through an authenticated GitHub tool or `gh`. For API updates, use the current file SHA and retry after a conflict. Return the note URL, or explain why the write failed.
