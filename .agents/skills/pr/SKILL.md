---
name: pr
description: Prepares, opens, updates, or assesses a pull request, including branch name, checks, changeset, commits, title, body, and CI. Load it before the first commit whenever work will end in a commit, push, or PR, including a request to fix an issue by number or URL and a session told to push to a branch, and use it to judge whether an open PR is ready.
---

# PR

Take a branch to merge-ready, in order. Load this skill before the first commit, since the branch
name and the commit split are hard to change after a push. To assess an open PR, run steps 1 to
7 as checks and report what fails (see Output).

## 1. Branch

Never commit to `main`. If `git branch --show-current` is `main`, branch from an up-to-date
`main` with the `branch` skill's `<category>/<ISSUE-REF>_<slug>` shape, leaving out the reference
when there is none.

When the session or harness assigns the branch, such as a cloud session told to push to
`claude/<name>`, keep that name: the assignment wins, and a rename breaks its push. Otherwise a
branch that does not match the shape, such as a desktop worktree's `claude/…` branch, gets
renamed with `git branch -m` before its first push. Keep the name of a branch already pushed.

## 2. Checks

From the repo root, run every format, lint, typecheck, and test script `package.json` defines,
and the build after package-source changes:

```bash
pnpm format && pnpm lint:fix && pnpm typecheck && pnpm test
```

A single package's tests or a lint over changed files do not replace the full run. Skip a script
the repo does not define. Fix failures at the source.

## 3. Changeset

Run the `changeset` skill for a change to a versioned package. Docs, CI, and tests alone need
none.

## 4. Commits

One imperative Conventional Commit per logical change, under 72 characters, no period. Review
`git diff --cached` first. Never commit secrets or generated output, and generate lockfiles with
pnpm.

If the work is already committed and a commit mixes changes, split it before the first push:
`git reset` to the merge base with `origin/main`, then stage and commit each change on its own.
After a push, add new commits instead.

## 5. Title and body

The title is an imperative Conventional Commit under 72 characters with no period. Take the type
from the change or the issue label, not `feature` or `hotfix`. Put `Closes #123` in the body, and open the
issue with the `issue` skill when none exists.

Fill `.github/pull_request_template.md` when it exists, without deleting sections. Otherwise use:

- Changes: what changed and why, in 1 to 3 sentences.
- How to test: three steps from a clean checkout, ending in the expected result. When the diff
  cannot supply them, use the `ask` skill. Add screenshots for visible changes.
- Checklist: tick only what ran, and explain each unticked item.
- Release impact: the changeset, docs-only, and breaking boxes match the diff.
- Impact: who is affected, and any migration.

Match the format of recently merged PRs in the repo. Keep each section short: when the body runs long, cut
background, not sections. Run `humanizer` over the prose.

## 6. Gate, then push

Before asking to push, confirm that:

- the branch name has the shape, or the branch was assigned or already pushed
- the full check scripts ran and passed
- the `changeset` skill ran, or the diff needs no changeset
- each commit holds one logical change
- `deslop` ran on the code and `humanizer` on the PR body
- the diff stays in scope: no drive-by refactors and no force-push

Run any step that did not run. When you cannot, stop and name the skipped steps instead of
pushing.

Pushing publishes the commits, so follow the `ask` skill first: name the branch and offer push and
open the PR, push only, or stop. A yes covers that branch only, and `main` is never pushed. On stop, leave the commits local
and say so.

```bash
git fetch origin main && git pull --ff-only
git push -u origin <branch>
gh pr create --base main --title "<title>" --body-file <body>.md --assignee @me
```

The GitHub MCP `create_pull_request` works too. Open it ready for review, with existing labels
only. One PR does one thing.

## 7. CI and review

Fix red CI before handoff, and re-run only infrastructure failures. A `blocked` merge state with
green CI means a required review is missing. Say so, since a review is not yours to supply. Reply
to each review comment with what changed and how to verify it, and propose before making a large
requested change.

## Output

After opening: the PR URL, then one bullet per gate item that was skipped, or "nothing skipped".

For an assessment: one row per step with pass or fail and the reason. A miss that cannot change
after the push is a fail marked "left as is". End with the verdict: ready, or what blocks it.
