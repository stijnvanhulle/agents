---
name: documentation
description: Writes or reviews developer documentation in the project style with SEO guidance. Use when adding or changing a docs page, a README, an option or API description, a guide, or a blog post, even when the request only says "document this".
---

# Documentation

Write a page a developer can skim and still find the answer.

## 1. Find the target

Check for a VitePress `docs/` folder and read two existing pages near the new one; follow them
when they differ from this skill. Without a `docs/` folder, use the VitePress reference as the
default. File names are kebab-case and descriptive
(`multipart-form-data.md`, not `form.md`), since the name becomes the URL.

## 2. Outline

What, why, when, how, in that order. Explanation before code. Keep backticks out of the H1; from
H2 down they are fine.

## 3. Write

Load [references/writing-style.md](references/writing-style.md) for prose: proper grammar and
complete sentences, 1 to 3 sentences per paragraph, mostly active voice and present tense. Load
[references/vitepress.md](references/vitepress.md) for frontmatter, callouts, code groups, and
option tables, and [references/blog.md](references/blog.md) for a post.

## 4. Link and illustrate

Internal links are root-relative (`/guide/getting-started/`), and anchors point at a section
(`/guide/getting-started/#output-path`). External links carry the full URL and descriptive text.
Put the links section at the very end. Store images where the repo keeps its assets (VitePress:
`docs/public/`), reference them relative to the markdown file, use `webp`, `png`, or `jpg`, keep
them small, and name them for what they show: `query-example.png`.

## 5. Finish

Set the title and description per [references/seo-optimization.md](references/seo-optimization.md),
with a FAQ and See also when the page is a guide. Run the `humanizer` tells over the finished prose and fix them in place; a page you wrote
yourself needs no per-rewrite question.

## Output

The page file. For a review: one line per finding, `path:line`, the rule, the change.

## References

| File | Load when |
| --- | --- |
| [references/writing-style.md](references/writing-style.md) | Writing or reviewing prose |
| [references/vitepress.md](references/vitepress.md) | The repo has a VitePress `docs/` folder: frontmatter, callouts, code groups, option tables, includes |
| [references/blog.md](references/blog.md) | A blog post or release announcement |
| [references/seo-optimization.md](references/seo-optimization.md) | Titles, descriptions, FAQ, internal links |
