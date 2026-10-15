---
name: jsdoc
paths:
  - "**/*.ts"
  - "**/*.tsx"
description: Writes or reviews TypeScript JSDoc comments with the house format, tags, ordering, and @example styles. Use when adding or checking doc comments on exports, options, or public APIs, or when asked to document a TypeScript file.
---

# JSDoc

Write doc comments that say what a member does, in a shape TypeScript does not already give.

## 1. Decide whether a member needs one

Comment an exported type, property, or function only when the comment adds what the name and
signature do not. Skip the ones whose name says it all.

## 2. Write the description

Say what the member does, not its type, in full sentences. Always use a multi-line `/** ... */`
block with the description on its own line, and expand any one-line block. For a default, an enum,
nested properties, or a function, follow the pattern in
[references/examples.md](references/examples.md).

## 3. Add tags, in this order

1. Description
2. A bullet list of variants or behaviors, if any
3. `@default`, only for a non-obvious default. Never `undefined` or `false`, since `?` already
   implies them
4. `@example`, one concern per example, for complex or multi-variant APIs
5. `@note`, for a caveat such as version info or a breaking change
6. `@deprecated`, with the migration path
7. `@see`, and sparingly `@internal` or `@beta`

Never `@param`, `@returns`, `@type`, or `@typedef`: they repeat the signature. Put that
information in the type itself.

## Output

The doc comments in the file, or one line saying nothing needed one. For a review: one bullet per
member, its name and what is missing or wrong.
