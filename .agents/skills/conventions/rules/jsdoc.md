---
paths:
  - "**/*.ts"
  - "**/*.tsx"
---

# JSDoc

The `jsdoc` skill has the tag order and `@example` formats. The essentials:

- Comment an exported type, property, or function only when the comment adds what the name and
  signature do not. Local helpers that are not exported get none.
- Say what it does, not its type, in concrete full sentences, never fragments like "Boolean
  value."
- Always a multi-line block, with the description on its own line. A one-line `/** text */` is
  wrong, even for a short comment:

  ```ts
  /**
   * A server the API document declares, with its `{variable}` placeholders filled from their defaults.
   */
  export type InputServer = {
    url: string
    description?: string
  }
  ```

- `@default` only for a non-obvious default, never `undefined` or `false`.
- `@example` for complex or multi-variant APIs, one concern per example, code on its own line.
- No `@param`, `@returns`, `@type`, or `@typedef`, since TypeScript already says it.
