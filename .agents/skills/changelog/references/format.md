# Changelog format

The changelog follows a specific structure in `docs/changelog.md`.

- Use `##` for version headings, not `#`.
- Use `###` for change-type sections with emoji prefixes.
- Use `####` for individual package names with links.

Change types:

| Category            | Description                            |
| ------------------- | -------------------------------------- |
| ✨ Features         | New functionality and enhancements     |
| 🐛 Bug Fixes        | Bug fixes and corrections              |
| 🚀 Breaking Changes | Changes that may require code updates   |
| 📦 Dependencies     | Package updates and dependency changes |

Example:

## 2.5.0

### ✨ Features

#### `core`

Added support for generating union types with the new `unionType` option.

::: code-group

```typescript [Before]
// Generated separate types
export type PetDog = { type: 'dog'; bark: string }
export type PetCat = { type: 'cat'; meow: string }
```

```typescript [After]
export type Pet = PetDog | PetCat
```

:::
