# AGENTS.md

This repository distributes shared AI development workflows for Claude Code, Cursor, and Codex.

## Architecture

- `.agents/skills/` is the canonical source for skills and convention rules.
- `tools/claude/` packages Claude commands, a subagent, output styles, and shared skills.
- `tools/cursor/` packages Cursor commands, rules, a subagent, and shared skills.
- `tools/codex/` packages Codex prompts and shared skills.
- Root marketplace manifests expose the provider packages.
- `scripts/agentFiles.ts` checks command and rule parity.
- `scripts/syncPluginVersion.mjs` copies Changesets versions into plugin manifests.

`AGENT.md` and `CLAUDE.md` symlink to this file. The `.claude/` and `.cursor/` directories
symlink to the same content for local dogfooding.

## Commands

```bash
pnpm install
pnpm agent-files
pnpm changeset
pnpm release:version
pnpm release
```

`pnpm release` only creates git tags. It never publishes to npm.

## Changes

Run `pnpm agent-files` after changing commands or convention rules. Add a changeset for any
user-visible plugin change. The three plugin packages are a fixed group and receive the same
version.

Do not edit manifest versions by hand. Changesets updates package versions and
`scripts/syncPluginVersion.mjs` updates the manifests.

## Rules

- [code-style](.agents/skills/conventions/rules/code-style.md)
- [jsdoc](.agents/skills/conventions/rules/jsdoc.md)
- [markdown](.agents/skills/conventions/rules/markdown.md)
- [plain-language](.agents/skills/conventions/rules/plain-language.md)
- [security](.agents/skills/conventions/rules/security.md)
- [testing](.agents/skills/conventions/rules/testing.md)
- [usa-english](.agents/skills/conventions/rules/usa-english.md)
- [user-questions](.agents/skills/conventions/rules/user-questions.md)

<skills>

## Skills

- [ask](.agents/skills/ask/SKILL.md)
- [backlog](.agents/skills/backlog/SKILL.md)
- [branch](.agents/skills/branch/SKILL.md)
- [changelog](.agents/skills/changelog/SKILL.md)
- [changeset](.agents/skills/changeset/SKILL.md)
- [conventions](.agents/skills/conventions/SKILL.md)
- [deslop](.agents/skills/deslop/SKILL.md)
- [documentation](.agents/skills/documentation/SKILL.md)
- [humanizer](.agents/skills/humanizer/SKILL.md)
- [issue](.agents/skills/issue/SKILL.md)
- [jsdoc](.agents/skills/jsdoc/SKILL.md)
- [pr](.agents/skills/pr/SKILL.md)

</skills>
