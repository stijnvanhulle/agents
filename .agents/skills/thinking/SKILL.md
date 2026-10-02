---
name: thinking
description: Think before building. Map unfamiliar code, or find where code that resists change should be reshaped.
---

# Thinking

Pick by what is unsettled:

- An area of code you do not know: zoom out.
- Code that works but resists change: run the architecture loop.
- A finished diff that reads badly: use the `deslop` skill.
- Text a person must read: use the `writing` skill.

## Zoom out

Go up one layer of abstraction. Map the modules involved and who calls them, in the words the
codebase uses. Name the entry points and the data that crosses each boundary. Stop at the map.
Do not propose changes until asked.

## Vocabulary

Use these words for structure, and the codebase's own words for the things themselves.

- **Interface**: everything a caller must know, including types, invariants, ordering, error
  modes, and configuration. Not just the signature.
- **Depth**: a lot of behavior behind a small interface. A module is shallow when its interface
  is nearly as complex as its implementation.
- **Seam**: the place an interface sits, so behavior can change without editing code in place.

## Architecture loop

Read the docs and decision records for the area first. Then present numbered candidates, each
with the files involved, the friction, what would change, and what it buys. Ask which one to
explore before designing any interface. Then work through that one with the person, one question at a time.

Judge whether a module earns its place:

- Deletion test: imagine the module gone. If the complexity vanishes, it was a pass-through. If
  it reappears across several callers, it was earning its keep.
- The interface is the test surface. Wanting to test past the interface means the module has the
  wrong shape.
- One adapter is a hypothetical seam. Two is a real one.
- Design it twice. Sketch a second, structurally different interface before committing to one,
  then say which you prefer and why.
- A candidate that contradicts a recorded decision is worth raising only when the friction is
  real. Name the decision when you raise it.
