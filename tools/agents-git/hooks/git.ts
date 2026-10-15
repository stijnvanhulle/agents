import type { Snapshot } from '../types'

type Run = (argv: string[]) => Promise<{ exitCode: number; stdout: string; stderr: string }>

const BASE = 'origin/main'

/** Reads the repo state with git and gh. Returns null outside a git repo. */
export async function readSnapshot(run: Run): Promise<Snapshot | null> {
  const out = async (argv: string[]) => {
    try {
      const r = await run(argv)
      return r.exitCode === 0 ? r.stdout : undefined
    } catch {
      return undefined
    }
  }
  // undefined when gh is missing or signed out, null when the branch has no PR
  const readPr = async () => {
    try {
      const r = await run(['gh', 'pr', 'view', '--json', 'number', '--jq', '.number'])
      if (r.exitCode === 0) return Number(r.stdout) || null
      return /no pull requests found/i.test(r.stderr) ? null : undefined
    } catch {
      return undefined
    }
  }

  const branch = await out(['git', 'rev-parse', '--abbrev-ref', 'HEAD'])
  if (branch === undefined) return null

  const [ahead, status, log, changed, pr] = await Promise.all([
    out(['git', 'rev-list', '--count', `${BASE}..HEAD`]),
    out(['git', 'status', '--porcelain']),
    out(['git', 'log', '-5', '--format=%h%x09%s']),
    out(['git', 'diff', '--name-only', `${BASE}...HEAD`]),
    readPr(),
  ])

  const files = lines(status).map(line => ({ status: line.slice(0, 2).trim(), path: line.slice(3) }))
  const isChangeset = (path: string) => /^\.changeset\/(?!README).+\.md$/.test(path)

  return {
    branch: branch.trim(),
    ahead: Number(ahead) || 0,
    files,
    commits: lines(log).map(line => {
      const [hash = '', ...rest] = line.split('\t')
      return { hash, subject: rest.join('\t') }
    }),
    hasChangeset: lines(changed).some(isChangeset) || files.some(f => isChangeset(f.path)),
    pr,
  }
}

const lines = (text: string | undefined) => (text ? text.split('\n').filter(Boolean) : [])
