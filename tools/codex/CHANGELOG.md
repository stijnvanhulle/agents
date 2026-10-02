# @stijnvanhulle/codex-plugin

## 2.6.0

### Minor Changes

- [#21](https://github.com/stijnvanhulle/agents/pull/21) [`c7fefa4`](https://github.com/stijnvanhulle/agents/commit/c7fefa4ff6d26a2c4e19fa4dfe65722dfd7b39f9) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Tighten existing skills. `humanizer` gains a structure reference covering history in the deliverable, vague referents, remembered numbers, count anchors, and how to write instructions a person or agent acts on. `deslop` adds a deletion test for new modules, `pr` asks you to match recent PRs, and the `plain-language` rule and the code reviewer name referents and leave out history. The Claude Code package now ships an empty Cursor manifest, so Cursor no longer lists every skill twice when both plugins are installed.

### Patch Changes

- [#21](https://github.com/stijnvanhulle/agents/pull/21) [`c7fefa4`](https://github.com/stijnvanhulle/agents/commit/c7fefa4ff6d26a2c4e19fa4dfe65722dfd7b39f9) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Cut repeated text from the skills and fix wording. The `user-questions` rule and the `code-reviewer` subagent no longer restate the `ask`, `deslop`, and `jsdoc` content, and the Related skills tables keep only hand-off rows. `documentation` and `changelog` now say their VitePress sections apply only to repos with a VitePress docs site, with neutral examples and no invented percentages. `pr` now runs the scripts a repo defines and works without a pull request template. `AGENTS.md` no longer carries a generated copy of every skill description. `pr` and `backlog` now ask through the `ask` skill before any push, and the `ask` skill covers any question with discrete answers. The `ask` skill now says to ask before the step the answer decides and to stop when a question is skipped, and `changeset` writes no file until the bump is known. `create-brain-note` asks for the repository as free text and never offers a guessed name.

## 2.5.0

### Minor Changes

- [#19](https://github.com/stijnvanhulle/agents/pull/19) [`cdec4e4`](https://github.com/stijnvanhulle/agents/commit/cdec4e4d715ddd73914e644e67c333e9ddcd546b) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Tighten the code-style rule: never write `else` or `else if`, return early from a guard clause instead. A one-level ternary is the only inline conditional. The `deslop` skill and the code reviewer flag any `else` they find.

## 2.4.0

### Minor Changes

- [#15](https://github.com/stijnvanhulle/agents/pull/15) [`658b42d`](https://github.com/stijnvanhulle/agents/commit/658b42dbd0dd7f12abb91bf260a359f426c1722d) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - Add `/create-brain-note` for Claude Code and Cursor and a matching Codex skill to save a recap or idea to a GitHub repository you choose.
  
  ```text
  /create-brain-note
  /create-brain-note stijnvanhulle/brain an idea to revisit
  $agents:create-brain-note stijnvanhulle/brain an idea to revisit
  ```

## 2.3.0

### Minor Changes

- [#12](https://github.com/stijnvanhulle/agents/pull/12) [`4b13439`](https://github.com/stijnvanhulle/agents/commit/4b13439b8b1aa6f0a25f8a7299c487a460d3be52) Thanks [@stijnvanhulle](https://github.com/stijnvanhulle)! - The agents plugin now rechecks accepted edits against project rules and supports Paseo's native question picker.

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
