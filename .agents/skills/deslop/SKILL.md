---
name: deslop
description: Audits a diff or file for over-engineering and AI code and prose tells, then applies only the fixes the user confirms. Use before opening a PR, when asked to clean up, simplify, or review a diff, or when code looks generated.
---

# Deslop

Find what a diff adds that the task did not need, and remove only what the user confirms.

## 1. Walk the reuse-first ladder

For each new dependency, file, wrapper, or export, stop at the first rung that fits:

1. Does it need to exist? Skip guards for inputs that cannot occur and flags nobody asked for.
2. Is it already in this codebase? Search before writing a helper or component.
3. Does the standard library or language cover it?
4. Does the platform or framework cover it?
5. Does an installed dependency cover it?
6. Does one inline line do it, instead of a new function or component?
7. Otherwise, write only what the task needs.

Flag a dependency an earlier rung covers, a wrapper with one caller, an unrequested flag,
generality for inputs nobody passes, a type alias that only renames another type, and a
compatibility shim nobody asked for. Two real callers justify reuse.

For a new module or layer, run the deletion test: imagine it gone. If the complexity vanishes,
it was a pass-through. If it reappears across several callers, it earns its place. One
implementation behind an interface is a hypothetical seam, not a real one.

## 2. Check the code tells

- Comments that restate the code or do not match the local comment density.
- Abnormal defensive checks or `try/catch` on trusted paths. Trust-boundary validation stays.
- `any` casts that dodge a type error.
- Nesting that early returns would flatten, and any `else` or `else if`.
- Naming, import, or export style that differs from nearby code.
- Tests that restate the implementation or check what TypeScript already guarantees.
- Changed comments and docs: the `humanizer` tells. Skip when no prose changed.

## 3. Report, then ask

A request to review, assess, or explain a diff is audit-only: report and stop, unless the user
also asked for fixes or already approved them. Otherwise write the findings list in chat (see Output), then, in the same
reply, follow the `ask` skill with one question per finding, or per group that shares one fix,
named after the finding (`Unused enabled flag in Studio?`). Every finding gets a question, so
send a follow-up call when there are more than four.

## 4. Apply only what was confirmed

- Read the matching convention rules first, including the testing rule for any test you add.
- Make surgical edits that preserve behavior, unless the fix is a clear bug.
- Keep trust-boundary checks and real error handling. Never weaken a type, rule, or test.
- Run format, lint, and the relevant tests.
- Re-audit the whole resulting diff against steps 1 and 2 and the convention rules, and fix what
  your edits introduced.
- Leave the fixes in the working tree. Committing, pushing, or opening a PR, including a stacked
  PR on someone else's branch, is a separate decision to put through `ask`.

## Output

A bulleted list, one bullet per finding: `path:line`, the rung or tell, the fix, and `Apply` or
`Skip` as your recommendation. Never a prose summary. End with one bullet for what you checked
and found fine. After applying, one bullet per change and one per skipped finding.
