---
name: changeset
description: Writes or reviews a Changesets release note with the correct semver bump. Use when a change reaches a versioned package, when asked to add, write, or check a changeset, or before a PR that needs one.
---

# Changeset

A changeset is the release note for a change. Its reader is upgrading a package, not reviewing
the diff.

## 1. Decide whether one is needed

A change that reaches a versioned package needs one. Docs, CI, and tests do not. When unsure,
check that the package is in the workspace and not under `ignore` in `.changeset/config.json`,
since private packages can be versioned too.

## 2. Pick the bump

| Bump | For | Example |
| --- | --- | --- |
| `patch` | A fix, including a behavior fix in a skill or prompt | The resolver no longer caches a miss |
| `minor` | New behavior that existing code survives | A new `unionType` option |
| `major` | A rename, a removal, or a changed default | `enumType` now defaults to `asConst` |

Use the bump the command passed. When none was passed and the table does not settle it, follow
the `ask` skill with `patch`, `minor`, and `major`, likely answer first. Write no file until the
bump is known. Do not default to `patch` and report it as a guess. When the question goes
unanswered, stop and say the bump is missing.

## 3. Write the file

Name it `.changeset/<slug>.md` for whoever reads `git log`: `plugin-resolver-cache.md`, not
`fix.md`. List only the packages you changed. Then, in order:

1. One sentence on what the user gets. It becomes the changelog headline, so it stands alone.
2. One bullet per user-visible change, verb first, naming the real option, export, or command.
   Say what the user gets, not how it works. Five at most, and none for a one-line change.
3. A code example whenever users write something differently: a `diff` fence for a few lines,
   otherwise before and after blocks.
4. For a `major`, a closing line on what to change to upgrade.

Leave out file paths, PR numbers, reviewer talk, and emoji. Changesets adds the commit link.

````md
---
'@scope/core': minor
---

Add `unionType` so one type covers every variant of a discriminated schema.

- Accepts `unionType: 'asConst' | 'asLiteral'`, defaulting to `asConst`.
- Leaves output unchanged when the option is not set.

```diff
- export type PetDog = { type: 'dog'; bark: string }
- export type PetCat = { type: 'cat'; meow: string }
+ export type Pet = PetDog | PetCat
```
````

A patch is usually one sentence: "Resolve nested plugin paths on Windows, which broke on a
backslash separator."

## Output

The file at `.changeset/<slug>.md`. For a review: the bump verdict, then one bullet per problem
with what to change and why, then the rewritten file, or "bump and text are right".
