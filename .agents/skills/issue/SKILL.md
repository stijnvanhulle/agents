---
name: issue
description: Creates or triages a GitHub or Jira issue with its type, labels, priority, and fields filled from real values. Use when asked to open, file, report, or triage an issue or bug, or to turn a finding into a ticket.
---

# Issue

File one issue that does one thing, with every field set from values the tracker actually has.

## 1. Pick the tracker

| Tracker | When | Template |
| --- | --- | --- |
| GitHub | A GitHub remote, and no project key in the branch | `templates/github-bug.md`, `templates/github-feature.md` |
| Jira | The branch or `AGENTS.md` carries a key such as `KEY-123` | `templates/jira-*.md`, plus [references/jira.md](references/jira.md) |

When it is unclear, use the `ask` skill: GitHub or Jira. Do not guess.

## 2. Look for a duplicate

```bash
gh issue list --search "<keywords>" --state all --limit 10
```

If GraphQL is blocked, use `gh api repos/<owner>/<repo>/issues?state=all` or the GitHub MCP
`search_issues`. Search Jira with JQL. Comment on a match instead of opening a duplicate.

## 3. Write

Fill every placeholder in the matching template. The title is imperative, under 72 characters,
with no period. A bug needs the version, steps, expected, and actual result. A feature leads with
the problem. Split a mixed report into one issue per thing. Keep tokens, `.env` lines, and
internal hostnames out of the body, and say where the value lives instead.

## 4. Classify from real values

Read the valid values with `gh label list`, `list_issue_types`, and `list_issue_fields`, and
never invent one. When the repo has no issue types or project fields, put Priority and Effort in
the body and leave `issue_fields` out.

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

The GitHub MCP `issue_write` sets body, type, labels, and fields in one call. Use
`method: "update"` to triage an existing issue.

```json
{
  "method": "create", "owner": "<owner>", "repo": "<repo>",
  "title": "<title>", "body": "<body>", "type": "Bug", "labels": ["bug"],
  "issue_fields": [
    { "field_name": "Priority", "field_option_name": "High" },
    { "field_name": "Effort", "field_option_name": "Medium" }
  ]
}
```

## Output

One line: the issue URL, then type, labels, Priority, and Effort. For a draft or a triage that
creates nothing: the title and body, then the `issue_write` payload.
