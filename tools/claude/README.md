# Claude Code plugin

The `agents` plugin provides shared skills, rules, commands, the `code-reviewer` subagent, and
the `house` output style.

## Install

```bash
claude plugin marketplace add stijnvanhulle/agents
claude plugin install agents@stijnvanhulle
```

Restart Claude Code or run `/reload-plugins`.

Use `--scope project` to share the plugin with a repository or `--scope local` to install it
only for the current checkout.

## Included

- `/create-brain-note [owner/repo] [idea]` saves a recap or idea to a chosen GitHub repository.
- `/create-branch`
- `/create-changeset`
- `/create-issue`
- `/create-pr`
- Shared skills and convention rules. A session-start hook loads the always-on rules, and the
  `conventions` skill loads the file-scoped ones
- `code-reviewer` subagent
- `house` output style

Try the plugin from this checkout with:

```bash
claude --plugin-dir ./tools/claude
```
