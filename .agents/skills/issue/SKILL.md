---
name: issue
description: Creates or triages a GitHub, GitLab, or Jira issue with its type, labels, priority, and fields filled from real values. Use when asked to open, file, report, or triage an issue or bug, or to turn a finding into a ticket.
---

# Issue

File one issue that does one thing, with every field set from values the tracker actually has.

## 1. Pick the tracker

| Tracker | When | Commands and template |
| --- | --- | --- |
| GitHub | A GitHub remote, and no project key in the branch | The `github` skill, with `templates/github-bug.md` or `templates/github-feature.md` |
| GitLab | A GitLab remote, and no project key in the branch | The `gitlab` skill, with the same two templates |
| Jira | The branch or `AGENTS.md` carries a key such as `KEY-123` | `templates/jira-*.md`, plus [references/jira.md](references/jira.md) |

When it is unclear, use the `ask` skill: GitHub, GitLab, or Jira. Do not guess.

## 2. Look for a duplicate

Search with the host skill's duplicates row, or with JQL on Jira. Comment on a match instead of
opening a duplicate.

## 3. Write

Fill every placeholder in the matching template. The title is imperative, under 72 characters,
with no period. A bug needs the version, steps, expected, and actual result. A feature leads with
the problem. Split a mixed report into one issue per thing. Keep tokens, `.env` lines, and
internal hostnames out of the body, and say where the value lives instead.

## 4. Classify from real values

Read the valid labels, types, and fields with the host skill, and never invent one. When the
repo has no issue types or project fields, put Priority and Effort in the body.

Set the type first: Bug for something that broke or contradicts its docs, Feature for new
behavior someone asked for, Task for work with no user-visible change (CI, releases, agent
files).

| Field | Pick |
| --- | --- |
| Priority | Urgent blocks a release or breaks the published package for everyone. High hits users today with no workaround. Medium hits users with a workaround. Low is a nice-to-have |
| Effort | Low is one file a reviewer reads in one sitting. Medium spans a few files or needs a test. High needs a design decision or touches a public API |

Do not default either field to Medium, and do not raise Priority to jump a queue. When the type,
Priority, or Effort stays ambiguous, use the `ask` skill.

## 5. Create

Create or triage with the host skill's row, which sets body, type, labels, and fields in one
call on GitHub.

## Output

One line: the issue URL, then type, labels, Priority, and Effort. For a draft or a triage that
creates nothing: the title and body, then the create payload.
