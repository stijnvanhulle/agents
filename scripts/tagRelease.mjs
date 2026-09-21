import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

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

const tag = `v${version}`
const exists = spawnSync('git', ['rev-parse', '-q', '--verify', `refs/tags/${tag}`], {
  cwd: root,
  encoding: 'utf8',
})

if (exists.status === 0) {
  console.log(`${tag} already exists`)
  process.exit(0)
}

const tagged = spawnSync('git', ['tag', '-a', tag, '-m', tag], { cwd: root, stdio: 'inherit' })

if (tagged.status !== 0) {
  process.exit(tagged.status ?? 1)
}

console.log(`Created ${tag}`)
