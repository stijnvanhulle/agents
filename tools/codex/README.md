# Codex plugin

The `agents` plugin provides shared skills.

## Install

```bash
codex plugin marketplace add stijnvanhulle/agents
codex plugin add agents@stijnvanhulle
```

Restart Codex or start a new session after installation.

## Included

- `$agents:brain owner/repo [idea]` saves a recap or idea to a chosen GitHub repository.
- Skills for branches, changesets, issues, and pull requests.
- Shared conventions.

Codex has no subagent concept, so the Claude Code and Cursor `code-reviewer` is not included.

The `prompts` symlink mirrors Claude Code commands in the source tree. Codex loads the skills
from this plugin, so those prompts do not appear as slash commands after installation.
