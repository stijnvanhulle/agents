---
name: changeset
description: Writes or reviews a Changesets release note with the correct semver bump. Use when a change reaches a versioned package, when asked to add, write, or check a changeset, or before a PR that needs one.
---

# Changeset

A changeset is the release note for a change. Whoever reads it is upgrading a package, not
reviewing the diff.

## 1. Decide whether the change needs one

A change that reaches a versioned package does. Docs, CI, and tests do not. When you are not
sure, check whether the package is in the workspace and not listed under `ignore` in
`.changeset/config.json`, since private packages can be versioned too.

## 2. Pick the bump

| Bump | For | Example |
| --- | --- | --- |
| `patch` | A fix, including a behavior fix in a skill or prompt | The resolver no longer caches a miss |
| `minor` | New behavior existing code survives | A new `unionType` option |
| `major` | A rename, a removal, or a changed default | `enumType` now defaults to `asConst` |

Use the bump from the command when it is `patch`, `minor`, or `major`. When none was passed, or
the table does not pick one on its own, follow the `ask` skill: offer `patch`, `minor`, and
`major`, likely answer first. Do not default to `patch` and report it as a guess. Write no
changeset file until the bump is known. When the question goes unanswered, stop and say the bump
is missing. List only the packages you changed.

## 3. Write the file

`.changeset/<slug>.md`, named for whoever reads `git log`, so `plugin-resolver-cache.md` beats
`fix.md`. In order:

1. One sentence saying what a user gets. It becomes the changelog headline, so it has to stand
   on its own.
2. Bullets, one per user-visible change, verb first, naming the real option, export, or command.
   Five at most, and none for a one-line change.
3. A code example whenever a user writes something differently, with before and after when you
   changed existing behavior.
4. For a `major`, a closing line saying what to change to upgrade.

Leave out file paths, PR numbers, reviewer talk, and emoji. Changesets adds the commit link.

````md
---
'@scope/core': minor
---

Add `unionType` so one type covers every variant of a discriminated schema.

- Accepts `unionType: 'asConst' | 'asLiteral'`, defaulting to `asConst`.
- Leaves output unchanged when the option is not set.

```typescript
// Before
export type PetDog = { type: 'dog'; bark: string }
export type PetCat = { type: 'cat'; meow: string }

// After
export type Pet = PetDog | PetCat
```
````

A patch is usually one line and no example:

```md
---
'@scope/core': patch
---

Resolve nested plugin paths on Windows, which broke on a backslash separator.
```

## Output

The file at `.changeset/<slug>.md`. For a review: first the bump verdict, then one line per problem (what to change and why),
then the rewritten file when anything changes, or "bump and text are right" when nothing does.

## Related skills

| Skill | Use for |
| --- | --- |
| [pr](../pr/SKILL.md) | The branch and PR the changeset ships in |
| [changelog](../changelog/SKILL.md) | Turning released changesets into `docs/changelog.md` |
