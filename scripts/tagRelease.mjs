import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const flagship = 'agents'
const changelogFile = 'tools/claude/CHANGELOG.md'

const packages = [
  'tools/claude/package.json',
  'tools/cursor/package.json',
  'tools/codex/package.json',
]

const versions = packages.map((file) => {
  const { name, version } = JSON.parse(readFileSync(join(root, file), 'utf8'))
  return { file, name, version }
})

const version = versions[0].version
const mismatch = versions.filter((entry) => entry.version !== version)

if (mismatch.length > 0) {
  const listed = versions.map((entry) => `${entry.name}@${entry.version}`).join(', ')
  throw new Error(`Plugin versions must match before tagging. Found ${listed}.`)
}

const tag = `${flagship}@${version}`
const title = `v${version}`

const exists = spawnSync('git', ['rev-parse', '-q', '--verify', `refs/tags/${tag}`], {
  cwd: root,
  encoding: 'utf8',
})

if (exists.status !== 0) {
  const tagged = spawnSync('git', ['tag', '-a', tag, '-m', title], { cwd: root, stdio: 'inherit' })
  if (tagged.status !== 0) process.exit(tagged.status ?? 1)
  console.log(`Created ${tag}`)
} else {
  console.log(`${tag} already exists`)
}

const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN
if (!token) process.exit(0)

const viewed = spawnSync('gh', ['release', 'view', tag], { cwd: root, encoding: 'utf8' })
if (viewed.status === 0) {
  console.log(`Release ${tag} already exists`)
  process.exit(0)
}

const changelog = readFileSync(join(root, changelogFile), 'utf8')
const escaped = version.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const heading = changelog.match(new RegExp(`^##\\s+v?${escaped}(?![\\w.-]).*$`, 'm'))
let notes = `See [CHANGELOG.md](https://github.com/stijnvanhulle/agents/blob/main/${changelogFile}).`

if (heading) {
  const after = changelog.slice(heading.index + heading[0].length)
  const next = after.match(/^##\s+/m)
  const block = (next ? after.slice(0, next.index) : after).trim()
  if (block) notes = block
}

const created = spawnSync(
  'gh',
  ['release', 'create', tag, '--target', 'HEAD', '--title', title, '--notes', notes],
  { cwd: root, stdio: 'inherit', env: process.env },
)

if (created.status !== 0) process.exit(created.status ?? 1)
