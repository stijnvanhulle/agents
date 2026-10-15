---
name: documentation
description: Writes or reviews developer documentation in the project style with SEO guidance. Use when adding, changing, or removing content in a docs page, a README, an option or API description, a guide, a FAQ, or a blog post, even when the request only says "document this".
---

# Documentation

Write a page a developer can skim and still find the answer.

## 1. Find the target

Read the repo's `docs/README.md` and two existing pages near the new one, and follow them where
they differ from this skill. Without a docs folder, default to the Nuxt Content reference. Name
files in descriptive kebab-case (`multipart-form-data.md`, not `form.md`), since the name becomes
the URL.

When a request removes or rewrites content across pages, list each passage first and use the
`ask` skill for anything a reader relies on before you delete it.

## 2. Outline

What, why, when, and how, in that order, with the explanation before the code. No backticks in
the H1. They are fine from H2 down.

## 3. Write

| Reference | Load for |
| --- | --- |
| [references/writing-style.md](references/writing-style.md) | Any prose: voice, tense, sentences, tone |
| [references/nuxt-content.md](references/nuxt-content.md) | A docs page: frontmatter, MDC components, code groups, option tables, includes |
| [references/blog.md](references/blog.md) | A blog post or release announcement |
| [references/seo-optimization.md](references/seo-optimization.md) | Title, description, FAQ, internal links |
| `comark` skill | The `::component` syntax itself. Install with `npx skills add https://comark.dev` |

## 4. Link and illustrate

- Internal links are root-relative (`/guide/getting-started/`), and anchors point at a section
  (`/guide/getting-started/#output-path`).
- External links carry the full URL and descriptive text.
- The links section goes at the very end.
- Images live where the repo keeps assets (`public/` for Nuxt), linked by site path, as small
  `webp`, `png`, or `jpg` files named for what they show: `query-example.png`.

## 5. Finish

Set the title and description from the SEO reference, and add a FAQ and See also to a guide. Then
run the `humanizer` tells over the prose and fix them in place.

## Output

The page file. For a review: one bullet per finding, `path:line`, the rule, the change.
