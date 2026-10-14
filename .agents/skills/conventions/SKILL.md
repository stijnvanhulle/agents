---
name: conventions
description: Applies the shared TypeScript, markdown, testing, security, and language rules. Use when writing or reviewing code, tests, or markdown, or when asked whether something follows the house style.
---

# Conventions

The rule files under `rules/` are the house style. Four apply to every request; the rest load
when you open a matching file.

## 1. Load the rules that apply

`plain-language`, `security`, `usa-english`, and `user-questions` always apply. The others carry
`paths:` frontmatter and load for matching files, so open one by hand only when the hook has not.
If a rule conflicts with a project-specific instruction in `AGENTS.md`, the project instruction
wins.

## 2. Apply or review

When writing, follow the rules as you go. When reviewing, read the file against each loaded rule
and note every miss with the rule it breaks. Say what you checked and found fine, so the reader
knows the review covered it.

## Output

For a review: one line per finding, `path:line`, the rule, the change, grouped by file and most
important first. One closing line naming what was checked and found fine.

## References

| File | Load when |
| --- | --- |
| [`rules/code-style.md`](./rules/code-style.md) | `.ts`, `.tsx`, `.vue`: ESM, naming, imports, exports |
| [`rules/jsdoc.md`](./rules/jsdoc.md) | `.ts`, `.tsx`: doc comment essentials; the `jsdoc` skill has the formats |
| [`rules/testing.md`](./rules/testing.md) | Test files: Vitest patterns and what to test |
| [`rules/markdown.md`](./rules/markdown.md) | `.md`: structure; `documentation` and `humanizer` cover voice and SEO |
| [`rules/plain-language.md`](./rules/plain-language.md) | Always: ISO 24495-1 for anything a person reads |
| [`rules/security.md`](./rules/security.md) | Always: secrets, trust boundaries, safe shell use |
| [`rules/usa-english.md`](./rules/usa-english.md) | Always: spelling in code, comments, and docs |
| [`rules/user-questions.md`](./rules/user-questions.md) | Always: when blocked, use the `ask` skill |
