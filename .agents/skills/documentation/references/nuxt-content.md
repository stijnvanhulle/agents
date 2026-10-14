# Nuxt Content patterns

Frontmatter, callouts, code groups, and option tables for a docs site built on Nuxt Content with
Nuxt UI's Markdown components (MDC), as kubb.dev is. The site's own `docs/README.md` wins when it
differs.

## Frontmatter

```yaml
---
layout: doc
title: Installation                      # Page header and browser tab
description: Install Kubb and verify the CLI.   # Search results and link previews
outline: [2, 3]                          # Heading levels in the table of contents
order: 1                                 # Position in the sidebar; omit to keep the page out of it
navigation:
  title: Installation                    # Only when the sidebar label differs from title
  icon: i-iconoir-download
---
```

The page opens with an H1 that matches `title`. A folder gets its title, icon, and order from a
`.navigation.yml` inside it.

## Elements

Reuse the same element for the same purpose. Close a component with the same number of colons
that opened it, and one more for a nested one.

| Content | Element | Rule |
| --- | --- | --- |
| Tabular reference data | Markdown table | Escape `\|` in types |
| Background info | `> [!NOTE]` | Supplementary context |
| Recommendation | `> [!TIP]` | Optional improvement or shortcut |
| Requirement | `> [!IMPORTANT]` | What the reader must do |
| Potential problem | `> [!WARNING]` | Consequence and how to avoid it |
| Destructive action | `> [!CAUTION]` | What it removes or changes |
| Linked context | `::callout` | Set `to`, `icon`, and `color` |
| Sequential instructions | `::steps{level="2"}` | One H2 per step, keep anchors with `{#id}` |
| Related pages | `::card-group` and `:::card` | Set `title` and `to` |
| Alternative code | `::code-group` | Label every fence; `sync="package-manager"` for package managers |
| Alternative workflows | `::tabs` and `:::tabs-item` | Give each item a `label`; keep required steps outside |
| Long optional code | `::code-collapse` | Set a descriptive `name` |
| Optional explanation | `::collapsible` | Set a descriptive `name`; keep warnings visible |
| FAQ | `::accordion` and `:::accordion-item` | Give each item a `label` |
| Many files | `::code-tree` | Label fences with file paths |
| Directory tree | `::file-tree` | `tree` array with `name`, `type`, `children` |
| Status label | `:badge[Label]` | Only when readers need it to interpret the content |

GitHub alerts (`> [!NOTE]`) also render in repository-only Markdown such as READMEs, so keep
those files to that syntax. MDC components belong in site pages and their snippets.

````md
::steps{level="2"}

## Install the package

:::code-group{sync="package-manager"}

```shell [pnpm]
pnpm add -D kubb
```

```shell [npm]
npm install --save-dev kubb
```

:::

::
````

## Code block labels

Label every fence with its file name or `Terminal`, and `Before` / `After` or `Output` when
that is what it shows. Add `twoslash` on TypeScript blocks that should show types on hover.

````md
```typescript [kubb.config.ts]
import { defineConfig } from 'kubb/config'
```

```shell [Terminal]
npx kubb generate
```
````

## Option reference

Each option gets a heading with a stable anchor, one sentence on what it does, a two-column
table, then prose and an example. `Type` and `Required` are always present; `Default` only when
one exists.

````md
### output.mode {#output-mode}

How generated code is consolidated into files.

| | |
| --- | --- |
| Type | `'directory' \| 'file'` |
| Required | `false` |
| Default | `'file'` when `output.path` has an extension |
````

List the accepted values of an enum option as fields, the literal value as `name`, instead of a
table or bullets:

```md
::field-group

:::field{name="'directory'"}
Writes one file per operation or schema under `output.path`.
:::

:::field{name="'file'"}
Writes everything into a single file. `output.path` must include the extension.
:::

::
```

On a page that lists options without a heading per option, set `name` and `type` on each
`:::field`, add `required` only when it is, and put the default in the body.

## Shared content

Text that several pages repeat lives in `snippets/` and is included with a path relative to the
page:

```md
<!--@include: ../../snippets/install.md-->
```
