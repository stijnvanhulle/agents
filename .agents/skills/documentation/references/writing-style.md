# Writing style

House choices for documentation prose. The `humanizer` skill covers the AI tells.

## Principles

- Direct and technical, no marketing adjectives: "Generates TypeScript types from OpenAPI
  schemas", not "Transforms your API into typed code".
- Paragraphs of 1 to 3 sentences, topic sentence first.
- Sentences under about 25 words, subject first: "The plugin generates types from a schema."
- Imperative for steps: "Run `pnpm changeset` to create a changeset."
- A condition opens with When, If, or After: "After installing the module, restart the server."
- Verbs, not nominalizations: "creates", not "the creation of".
- One term per concept across pages: `plugin`, `schema`, `endpoint`.
- Backticks for commands, config keys, file names, and identifiers.

## Voice and tense

Use the active voice: "You can override defaults", not "Defaults can be overridden". Passive is
fine when the actor is unknown or unimportant: "The file is loaded during startup."

Use the present tense for behavior and instructions, future only for a consequence ("This will
create an endpoint"), and past only in changelogs.

| Modal | Means |
| --- | --- |
| `can` | Optional |
| `should` | Recommended |
| `may` | Possible |
| `must` | Required |

Avoid the weak modals `might`, `could`, and `would`.

## Address and tone

Guides and tutorials speak to "you". API references stay neutral, without "you". Stay
consistent within a section.

| Type | Tone |
| --- | --- |
| Getting started | Welcoming |
| Guides | Instructional |
| API reference | Precise, neutral |
| Troubleshooting | Solution-focused |

## Openings

A page opens with what the thing is and does, not "This page describes", "In this guide", or
"Let's explore". A section opens with the topic and why it matters:
"The plugin accepts several options that control its behavior."

## Common mistakes

- A sentence that opens with an unclear "It" or "This".
- Stacked prepositions: "the value of the property of the config".
- "Note that" before a fact. State the fact.
- The key point buried at the end of a long sentence.

## Examples

Examples are realistic (real OpenAPI or code, no placeholders), complete enough to run, tested
before committing, and minimal.
