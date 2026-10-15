---
name: conventions
description: Applies the shared TypeScript, markdown, testing, security, and language rules. Use when writing or reviewing code, tests, or markdown, or when asked whether something follows the house style.
---

# Conventions

The files in `rules/` are the house style. When a rule conflicts with the project's `AGENTS.md`,
the project wins.

## 1. Load the rules that apply

| Rule | Applies to |
| --- | --- |
| [plain-language](rules/plain-language.md) | Always: anything a person reads |
| [security](rules/security.md) | Always: secrets, trust boundaries, shell use |
| [usa-english](rules/usa-english.md) | Always: spelling |
| [user-questions](rules/user-questions.md) | Always: questions to the user go through `ask` |
| [code-style](rules/code-style.md) | `.ts`, `.tsx`, `.vue` |
| [jsdoc](rules/jsdoc.md) | `.ts`, `.tsx`. The `jsdoc` skill has the formats |
| [testing](rules/testing.md) | Test files |
| [markdown](rules/markdown.md) | `.md`, `.mdx`. `documentation` and `humanizer` cover voice |

The path-scoped rules load on their own through `paths:` frontmatter. Open one by hand only when
it has not loaded.

## 2. Apply or review

When writing, follow the rules as you go. When reviewing, check the file against each loaded rule.

## Output

For a review, one bullet per finding, grouped by file with the most important first: `path:line`,
the rule, the change. Then one bullet naming what you checked and found fine, so the reader knows
the review covered it.
