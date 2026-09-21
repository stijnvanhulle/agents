# Codex plugin

The `agents` plugin provides shared prompts and skills.

## Install

```bash
codex plugin marketplace add stijnvanhulle/agents
codex plugin add agents@stijnvanhulle
```

Restart Codex or start a new session after installation.

## Included

- `/create-branch`
- `/create-changeset`
- `/create-issue`
- `/create-pr`
- Shared skills and conventions

Codex has no subagent concept, so the Claude Code and Cursor `code-reviewer` is not included.

The prompts use Claude Code's command syntax and are symlinked from `tools/claude/commands/` so
the two sets cannot drift.
