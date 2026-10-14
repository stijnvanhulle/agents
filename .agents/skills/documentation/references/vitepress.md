# VitePress patterns

Frontmatter, callouts, code groups, and option tables for a VitePress `docs/` folder.

## Frontmatter

Every page carries this block. `seo-optimization.md` says how to word the title and description.

```yaml
---
layout: doc          # Always 'doc' for documentation pages
title: Page Title     # Browser tab and page header
description: One sentence for search results and link previews
outline: deep        # Deep table of contents
---
```

A package page escapes the scope: `title: \@scope/name`.

## Callouts and code groups

| Need | Component |
| --- | --- |
| Background info | `> [!NOTE]` |
| Best practice | `> [!TIP]` |
| Potential issue | `> [!WARNING]` |
| Must-know | `> [!IMPORTANT]` |
| Destructive operation | `> [!CAUTION]` |
| Package managers or several sources | `::: code-group` ... `:::` |

A package-manager code group always includes `bun`, `pnpm`, `npm`, and `yarn`, in that order:

```shell [bun]
bun add -d @scope/name
```

## Code block labels

Always include the file path. Add `twoslash` on TypeScript blocks to enable type checking.

````md
```ts twoslash [config.ts]
export default defineConfig({})
```

```typescript [./types.ts]
type Test = { name: string }
```
````

## Package page structure

1. Opening (1 to 2 paragraphs): title and a one-sentence description.
2. Installation: a package-manager code group.
3. Usage: one minimal, generic snippet with placeholder values, inside a code group with input
   and output. It is the first example a reader sees, so keep it simple.
4. Options: one section per option, in logical order, using the table below.
5. Examples: realistic snippets with meaningful names and real data, more than one when the
   feature is used in different ways. File path labels, all required imports, minimal but
   complete configuration.
6. Resources: links to docs and the repo when relevant.

## Option and prop tables

Every prop, option, or parameter uses this exact shape. `Type:` and `Required:` are always
present; `Default:` appears only when a default exists.

````md
### optionName

One sentence on what this option does.

> [!TIP]
> When to use it, performance implications, or helpful notes

|           |             |
|----------:|:------------|
|     Type: | `string`    |
| Required: | `false`     |
|  Default: | `'default'` |

Example:

```typescript
// Minimal usage
```
````

Prefer a table when listing options or several items of the same kind.

## Shared content

Reuse a shared fragment with the `@include` directive:

```md
### contentType
<!--@include: ../core/contentType.md-->
```
