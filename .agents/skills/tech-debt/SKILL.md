---
name: tech-debt
description: Audits a whole codebase for tech debt and writes TECH_DEBT_AUDIT.md with file-cited findings, severity, effort, and the calls that look bad but are fine. Use only when asked for a tech debt audit, a codebase health check, or an architecture or code quality review of an entire repo or module. For a diff or a pull request, use `deslop` or `review`.
---

# Tech debt

Audit the codebase as it is and write the findings to `TECH_DEBT_AUDIT.md`. The audit changes no
code. The input is an optional path, such as `src/payments`, that scopes the audit to one module.

Every finding cites `path:line`. A finding without a citation is an impression, so leave it out.
Read the code before you judge it, since a pattern that looks wrong alone may hold something up.
Say what is broken without softening it, and write no praise to balance the list.

## 1. Orient

Form no opinion before you understand the system.

1. Read the README, the package manifest (`package.json`, `pyproject.toml`, `Cargo.toml`, or
   `go.mod`), and any architecture docs or ADRs.
2. Map the directories and name the major modules and layers.
3. Read the churn. A shallow clone hides it, so say so in the audit when the history is cut.

   ```bash
   git log --oneline -200
   ```

   ```bash
   git log --stat --since="6 months ago"
   ```

4. Name the entry points, the hot paths, and the corners nobody touches.
5. List the 20 largest files by line count and the 20 files changed most often in the last six
   months. Debt usually sits where the two lists overlap.

Then write one or two paragraphs on how the system works. A model that contradicts the README is
itself a finding.

## 2. Audit

Search with `rg`, `ast-grep` when installed, and the stack's own tools. Write "Nothing material"
for a dimension with nothing in it rather than padding it.

| Dimension | Look for |
| --- | --- |
| Architectural decay | Circular dependencies, layering violations, files over 500 lines, logic duplicated in three or more places, abstractions nobody uses, dead code |
| Consistency rot | Several ways to do one job, such as HTTP clients, error handling, logging, config, validation, or dates. Naming drift. Folders that no longer match the code |
| Type and contract debt | `any`, `as any`, `# type: ignore`, loose dictionaries, untyped API boundaries, missing schema validation at trust boundaries |
| Test debt | Coverage gaps on critical paths, tests that assert the implementation, skipped or flaky tests, high-churn files with no tests |
| Dependency and config debt | Known CVEs, unused or duplicate dependencies, environment variables that are read but undocumented or have different defaults per environment |
| Performance | N+1 queries, sync work in async paths, blocking I/O on hot paths, listeners or handles never released |
| Errors and observability | Swallowed exceptions, blanket catches, errors logged but not handled, error shapes that differ per module |
| Security hygiene | Hardcoded secrets, SQL built by string concatenation, missing input validation, permissive auth or CORS, weak crypto |
| Documentation drift | README claims that do not match the code, comments that contradict the code next to them, undocumented public APIs |

Detect the stack from the manifest and run its tools in parallel:

| Stack | Tools |
| --- | --- |
| TypeScript and JavaScript | The package manager's `audit`, `tsc --noEmit`, `knip`, `madge --circular` |
| Python | `pip-audit`, `ruff check`, `vulture`, `mypy --strict` |
| Rust | `cargo audit`, `cargo machete`, `cargo clippy` |
| Go | `govulncheck`, `go vet`, `staticcheck` |

Run only the tools the repo already has. Never install one or fetch it with `npx`. Name each
missing tool in the audit and move on.

For a repo over 50,000 lines or with more than five top-level modules, in Claude Code and Cursor
run one subagent per module, in parallel. Give each its module, the dimensions table, the
citation rule, and a cap of 200 findings. Then merge, dedupe, and rank the reports. Elsewhere,
audit one module at a time and write its findings down before you read the next.

## 3. Write the audit

Write `TECH_DEBT_AUDIT.md` in the repo root with these sections, in order:

1. Executive summary: ten bullets at most, ranked by impact.
2. Architectural mental model: the system as it is.
3. Findings: a table with the columns ID, Category, File:Line, Severity (Critical, High, Medium,
   or Low), Effort (S, M, or L), Description, and Recommendation. Expect 30 to 80 rows on a
   whole repo. More than that is padding.
4. Top 5 to fix first: each with a diff sketch or a refactor outline.
5. Quick wins: a checklist of the low-effort findings with Medium severity or higher.
6. Things that look bad but are fine: the calls you considered flagging and why you did not. This
   section is required. When it is empty, the audit was too shallow, so look again.
7. Open questions for the maintainer: what you could not tell was debt or intent. Ask here
   instead of asserting.

Recommend specific, scoped changes, never a rewrite.

When `TECH_DEBT_AUDIT.md` already exists, read it first. Mark fixed findings `RESOLVED`, update
the stale ones, and tag the new ones `NEW`.

## Output

The file `TECH_DEBT_AUDIT.md`. In chat, give the counts per severity, the top 5, and the tools
that were missing. Fixing a finding is a separate request.

Adapted from [ksimback/tech-debt-skill](https://github.com/ksimback/tech-debt-skill), MIT.
