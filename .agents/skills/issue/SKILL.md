---
name: issue
description: Creates or triages a GitHub or Jira issue with its type, labels, priority, and fields filled from real values. Use when asked to open, file, report, or triage an issue or bug, or to turn a finding into a ticket.
---

# Issue

File one issue that does one thing, with every field set from values the tracker actually has.

## 1. Pick the tracker

| Tracker | When | Template |
| --- | --- | --- |
| GitHub | The repo has a GitHub remote and the branch carries no project key | `templates/github-bug.md`, `templates/github-feature.md` |
| Jira | The branch name or `AGENTS.md` carries a project key such as `KEY-123` | `templates/jira-*.md`; read [references/jira.md](references/jira.md) |

When unclear, use `ask`: GitHub or Jira. Do not guess.

## 2. Deduplicate

```bash
gh issue list --search "<keywords>" --state all --limit 10
```

When that fails because GraphQL is blocked, use `gh api repos/<owner>/<repo>/issues?state=all`
or the GitHub MCP `search_issues`. Search Jira with JQL. Comment on a match rather than
duplicating it.

## 3. Write

Use the matching template and fill every placeholder. Title: imperative, under 72 characters, no
period. Bugs need version, steps, expected and actual results. Features lead with the problem.
Split a mixed report into one issue per thing. No tokens, `.env` lines, or internal hostnames in
a body; say where the value lives.

## 4. Read valid values

Never invent values. Use `gh label list`, `list_issue_types`, and `list_issue_fields`. A personal
repo has no issue types or project fields: record Priority and Effort in the body or skip them.

## 5. Classify

Set the type first: Bug for something that broke or contradicts its documentation, Feature for
new behavior somebody asked for, Task for work with no user-visible change, such as CI, releases,
or agent files. When the type is not obvious, follow the `ask` skill: Bug, Feature, Task.

| Field | Options | Pick |
| --- | --- | --- |
| Priority | Urgent, High, Medium, Low | Urgent blocks a release or breaks the published package for everyone. High hits users today with no workaround. Medium hits users but has a workaround. Low is a nice-to-have |
| Effort | High, Medium, Low | Low is one file a reviewer reads in one sitting. Medium spans a few files or needs a test. High needs a design decision or touches a public API |

Do not default Priority and Effort to Medium, and do not raise Priority to jump a queue. Use
`ask` when either remains ambiguous.

## 6. Create

Use the GitHub MCP `issue_write`, which takes body, type, labels, and fields in one call:

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

Use `method: "update"` when triaging an existing issue.

## Output

One line: the issue URL, then type, labels, priority, and effort. For a draft or a triage that
creates nothing: the full title and body, then the `issue_write` payload.

## References

| File | Load when |
| --- | --- |
| `templates/github-*.md` | Writing a GitHub bug or feature body |
| [references/jira.md](references/jira.md) and `templates/jira-*.md` | The tracker is Jira |

## Related skills

| Skill | Use for |
| --- | --- |
| [pr](../pr/SKILL.md) | The pull request that closes the issue |
