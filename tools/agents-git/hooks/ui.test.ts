import { expect, mock, test } from 'claude-code/testing'

const git: Record<string, string> = {
  'rev-parse': 'feat/x\n',
  'rev-list': '2\n',
  status: '',
  log: 'abc1234\tfeat: x\n',
  diff: 'src/a.ts\n',
}

test('the band shows the branch, a missing changeset and no PR on each surface', async ($, on) => {
  mock.clock(on)
  const ran = { stderr: '', isStdoutTruncated: false, isStderrTruncated: false }
  on('process.run', (_$, e) => ({
    value: e.argv[0] === 'gh'
      ? { ...ran, exitCode: 1, stdout: '', stderr: 'no pull requests found' }
      : { ...ran, exitCode: 0, stdout: git[e.argv[1] ?? ''] ?? '' },
  }))
  on('session.usage', () => ({ value: { startedAt: 0, context: { window: 200000, percent: 41 }, rateLimits: [] } }))
  on('session.start', (_$, e) => ({ cwd: e.cwd }))
  on('command.register', () => ({ value: { command: 'agents' } }))
  on('ui.status', () => ({ value: undefined }))
  on('ui.open', () => ({ value: { isPlaced: true } }) as never)
  await $.session.start({ cwd: '/repo', surface: null, isInteractive: true })

  for (const surface of ['terminal', 'desktop'] as const) {
    const ui = await $.ui.mount({ plugin: 'agents-git', surface, component: 'AbovePrompt', props: {} as never })
    expect(await ui.find({ type: 'Text', text: 'feat/x' })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /no changeset/ })).toBeDefined()
    expect(await ui.find({ type: 'Text', text: /no PR yet/ })).toBeDefined()
    await ui.unmount()
  }
})
