---
name: jsdoc
description: Apply the TypeScript JSDoc format, examples, tags, and ordering. Use when writing or
reviewing doc comments on exports.
---

# JSDoc

Tags, tag order, and `@example` formats for TypeScript doc comments.
[references/examples.md](references/examples.md) holds every `@example` format and the property,
enum, nested-property, and function patterns.

## Tags

### Use frequently

| Tag           | Purpose            | Notes                                                       |
| ------------- | ------------------ | ----------------------------------------------------------- |
| `@default`    | Default value      | Only when the default is non-obvious (omit for `undefined`) |
| `@example`    | Usage example      | Prefer for complex or multi-variant APIs                    |
| `@note`       | Important caveat   | Version info, breaking changes                              |
| `@deprecated` | Mark as deprecated | Include a migration path                                    |

### Use sparingly

| Tag         | Purpose                 |
| ----------- | ----------------------- |
| `@see`      | Reference external docs |
| `@internal` | Internal API            |
| `@beta`     | Experimental            |

### Avoid (TypeScript already provides these)

`@param`, `@returns`, `@type`, and `@typedef` duplicate the TypeScript signature; use the type,
return type, or a `type`/`interface` instead. Skip `@default undefined` too, since an optional
(`?`) property already implies it.

## Tag order

1. Description (required)
2. Bullet list of variants or behaviors (if applicable)
3. `@default` (if non-obvious)
4. `@example` (one or more)
5. `@note` (if needed)
6. `@deprecated` (if applicable)
7. `@see` (if providing references)
