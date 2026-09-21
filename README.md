# Agents

Shared skills, rules, commands, subagents, and output styles for Claude Code, Cursor, and Codex.

The three integrations use `.agents/skills/` as their canonical skill source. Provider-specific
adapters live under `tools/`.

## Install

### Claude Code

```bash
claude plugin marketplace add stijnvanhulle/agents
claude plugin install agents@stijnvanhulle
```

### Cursor

```bash
agent plugin marketplace add https://github.com/stijnvanhulle/agents
agent plugin install agents@stijnvanhulle
```

### Codex

```bash
codex plugin marketplace add stijnvanhulle/agents
codex plugin add agents@stijnvanhulle
```

Restart the client or begin a new session after installation.

## Included

- Skills for issue handling, branches, changesets, changelogs, pull requests, documentation,
  JSDoc, prose cleanup, and code cleanup.
- Shared TypeScript, testing, security, markdown, and language conventions.
- `/create-branch`, `/create-changeset`, `/create-issue`, and `/create-pr` commands.
- A `code-reviewer` subagent for Claude Code and Cursor.
- Claude Code output styles: `house`, `plan`, and `diagrams-first`.

See the provider guides for details:

- [Claude Code](tools/claude/README.md)
- [Cursor](tools/cursor/README.md)
- [Codex](tools/codex/README.md)

## Development

```bash
pnpm install
pnpm agent-files
pnpm changeset
```

`pnpm agent-files` checks that Cursor commands and rules match their canonical sources.

## Releases

Changesets versions the three private plugin packages as one fixed group. Merging the generated
Version Packages PR creates git tags and GitHub Releases. Nothing is published to npm.

## License

[MIT](LICENSE) © Stijn Van Hulle
