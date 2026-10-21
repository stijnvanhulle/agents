---
name: review
description: Reviews or ships a GitHub pull request or GitLab merge request. Review mode reads the request, runs the conventions, deslop, jsdoc, humanizer, and documentation passes, then asks what to do with each finding and with the request: comment, request changes, approve, fix, or close. Ship mode takes your own branch to merge-ready, including branch name, checks, changeset, commits, title, body, push, and CI. Use when asked to review a PR or MR or whether one is ready to merge, and load it before the first commit whenever work will end in a commit, push, or PR, including a session told to push to a branch.
---

# Review

Two modes for a pull request or merge request. Review judges a request someone opened, or one you
want checked before merging, and acts only on what the user picks. Ship takes your own branch to
merge-ready, in order. Load this skill before the first commit, since the branch name and the
commit split are hard to change after a push.

## Review

### 1. Fetch the change

Pick the host skill, `github` or `gitlab`, from the input or the remote, and use its commands for
every read and write in this mode. The input is `#12`, `!12`, `owner/repo#12`, a request URL, or
nothing for the current branch's request.

Read the title, body, linked issue, commits, open review threads, CI status, and the diff. When
the working tree is clean, check out the branch so the review sees the connected code and can run
the checks. Otherwise fetch the branch and read files with `git show origin/<branch>:<path>`.
Write the diff to a file outside the working tree for the subagent.

Check the claims in the description and commits against the diff.

### 2. Run the passes

In Claude Code and Cursor, run the `code-reviewer` subagent with the diff file and the checked-out
branch, and take its findings for passes 1 to 5. Elsewhere, run the passes yourself, substance
before style before prose, reading each skill for its criteria:

1. `conventions` and correctness: logic errors, edge cases, security at trust boundaries, and a
   test for every code change.
2. `deslop`: the reuse-first ladder and the code tells.
3. `jsdoc`: every touched export.
4. `humanizer`: changed comments and markdown, plus the title and body.
5. `documentation`: a changed docs page or blog post.
6. Ship steps 1 to 7 as checks, so the branch name, changeset, commit split, body, and CI get a
   pass or fail.

Skip a pass with nothing in its category rather than forcing a finding. Until step 4, nothing is
edited, posted, or pushed.

### 3. Report, then ask

Write the findings list (see Output), then in the same reply follow the `ask` skill:

- One question per finding, named after it (`Unused retry flag in client.ts?`), offering
  `Comment`, `Fix`, or `Skip`. `Comment` posts it on the request, `Fix` edits the checked-out
  branch. Send a follow-up call when there are more than four.
- After those answers, one question for the verdict, since it depends on what stays:
  `Comment`, `Request changes`, `Approve`, or `Close`. Recommend `Request changes` with a
  blocking finding, `Approve` with none, and `Comment` otherwise. GitHub refuses `Approve` and
  `Request changes` on your own request, so offer `Comment`, `No review`, or `Close` there.

A skipped question stops that part: never post, approve, or close on a guess.

### 4. Act on the answers

| Choice | Action, with the host skill's commands |
| --- | --- |
| Comment, Request changes, Approve | One review with the body and each confirmed finding as an inline comment. On GitLab the note carries a request for changes |
| Close | Post the reason, then close |
| Fix | Follow `deslop` step 4 on the checked-out branch: surgical edits, format, lint, tests, re-audit. A merge conflict gets its own merge commit before the fixes. The fixes stay in the working tree, and a commit or push is a separate `ask` as Ship step 6 says |

A posted finding carries its `path:line`, the problem, and the fix, in one or two sentences.
Run `humanizer` over anything you post, since you wrote it in this task.

## Ship

### 1. Branch

Never commit to `main`. If `git branch --show-current` is `main`, branch from an up-to-date
`main` with the `branch` skill's `<category>/<ISSUE-REF>_<slug>` shape, leaving out the reference
when there is none.

When the session or harness assigns the branch, such as a cloud session told to push to
`claude/<name>`, keep that name: the assignment wins, and a rename breaks its push. Otherwise a
branch that does not match the shape, such as a desktop worktree's `claude/…` branch, gets
renamed with `git branch -m` before its first push. Keep the name of a branch already pushed.

### 2. Checks

From the repo root, run every format, lint, typecheck, and test script `package.json` defines,
and the build after package-source changes:

```bash
pnpm format && pnpm lint:fix && pnpm typecheck && pnpm test
```

A single package's tests or a lint over changed files do not replace the full run. Skip a script
the repo does not define. Fix failures at the source.

### 3. Changeset

Run the `changeset` skill for a change to a versioned package. Docs, CI, and tests alone need
none.

### 4. Commits

One imperative Conventional Commit per logical change, under 72 characters, no period. Review
`git diff --cached` first. Never commit secrets or generated output, and generate lockfiles with
pnpm.

If the work is already committed and a commit mixes changes, split it before the first push:
`git reset` to the merge base with `origin/main`, then stage and commit each change on its own.
After a push, add new commits instead.

### 5. Title and body

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

### 6. Gate, then push

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
```

Then open the request with the host skill, `github` or `gitlab`, ready for review and with
existing labels only. One PR does one thing.

### 7. CI and review

Fix red CI before handoff, and re-run only infrastructure failures. A `blocked` merge state with
green CI means a required review is missing. Say so, since a review is not yours to supply. Reply
to each review comment with what changed and how to verify it, and propose before making a large
requested change.

## Output

For a review: one bullet per finding, grouped by severity (blocking, should-fix, nit) within pass
order: `path:line`, the pass, the fix, and `Comment`, `Fix`, or `Skip` as your recommendation.
Then one row per Ship step with pass or fail and the reason. A miss that cannot change after the
push is a fail marked "left as is". End with one bullet naming what you checked and found fine,
including CI and mergeability, and the verdict: ready, or what blocks it. After acting: the
review or comment URL, or "not posted", and one bullet per fix left in the working tree.

After shipping: the PR URL, then one bullet per gate item that was skipped, or "nothing skipped".
