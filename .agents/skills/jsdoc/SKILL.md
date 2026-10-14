---
name: jsdoc
description: Writes or reviews TypeScript JSDoc comments with the house format, tags, ordering, and @example styles. Use when adding or checking doc comments on exports, options, or public APIs, or when asked to document a TypeScript file.
---

# JSDoc

Write doc comments that say what a member does, in a shape TypeScript does not already give.

## 1. Decide whether a member needs one

Comment an exported type, property, or function only when the comment adds something the name
and signature do not. Skip the ones whose name says it all.

## 2. Write the description

Say what the member does, not its type, in full sentences, always in a multi-line `/** ... */`
block; a `/** ... */` on one line is single-line, so expand it. For a non-obvious default, options, nested properties, or a function, follow the matching
pattern in [references/examples.md](references/examples.md).

## 3. Add tags

| Tag | Use for | Notes |
| --- | --- | --- |
| `@default` | Default value | Only when non-obvious; never `undefined` or `false` |
| `@example` | Usage | For complex or multi-variant APIs, one concern per example |
| `@note` | Important caveat | Version info, breaking changes |
| `@deprecated` | Retired API | Include a migration path |
| `@see`, `@internal`, `@beta` | References, internal API, experimental | Sparingly |

Never `@param`, `@returns`, `@type`, or `@typedef`: they duplicate the TypeScript signature, so
use the type, return type, or a `type`/`interface` instead. Skip `@default undefined` too, since
an optional (`?`) property already implies it.

## 4. Order the block

1. Description
2. Bullet list of variants or behaviors, if any
3. `@default`
4. `@example`, one or more
5. `@note`
6. `@deprecated`
7. `@see`

## Output

The doc comments in the file, or one line saying nothing needed one. For a review: one line per member, its name and what is missing or
wrong.

## References

| File | Load when |
| --- | --- |
| [references/examples.md](references/examples.md) | Writing an `@example`, or documenting a default, enum, nested property, or function |
