import { expect, test } from 'claude-code/testing'

import { readSnapshot } from './git'

const fake = (answers: Record<string, string | null>) => async (argv: string[]) => {
  const key = argv.slice(0, 2).join(' ')
  if (!(key in answers)) throw new Error(`cannot start ${argv[0]}`)
  const stdout = answers[key]
  if (stdout === null) return { exitCode: 1, stdout: '', stderr: 'no pull requests found for branch' }
  return { exitCode: 0, stdout: stdout ?? '', stderr: '' }
}

const repo = {
  'git rev-parse': 'feat/release-script\n',
  'git rev-list': '1\n',
  'git status': ' M package.json\n?? scripts/release.ts\n',
  'git log': '4c1e9a2\tfeat(scripts): add release tag script\n',
  'git diff': 'package.json\n.changeset/README.md\n',
}

test('reads branch, files, commits and a missing changeset', async () => {
  const snap = await readSnapshot(fake({ ...repo, 'gh pr': null }))
  expect(snap).toEqual({
    branch: 'feat/release-script',
    ahead: 1,
    files: [{ status: 'M', path: 'package.json' }, { status: '??', path: 'scripts/release.ts' }],
    commits: [{ hash: '4c1e9a2', subject: 'feat(scripts): add release tag script' }],
    hasChangeset: false,
    pr: null,
  })
})

test('finds a changeset and a PR', async () => {
  const snap = await readSnapshot(fake({ ...repo, 'git diff': '.changeset/brave-mods.md\n', 'gh pr': '40\n' }))
  expect(snap?.hasChangeset).toBe(true)
  expect(snap?.pr).toBe(40)
})

test('leaves the PR unknown when gh is missing, and returns null outside a repo', async () => {
  const { 'gh pr': _, ...noGh } = { ...repo, 'gh pr': '' }
  expect((await readSnapshot(fake(noGh)))?.pr).toBeUndefined()
  expect(await readSnapshot(fake({}))).toBeNull()
})
