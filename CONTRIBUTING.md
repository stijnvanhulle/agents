# Contributing

## Setup

```bash
git clone https://github.com/stijnvanhulle/agents.git
cd agents
pnpm install
pnpm agent-files
```

Node.js 22 and pnpm 12 or newer are required.

## Sources

- Add or change shared skills under `.agents/skills/`.
- Keep Claude commands under `tools/claude/commands/`.
- Mirror command behavior in `tools/cursor/commands/`.
- Keep Cursor rule copies under `tools/cursor/rules/` aligned with
  `.agents/skills/conventions/rules/`.
- Do not edit plugin manifest versions manually.

Run `pnpm agent-files` before opening a pull request.

## Changesets

Add a changeset for every user-visible plugin change:

```bash
pnpm changeset
```

Select the affected plugin packages. They are a fixed group, so Changesets versions them
together. Releases create one `vX.Y.Z` git tag and GitHub Release. No package is published to npm.
