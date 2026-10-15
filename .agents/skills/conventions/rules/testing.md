---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
  - "**/*.spec.ts"
  - "**/*.spec.tsx"
---

# Testing

Vitest, colocated as `*.test.ts` or `*.test.tsx` next to the source. Rename any `.spec.*` file
you find.

## Writing

- Add or update focused tests for every behavior change and refactor.
- One behavior per case, named for the outcome: "returns X when Y".
- Isolated and repeatable: no shared mutable state, and clean up side effects in `afterEach`.
- Mock external dependencies (network, filesystem, time), not internal modules.
- Spy per test with `using _ = vi.spyOn(...)`, not a module-level `vi.mock` plus
  `beforeEach(mockReset)`.
- Control time with `vi.useFakeTimers()` and `vi.setSystemTime()`.
- Test observable behavior, including logs, errors, authorization decisions, and protocol
  messages, not private details.
- Keep unit tests fast. Performance checks go in `pnpm test:bench`.

## Assertions

| Value | Matcher |
| --- | --- |
| A primitive | `toBe()` |
| A whole object or array | Prefer `toStrictEqual(literal)` (or `toEqual`): it states the result inline, and `toStrictEqual` catches extra or undefined keys |
| One aspect | `toHaveLength`, `toContain`, a single-field `toEqual`, or `toMatchObject` for a partial shape. No snapshots |
| Large generated output only, where a hand-written literal is impractical | `toMatchInlineSnapshot()` or `toMatchFileSnapshot()` |

## Running

- `pnpm test`, `pnpm test "<name>"` for one test, `pnpm test:bench` for benchmarks.
- Before merging, tests pass and `pnpm typecheck` (across packages) and `pnpm lint` are clean.
  Run both after moving files or changing imports.
- For a flaky test, re-run CI and check the logs for an environment-specific failure.
