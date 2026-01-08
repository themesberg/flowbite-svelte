# Reactive Context

## Pattern 1: Object with Getters (Accordion)
Better for: Multiple reactive properties that need to be accessed independently
```ts
typescriptconst reactiveCtx = {
  get flush() { return flush; },
  get transitionType() { return transitionType; }
  // ...
};
```
### Advantages

Clean property access: ctx.flush, ctx.transitionType
Each property is lazily evaluated only when accessed
Maintains object structure/type safety
Good for complex contexts with many properties

## Pattern 2: Function Wrapper (Navbar)
Better for: Single reactive values or when you want to return the entire state at once
```ts
typescriptsetNavbarBreakpointContext(() => breakpoint);
```
### Advantages

Simpler for single values
More explicit that it's a function call
Directly follows the Svelte docs pattern

## Use cases

Accordion (multiple properties) - Keep Pattern 1 with getters. It's more ergonomic when consuming:
```ts
const ctx = getAccordionContext();
// Use: ctx.flush, ctx.transitionType, etc.

Navbar (single value) - Pattern 2 is perfect:

svelte   const getBreakpoint = getNavbarBreakpointContext();
   // Use: getBreakpoint()
However, you could also use Pattern 2 for Accordion if you prefer consistency:
typescriptsetAccordionContext(() => ({
  flush,
  transitionType,
  respectReducedMotion,
  classes
}));
```

The downside is this creates a new object on each access, which could cause unnecessary re-renders if used in places expecting referential equality.

## Conclusion
Use Pattern 1 for multi-property contexts, Pattern 2 for single values. Both are "correct" - choose based on ergonomics for consistency vs. optimization.

## Reference

- https://svelte.dev/docs/svelte/$effect#When-not-to-use-$effect
- https://svelte.dev/docs/svelte/compiler-warnings#state_referenced_locally
- https://svelte.dev/docs/svelte/await-expressions
- 