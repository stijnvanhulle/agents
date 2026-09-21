# Cursor plugin

The `agents` plugin provides shared skills, rules, commands, and the `code-reviewer` subagent.

## Install

```bash
agent plugin marketplace add https://github.com/stijnvanhulle/agents
agent plugin install agents@stijnvanhulle
```

The same commands work through `/plugin` in Cursor CLI and through Settings, Customize,
Marketplaces in the editor.

## Included

- `/create-branch`
- `/create-changeset`
- `/create-issue`
- `/create-pr`
- Shared skills and file-scoped convention rules
- `code-reviewer` subagent

The plugin's `skills` directory links to the canonical `.agents/skills/` directory. If a client
copies only `tools/cursor/` and leaves that link unresolved, clone the full repository into
Cursor's local plugin directory:

```bash
git clone https://github.com/stijnvanhulle/agents.git ~/.cursor/plugins/local/agents
```
