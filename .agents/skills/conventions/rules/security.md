# Security

- Keep secrets in environment variables or a gitignored `.env`. Never commit, inline, or log
  them, and never log full request or response bodies that may hold them.
- Validate and sanitize input at trust boundaries: CLI arguments, file contents, and network
  responses. Internal code is trusted.
- Avoid shell interpolation of untrusted input: pass an argument array, and do not use
  `shell: true` on user-supplied data.
- Keep dependencies trusted and current: prefer maintained packages, install from the committed
  lockfile, and review a new dependency before adding it.
- Never weaken safety to make something pass, such as disabling a type check, lint rule, or
  test. Fix the root cause.
