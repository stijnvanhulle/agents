---
name: changeset
description: Writes or reviews a Changesets release note with the correct semver bump. Use whenever a change reaches a versioned package, before its commit, when asked to add, write, or check a changeset, or before a PR that needs one.
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

Use the bump the command passed when it is `patch`, `minor`, or `major`. When none was passed, or
the table does not settle it, follow the `ask` skill with `patch`, `minor`, and `major`. Recommend
the bump the repo's recent changesets or `CHANGELOG.md` give the same kind of change, and name
the entries you matched. When that history differs from the table, as in a repo that ships new
options as patches, recommend the history's bump and offer the table's as the alternative. Write no file until the
bump is known. Do not default to `patch` and report it as a guess. When the question goes
unanswered, stop and say the bump is missing.

## 3. Write the file

Name it `.changeset/<slug>.md` for whoever reads `git log`: `plugin-resolver-cache.md`, not
`fix.md`. List only the packages you changed. Then, in order:

1. One sentence on what the user gets, 20 words at most. It becomes the changelog headline, so
   it stands alone.
2. Everything after the headline is a visual element, never a paragraph: bullets, a `diff` fence,
   a code block, or a small table.
3. One bullet per user-visible change the headline does not already cover, verb first, naming the
   real option, export, or command. One line each, saying what the user gets, not how it works.
   Three at most, and none for a one-line change.
4. A `diff` fence whenever users write something differently or the output changes: `-` for what
   goes, `+` for what comes, five lines at most. Use before and after blocks only when a diff
   cannot show it.
5. For a `major`, a closing bullet on what to change to upgrade.

Keep the body under ten lines, fences included. Cut a reason the reader does not act on, such as
why the bug happened. Leave out file paths, PR numbers, reviewer talk, and emoji. Changesets adds
the commit link.

````md
---
'@scope/core': minor
---

Add `unionType` so one type covers every variant of a discriminated schema.

- Accepts `unionType: 'asConst' | 'asLiteral'`, defaulting to `asConst`.

```diff
- export type PetDog = { type: 'dog'; bark: string }
- export type PetCat = { type: 'cat'; meow: string }
+ export type Pet = PetDog | PetCat
```
````

A patch is the headline alone, or the headline and one diff when config or output changes:

````md
---
'@scope/core': patch
---

Generate the schemas a `schemaName` include references.

```diff
  include: [
    { type: 'schemaName', pattern: '^Pet$' },
-   { type: 'schemaName', pattern: '^Store$' },
  ]
```
````

## Output

The file at `.changeset/<slug>.md`. For a review: the bump verdict, then one bullet per problem
with what to change and why, then the rewritten file, or "bump and text are right".
