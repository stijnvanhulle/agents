---
name: documentation
description: Write or review developer documentation using the project style and SEO guidance. Use when adding or changing docs pages, options, or API signatures.
---

# Documentation

Write clear, practical documentation for the developer reading it. Match the words developers
search for, and structure pages so a reader can skim and still find the answer.

The sections and references marked "VitePress" apply only when the repo has a VitePress `docs/`
folder. Check for it first and follow the repo's existing pages when it differs.

## Writing standard

Keep proper grammar and complete sentences, not fragments. Brevity is valued, but never at the
cost of clarity or correctness.

## References

Load the one that matches the task:

| Reference | Load when |
| --- | --- |
| [references/writing-style.md](./references/writing-style.md) | Writing prose: voice, tone, sentence structure |
| [references/content-patterns.md](./references/content-patterns.md) | Documenting props, options, or usage patterns |
| [references/seo-optimization.md](./references/seo-optimization.md) | Optimizing titles, descriptions, keywords, FAQs |

For finished prose, use the [humanizer](../humanizer/SKILL.md) skill.

## Naming conventions

File names are kebab-case (`how-to-do-thing.md`) and descriptive: `multipart-form-data.md`, not
`form.md`. The file name becomes the URL path, so pick it with that in mind.

### Writing patterns

| Pattern | Example |
| --- | --- |
| Subject-first | "The `useConfig` composable reads the project configuration." |
| Imperative | "Add the following to `config.ts`." |
| Contextual | "When relying on TypeScript, configure..." |

### Modal verbs

| Verb | Meaning |
| --- | --- |
| `can` | Optional |
| `should` | Recommended |
| `must` | Required |

### Component patterns (VitePress)

| Need | Component |
| --- | --- |
| Info aside | `> [!NOTE]` |
| Suggestion | `> [!TIP]` |
| Caution | `> [!WARNING]` |
| Required | `> [!IMPORTANT]` |
| Multi-source code | `::: code-group` and ends with `:::` |

## Headings

Keep backticks out of the H1. From H2 down they are fine.

## Links and cross-references

Internal links use relative paths (`/guide/getting-started/`), and anchors point at a section
(`/guide/getting-started/#output-path`). External links carry the full URL and descriptive text.
Put the links section at the very end of the document.

## Images and assets

Store images where the repo keeps its assets (VitePress: `docs/public/`) and reference them with
relative paths from the markdown file. Use `webp`, `png`, or `jpg`, keep the files small, and name
them for what they show: `query-example.png`.

## Checklist

- [ ] Mostly active voice and present tense
- [ ] 1 to 3 sentences per paragraph
- [ ] Explanation before code
- [ ] Valid frontmatter
- [ ] Humanizer pass: remove AI patterns, add voice and specific details
