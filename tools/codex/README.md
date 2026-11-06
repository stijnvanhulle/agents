# Codex plugin

The `agents` plugin provides shared skills.

## Install

```bash
codex plugin marketplace add stijnvanhulle/agents
codex plugin add agents@stijnvanhulle
```

Restart Codex or start a new session after installation.

## Included

- `$agents:create-brain-note owner/repo [idea]` saves a recap or idea to a chosen GitHub repository.
- Skills for GitHub and GitLab access, branches, changesets, issues, and pull request or merge request review and
  shipping.
- Shared conventions.
- The `house` reply style as a skill. Codex has no output styles, so to apply it to every reply,
  add this line to `~/.codex/AGENTS.md`: `Follow the $agents:house skill for every reply.`

Codex has no subagent concept, so the Claude Code and Cursor `code-reviewer` is not included.

The `prompts` symlink mirrors Claude Code commands in the source tree. Codex loads the skills
from this plugin, so those prompts do not appear as slash commands after installation.
