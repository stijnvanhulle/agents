# @stijnvanhulle/codex-plugin

## 2.1.0

No changes in this release.

## 2.0.0

### Major Changes

- [#1](https://github.com/stijnvanhulle/agents/pull/1) [`d604e5d`](https://github.com/stijnvanhulle/agents/commit/d604e5d61e1a1b4662e318256133058fcf8317b1) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Install the shared development workflows from `stijnvanhulle/agents` under the new `agents`
  plugin name.
  
  - Move skills, rules, commands, subagents, and output styles out of the monorepo template.
  - Install with `agents@stijnvanhulle` instead of `toolkit@stijnvanhulle`.
  - Create versioned GitHub Releases without publishing packages to npm.

## 1.1.0

### Minor Changes

- [#229](https://github.com/stijnvanhulle/template/pull/229) [`a257779`](https://github.com/stijnvanhulle/template/commit/a257779fce73ecd4dd9d4ecb256ede3d48a9690f) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Drop the `backlog`, `deslop`, and `humanizer` commands, which showed up twice in the slash menu next to the skills of the same name.
  
  - Reach all three through their skills, which the slash menu already lists.
  - Keep the four `create-*` commands, and stop on the `ask` skill instead of guessing a bump,
    tracker, type, or dirty working tree.
  - Remove the Gemini CLI and OpenCode integrations. The toolkit now supports Claude Code,
    Cursor, and Codex.
