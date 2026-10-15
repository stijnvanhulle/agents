# JSDoc examples

## `@example` formats

A short example: the label on the `@example` line, the code in inline backticks on the next line.
Use one `@example` per variant.

```typescript
/**
 * @example Object mode
 * `{ id, data, params }: { id: string; data: Data; params?: QueryParams }`
 *
 * @example Inline mode
 * `id: string, data: Data, params?: QueryParams`
 */
```

A multi-line example: a fenced block right after `@example`, never bare code lines.

````typescript
/**
 * @example
 * ```ts
 * const result = buildParams(node, {
 *   paramsType: 'inline',
 * })
 * ```
 */
````

Never put the code on the `@example` line itself, and never fence a one-liner.

## Patterns

A simple property, still multi-line:

```typescript
/**
 * Output directory for generated files.
 */
outDir?: string
```

A non-obvious default:

```typescript
/**
 * Maximum number of concurrent callbacks during traversal.
 * Higher values overlap I/O-bound work, lower values save memory.
 *
 * @default 30
 */
concurrency?: number
```

An enum or union, one bullet per value:

```typescript
/**
 * How path parameters are emitted in the function signature.
 * - `'object'` groups them as a single destructured parameter
 * - `'inline'` spreads them as individual parameters
 * - `'inlineSpread'` emits a single rest parameter
 */
pathParamsType: 'object' | 'inline' | 'inlineSpread'
```

Nested properties, each with its own block:

```typescript
names?: {
  /**
   * Name for the request body parameter.
   * @default 'data'
   */
  data?: string
  /**
   * Name for the query parameters group parameter.
   * @default 'params'
   */
  params?: string
}
```

A function, only when the comment adds behavior the signature hides:

```typescript
// No JSDoc: the signature says it all
function camelCase(str: string): string { ... }

/**
 * Returns `true` when the schema resolves to a plain string output.
 *
 * - `string`, `uuid`, `email`, `url`, `datetime` are always plain strings.
 * - `date` and `time` are plain strings when their `representation` is `'string'`.
 */
function isStringType(node: SchemaNode): boolean { ... }
```
