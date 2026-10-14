---
name: deslop
description: Audits a diff or file for over-engineering and AI code and prose tells, then applies only the fixes the user confirms. Use before opening a PR, when asked to clean up, simplify, or review a diff, or when code looks generated.
---

# Deslop

Find what a diff adds that the task did not need, and remove only what the user confirms.

## 1. Walk the reuse-first ladder

For each new dependency, file, wrapper, or export, stop at the first fit:

1. **Does this need to exist?** Skip safeguards for inputs that can't occur and flags for cases
   nobody asked for.
2. **Already in this codebase?** Search before writing a new helper or component.
3. **Stdlib or the language?** A native method beats a utility function.
4. **A platform or framework feature?**
5. **An installed dependency?** Reuse before adding a package.
6. **One line?** Inline it instead of extracting a function or component.
7. **Otherwise:** write only what the task needs.

Flag dependencies covered by an earlier rung, one-caller wrappers, unrequested flags, and
generality for inputs never passed. Two real callers means reuse, not a violation.

Apply the deletion test to a new module or layer. Imagine it gone. If the complexity vanishes,
it was a pass-through. If it reappears across several callers, it earns its place. One
implementation behind an interface is a hypothetical seam, not a real one.

## 2. Check the code tells

- Comments that restate code or do not match local comment density.
- Abnormal defensive checks or `try/catch` on trusted paths. Keep trust-boundary validation.
- `any` casts that dodge a type error.
- Deep nesting that early returns would flatten, and any `else` or `else if` (ternaries are the
  only allowed inline conditional).
- Naming/import/export style inconsistent with nearby code.
- Changed docs and comments: the `humanizer` tells. Skip when no prose changed.

## 3. Report, then ask

A request to review, assess, or explain a diff is audit-only: report and stop, unless the user
also asks for fixes or has already approved them. Otherwise write the findings list (see Output)
in chat, then use `ask` with one question per finding, or per group that shares one fix. Each
question names the finding (`Unused enabled flag in Studio?`) and offers its own options, such as
`Apply`, `Skip`, or an alternative fix, with `(Recommended)` on the one you would pick. Never
offer bundles such as `All (1-7)`.

## 4. Apply only what is confirmed

- Preserve behavior unless fixing a clear bug. Make surgical edits.
- Keep trust-boundary checks and real error handling.
- Fix root causes; never weaken types, rules, or tests.
- Read and apply the relevant convention rules before editing, including rules for tests you add.
- Run format, lint, and relevant tests.
- Re-audit the complete resulting diff against the same rules and code tells. Fix any issues
  introduced by the edits before reporting completion.

## Output

One line per finding: `path:line`, the rung or tell, the fix, your recommendation. One line for
what you checked and found fine. After applying: what changed and what was skipped, one line each.

## Related skills

| Skill | Use for |
| --- | --- |
| [humanizer](../humanizer/SKILL.md) | The prose tells the code tells point at, and prose review outside a code diff |
| [code-style rule](../conventions/rules/code-style.md) | The house style this skill enforces on code, dependencies, and abstractions |
