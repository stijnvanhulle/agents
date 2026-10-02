---
name: grill-me
description: Pressure-test a plan, decision, or idea with one question per turn, a recommended answer for each, and the code as the source of facts.
---

# Grill me

Interview the person about the plan. Take the decisions one at a time, starting with the ones
the others depend on.

## Loop

- Ask one question per turn and give your own recommended answer with it. Then wait.
- Look a fact up in the code, the docs, or the history instead of asking for it. Ask only about
  decisions.
- When they say how something works, check the code and name any contradiction you find.
- When a word could mean two things, check the repo's glossary or its types first. If it is still
  ambiguous, ask which one they mean: "you said account, is that the workspace or the user?"
- Test a relationship with a concrete edge case, not in the abstract.
- When a question has a few discrete answers, follow the `ask` skill to present them.

## When to stop

Stop when no open decision depends on another and every term is pinned down. Then restate the
shared understanding in a few lines and ask whether it is right.

Do not start building until they say it is.
