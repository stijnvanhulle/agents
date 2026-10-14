---
name: issue
description: Create or triage a GitHub or Jira issue with its type, labels, and fields filled.
---

# Issue

## Pick the tracker

| Tracker | When | Template |
| --- | --- | --- |
| GitHub | The repo has a GitHub remote and the branch carries no project key | `templates/github-bug.md`, `templates/github-feature.md` |
| Jira | The branch name or `AGENTS.md` carries a project key such as `KEY-123` | `templates/jira-*.md`; read [references/jira.md](references/jira.md) |

When unclear, use `ask`: GitHub or Jira. Do not guess.

## 1. Deduplicate

```bash
gh issue list --search "<keywords>" --state all --limit 10
```

When that fails because GraphQL is blocked, use `gh api repos/<owner>/<repo>/issues?state=all`
or the GitHub MCP `search_issues`. Search Jira with JQL. Comment on a match rather than
duplicating it.

## 2. Write

Use the matching template and fill every placeholder:

- GitHub: `github-bug.md` or `github-feature.md`.
- Jira: story, bug, or epic template.

Title: imperative, under 72 characters, no period. Bugs need version, steps, expected and actual
results. Features lead with the problem.

## 3. Read valid values

Never invent values. Use `gh label list`, `list_issue_types`, and `list_issue_fields`. A personal
repo has no issue types or project fields: record Priority and Effort in the body or skip them.

## 4. Classify

Set the type first: Bug for something that broke or contradicts its documentation, Feature for
new behavior somebody asked for, Task for work with no user-visible change, such as CI, releases,
or agent files. When the type is not obvious, follow the `ask` skill: Bug, Feature,
Task. Do not default Priority and Effort to Medium.

| Field | Options | Pick |
| --- | --- | --- |
| Priority | Urgent, High, Medium, Low | Urgent blocks a release or breaks the published package for everyone. High hits users today with no workaround. Medium hits users but has a workaround. Low is a nice-to-have |
| Effort | High, Medium, Low | Low is one file a reviewer reads in one sitting. Medium spans a few files or needs a test. High needs a design decision or touches a public API |

Use `ask` when Priority or Effort remains ambiguous.

## 5. Create

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

Use `method: "update"` when triaging an existing issue. Report URL and values.

## Guardrails

- One issue does one thing; split mixed reports.
- No tokens, `.env` lines, or internal hostnames in a body. Say where the value lives.
- Do not raise Priority to jump a queue.

## Related skills

| Skill | Use for |
| --- | --- |
| [pr](../pr/SKILL.md) | The pull request that closes the issue |
