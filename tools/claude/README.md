# Claude Code plugin

The `agents` plugin provides shared skills, rules, commands, the `code-reviewer` subagent, and
three output styles.

## Install

```bash
claude plugin marketplace add stijnvanhulle/agents
claude plugin install agents@stijnvanhulle
```

Restart Claude Code or run `/reload-plugins`.

Use `--scope project` to share the plugin with a repository or `--scope local` to install it
only for the current checkout.

## Included

- `/create-branch`
- `/create-changeset`
- `/create-issue`
- `/create-pr`
- Shared skills and convention rules (always-on `rules/` in this package)
- `code-reviewer` subagent
- `house`, `plan`, and `diagrams-first` output styles

Try the plugin from this checkout with:

```bash
claude --plugin-dir ./tools/claude
```
