---
'@stijnvanhulle/claude-plugin': minor
'@stijnvanhulle/cursor-plugin': minor
'@stijnvanhulle/codex-plugin': minor
---

Add the `tech-debt` skill, which audits a whole codebase and publishes the findings as a page, such as a Claude artifact.

- Cites `path:line` for every finding, with a severity and an effort estimate.
- Lists the calls that look bad but are fine, and the open questions for the maintainer.
- Writes `TECH_DEBT_AUDIT.md` instead when the client has no page tool.
- Updates an earlier audit in place, marking findings `RESOLVED` or `NEW`.
