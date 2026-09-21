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
- `scripts/tagRelease.mjs` creates one `agents@X.Y.Z` git tag from those versions.

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

`pnpm release` creates one `agents@X.Y.Z` git tag. It never publishes to npm.

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

You have new skills. If any skill might be relevant then you MUST read it.

- [ask](.agents/skills/ask/SKILL.md) - Ask a blocking multiple-choice question with the client's native picker, or a lettered list when none exists.
- [backlog](.agents/skills/backlog/SKILL.md) - Triage recent GitHub, ClickUp, or Jira issues, then implement confirmed ones in isolated worktrees.
- [branch](.agents/skills/branch/SKILL.md) - Name and create a Conventional Commit branch from a GitHub, ClickUp, or Jira issue.
- [changelog](.agents/skills/changelog/SKILL.md) - Turn commit history and changesets into user-facing release notes.
- [changeset](.agents/skills/changeset/SKILL.md) - Write or review a release-note changeset with the correct bump.
- [conventions](.agents/skills/conventions/SKILL.md) - Apply the shared TypeScript, markdown, testing, security, and language rules.
- [deslop](.agents/skills/deslop/SKILL.md) - Audit a diff for over-engineering and AI code/prose tells, then apply only confirmed fixes.
- [documentation](.agents/skills/documentation/SKILL.md) - Write or review developer documentation using the project style and SEO guidance.
- [humanizer](.agents/skills/humanizer/SKILL.md) - Find AI writing tells and apply only confirmed rewrites.
- [issue](.agents/skills/issue/SKILL.md) - Create or triage a GitHub or Jira issue with its type, labels, and fields filled.
- [jsdoc](.agents/skills/jsdoc/SKILL.md) - Apply the TypeScript JSDoc format, examples, tags, and ordering.
- [pr](.agents/skills/pr/SKILL.md) - Prepare, open, update, or assess a pull request, including checks, changesets, title, template, and CI.
</skills>
