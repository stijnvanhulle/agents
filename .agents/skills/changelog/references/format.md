# Changelog format

`docs/changelog.md` uses `##` for each version, `###` for each change type, and `####` for each
package.

| Section | Holds |
| --- | --- |
| `### ✨ Features` | New behavior and improvements |
| `### 🐛 Bug Fixes` | Fixes and corrections |
| `### 🚀 Breaking Changes` | Changes that need code updates |
| `### 📦 Dependencies` | Package and dependency updates |

A code change the user writes gets a before and after code group:

````md
## 2.5.0

### ✨ Features

#### `core`

Added support for generating union types with the new `unionType` option.

::code-group

```typescript [Before]
export type PetDog = { type: 'dog'; bark: string }
export type PetCat = { type: 'cat'; meow: string }
```

```typescript [After]
export type Pet = PetDog | PetCat
```

::
````
