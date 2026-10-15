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

Flag a dependency an earlier rung covers, a wrapper with one caller, an unrequested flag, and
generality for inputs nobody passes. Two real callers justify reuse.

For a new module or layer, run the deletion test: imagine it gone. If the complexity vanishes,
it was a pass-through. If it reappears across several callers, it earns its place. One
implementation behind an interface is a hypothetical seam, not a real one.

## 2. Check the code tells

- Comments that restate the code or exceed the local comment density.
- Defensive checks or `try/catch` on trusted paths. Trust-boundary validation stays.
- `any` casts that dodge a type error.
- Nesting that early returns would flatten, and any `else` or `else if`.
- Naming, import, or export style that differs from nearby code.
- Changed comments and docs: the `humanizer` tells. Skip when no prose changed.

## 3. Report, then ask

A request to review, assess, or explain a diff is audit-only: report and stop, unless the user
also asked for fixes. Otherwise write the findings list in chat (see Output), then follow the
`ask` skill with one question per finding, or per group that shares one fix, named after the
finding (`Unused enabled flag in Studio?`).

## 4. Apply only what was confirmed

- Read the matching convention rules first, including the testing rule for any test you add.
- Make surgical edits that preserve behavior, unless the fix is a clear bug.
- Keep trust-boundary checks and real error handling. Never weaken a type, rule, or test.
- Run format, lint, and the relevant tests.
- Re-audit the whole resulting diff with steps 1 and 2, and fix what your edits introduced.

## Output

A bulleted list, one bullet per finding: `path:line`, the rung or tell, the fix, and `Apply` or
`Skip` as your recommendation. Never a prose summary. End with one bullet for what you checked
and found fine. After applying, one bullet per change and one per skipped finding.
