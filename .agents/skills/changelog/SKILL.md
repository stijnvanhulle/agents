---
name: changelog
description: Turns commit history and changesets into user-facing release notes. Use when preparing a release, writing or updating a changelog, or asked what changed in a version.
---

# Changelog

Turn commits and changesets into entries a package user can act on. Follow the repo's
`docs/changelog.md` when it exists, otherwise [references/format.md](references/format.md).

## 1. Collect

Read the git history for the range and the changesets released in it. For a release not yet cut,
include the pending `.changeset/*.md` files. Fetch remote tags when none exist locally.

## 2. Group

Sort entries into features and improvements, bug fixes, and breaking changes. Drop refactor,
test, and chore commits unless a changeset carries them. List dependency bumps under
Dependencies, or drop them when users see no change, and say which you did.

## 3. Translate

Write each entry for the person upgrading, in the `documentation` voice. Lead with what they get,
and name the real option, export, or command. The entries come from changesets, so a weak entry
is fixed in its changeset with the `changeset` skill.

## Output

One `## <version>` section, where the version is the last tag plus the highest pending bump, with
a `###` block per change type that has entries and one line per entry. Skip the per-package
`####` level when all packages share one version. End with one line naming what you dropped as
noise.
