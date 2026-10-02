---
name: changelog
description: Turn commit history and changesets into user-facing release notes. Use when preparing a release or documenting what changed in a version.
---

# Changelog

Turn technical git commits into user-facing changelog entries. When the repo uses Changesets, the
changelog is built from changeset entries. The `docs/changelog.md` format in the reference
applies to repos with a VitePress docs site. Follow the repo's existing changelog when it differs.

## 1. Collect

Scan git history for the relevant range, and the changesets released in it.

## 2. Categorize

Group commits into features, improvements, bug fixes, and breaking changes. Drop noise: refactor,
test, and chore commits.

## 3. Translate

Write each entry in customer-facing language. Lead with what the user gets, and name the real
option, export, or command.

## 4. Format

Follow [references/format.md](references/format.md) for the `docs/changelog.md` structure,
change-type sections, and examples.

## Related skills

| Skill | Use for |
| --- | --- |
| [changeset](../changeset/SKILL.md) | Writing the changeset a release note comes from |
| [documentation](../documentation/SKILL.md) | Documentation style for changelog entries |
