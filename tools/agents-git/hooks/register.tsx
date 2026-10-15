import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import type { Snapshot } from '../types'
import { readSnapshot } from './git'

const PANE = 'agents-git'
const snapshot = atom({ plugin: 'agents-git', key: 'snapshot' } as const, null)

const describe = (snap: Snapshot | null) =>
  snap ? `${snap.branch}, ${snap.files.length} changed file(s)` : 'not a git repository'

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const refresh = async () => {
      const snap = await readSnapshot(argv => $.process.run(argv))
      await update($, snapshot, () => snap)
      const { context } = await $.session.usage()
      $.ui.status(context.percent === undefined ? undefined : `context ${Math.round(context.percent)}%`)
    }
    await refresh()
    $.clock.every(5000, () => void refresh())

    await $.command.register({ name: 'agents-git', description: 'Show branch, changes, and PR readiness in a pane' })
    void $.ui.open({ id: PANE, title: 'Agents' })

    return next(e)
  })

  on('command.run', { command: 'agents-git' }, async $ => {
    const opened = await $.ui.open({ id: PANE, title: 'Agents' })
    const snap = await read($, snapshot)

    return { text: `${describe(snap)} · pane ${opened.isPlaced ? 'shown' : `not shown (${opened.reason})`}` }
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const snap = await read($, snapshot)
    if (e.props.hasSurvey || !snap) return next(e)

    const { Box, Text } = $.ui.resolve(e)

    return (
      <Box>
        <Text dimColor>⎇ </Text>
        <Text>{snap.branch}</Text>
        <Text dimColor> · {snap.ahead} ahead  </Text>
        <Text color={snap.hasChangeset ? 'green' : 'red'}>●</Text>
        <Text dimColor>{snap.hasChangeset ? ' changeset  ' : ' no changeset  '}</Text>
        {snap.pr !== undefined && <Text dimColor>{snap.pr ? `○ PR #${snap.pr}` : '○ no PR yet'}</Text>}
      </Box>
    )
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const { Box, Text } = $.ui.resolve(e)
    const snap = await read($, snapshot)
    if (!snap) return <Text dimColor>Not a git repository.</Text>

    const ready: [boolean, string][] = [
      [snap.files.length === 0, 'Working tree clean'],
      [snap.ahead > 0, `${snap.ahead} commit(s) ahead of main`],
      [snap.hasChangeset, snap.hasChangeset ? 'Changeset' : 'Changeset · /create-changeset'],
      [Boolean(snap.pr), snap.pr ? `PR #${snap.pr}` : 'Pull request · /create-pr'],
    ]

    return (
      <Box flexDirection="column">
        <Text bold>{snap.branch}</Text>
        <Text> </Text>
        <Text dimColor>READY FOR PR</Text>
        {ready.map(([isDone, label]) => (
          <Text>
            <Text color={isDone ? 'green' : 'red'}>{isDone ? '●' : '○'}</Text> {label}
          </Text>
        ))}
        <Text> </Text>
        <Text dimColor>CHANGED FILES ({snap.files.length})</Text>
        {snap.files.length === 0 && <Text dimColor>none</Text>}
        {snap.files.slice(0, 10).map(f => (
          <Text>
            <Text dimColor>{f.status.padEnd(2)}</Text> {f.path}
          </Text>
        ))}
        <Text> </Text>
        <Text dimColor>COMMITS</Text>
        {snap.commits.map(c => (
          <Text wrap="truncate-end">
            <Text color="yellow">{c.hash}</Text> {c.subject}
          </Text>
        ))}
      </Box>
    )
  })
}
