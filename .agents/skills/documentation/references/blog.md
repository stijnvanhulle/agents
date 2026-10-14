# Blog post patterns

Frontmatter and structure for a release announcement or article.

## Frontmatter

```yaml
---
title: Post Title
description: Brief description for SEO and previews (under 160 chars)
navigation: false
image: /assets/blog/slug.png
authors:
  - name: Author Name
    avatar:
      src: https://github.com/username.png
date: 2025-11-05T10:00:00.000Z
category: Release
---
```

Categories are `Release` for version announcements and `Article` for tutorials and guides.

## Structure

1. Opening (1 to 2 paragraphs): announce what is new and why it matters.
2. Key callout: `> [!NOTE]` with requirements and prerequisites.
3. Feature sections: `## Emoji Feature Name` headers.
4. Code examples with file path labels.
5. Breaking changes, for a release post.
6. Thank you: credit contributors.
7. Resources: links to docs and the repo.
8. Release link: the full changelog.
