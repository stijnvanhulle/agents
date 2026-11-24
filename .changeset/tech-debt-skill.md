---
'@stijnvanhulle/claude-plugin': minor
'@stijnvanhulle/cursor-plugin': minor
'@stijnvanhulle/codex-plugin': minor
---

Add the `tech-debt` skill, which audits a whole codebase and writes `TECH_DEBT_AUDIT.md`.

- Cites `path:line` for every finding, with a severity and an effort estimate.
- Lists the calls that look bad but are fine, and the open questions for the maintainer.
- Updates an existing audit in place, marking findings `RESOLVED` or `NEW`.
