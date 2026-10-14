---
name: changelog
description: Turns commit history and changesets into user-facing release notes. Use when preparing a release, writing or updating a changelog, or asked what changed in a version.
---

# Changelog

Turn technical git commits and changesets into entries a user of the package can act on. Follow
the repo's own `docs/changelog.md` when it has one; otherwise use the format in the reference.

## 1. Collect

Scan git history for the range, and the changesets released in it. For a release not yet cut,
include the pending `.changeset/*.md` files. Fetch remote tags when none exist locally.

## 2. Categorize

Group into features, improvements, bug fixes, and breaking changes. Drop refactor, test, and
chore commits unless a changeset carries them. Dependency bumps go under Dependencies, or are dropped when users see no change;
say which.

## 3. Translate

Write each entry for the user upgrading. Lead with what they get, and name the real option,
export, or command.

## Output

One `## <version>` section, the version being the last tag plus the highest pending bump, with a
`###` block per change type that has entries and one line per entry, laid out as in
[references/format.md](references/format.md). Skip the per-package `####` level when the
packages share one version. End with one line naming what was dropped as noise.

## References

| File | Load when |
| --- | --- |
| [references/format.md](references/format.md) | Writing the entries: heading levels, section names, code examples |

## Related skills

| Skill | Use for |
| --- | --- |
| [changeset](../changeset/SKILL.md) | Writing the changeset a release note comes from |
| [documentation](../documentation/SKILL.md) | Documentation style for changelog entries |
