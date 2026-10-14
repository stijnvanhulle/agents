# Blog post patterns

Frontmatter and structure for a release announcement or article on kubb.dev. Posts live in the
platform repo under `apps/kubb.dev/content/blog/`.

## Frontmatter

```yaml
---
layout: doc
title: Introducing the Kubb registry
description: One or two sentences for search results and previews.
outline: deep
image: /blog/kubb-registry/cover.svg
date: 2026-10-13
---
```

## Structure

1. The cover image, then an H1 that matches `title`.
2. Opening (1 to 2 paragraphs): what is new and why it matters, often with the one command or
   snippet that shows it.
3. H2 sections, one per feature or step, in sentence case.
4. Code fences labeled with their file name, `Terminal`, or `Output`.
5. Breaking changes, for a release post.
6. Closing: how to get it (version or command), where to read more, and where feedback goes.
