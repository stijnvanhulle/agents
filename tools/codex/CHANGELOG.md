# @stijnvanhulle/codex-plugin

## 2.2.0

### Minor Changes

- [#7](https://github.com/stijnvanhulle/agents/pull/7) [`2154952`](https://github.com/stijnvanhulle/agents/commit/2154952b90ac6e338984e725600ee37cd014fa81) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Use Codex's `request_user_input` picker instead of dropping to a lettered list.
  
  - Adds `request_user_input` to the `ask` skill's tool table and the `user-questions` rule.
  - Records the limits Codex enforces: three questions, three options, no multiple selection, and
    an `Other` option it appends itself.
  - Notes that Default mode needs the `default_mode_request_user_input` flag and that a subagent
    cannot call the tool, so those sessions still get the lettered list.

- [#7](https://github.com/stijnvanhulle/agents/pull/7) [`60e7814`](https://github.com/stijnvanhulle/agents/commit/60e78140ff4bc8fb70fde2168f00439a846f5b02) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Ask one question per independent decision instead of collapsing a list into grouped options.
  
  - Limits batching in the `ask` skill to answers that settle a single decision.
  - Lets a review with seven findings offer a question per finding, so you can accept some and
    reject others without typing into `Other`.

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
