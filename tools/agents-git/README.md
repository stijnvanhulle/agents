# agents-git

A Claude Code mod that shows where the current branch stands before you open a pull request. It
reads git and the GitHub CLI and draws three things:

- A row above the prompt with the branch, the commits ahead of `main`, and whether a changeset
  and a pull request exist.
- An Agents pane with a ready-for-PR list, the changed files, and the last five commits. It opens
  at session start, or with `/agents-git`.
- A status line entry with the context window use.

It refreshes every five seconds and never blocks or changes a tool call.

## Install

```bash
claude plugin marketplace add stijnvanhulle/agents
claude plugin install agents-git@stijnvanhulle
```

Run Claude Code in a terminal inside a git repository. The pull request state needs `gh` signed
in. Without it, the row leaves the pull request out.

Mods need a surface that draws them. The row and the pane show in the terminal. A cloud session
viewed in the browser has no surface, so `/agents-git` answers with text only.

## Develop

```bash
claude --plugin-dir ./tools/agents-git
claude plugin validate tools/agents-git
claude plugin test tools/agents-git
```
