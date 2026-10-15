export type Snapshot = {
  branch: string
  ahead: number
  files: { status: string; path: string }[]
  commits: { hash: string; subject: string }[]
  hasChangeset: boolean
  /** PR number, `null` when none exists, `undefined` when `gh` could not tell. */
  pr?: number | null
}

declare module 'claude-code' {
  interface PluginState {
    'agents-git': { snapshot: Snapshot | null }
  }
}
