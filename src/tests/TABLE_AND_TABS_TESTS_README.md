# Table and Tabs Component Tests

## Overview

This directory contains comprehensive unit tests for the Table and Tabs components in Flowbite Svelte. The tests focus on behavior, functionality, and accessibility while following best practices.

## Test Philosophy

### Core Principles

1. **Behavior Over Implementation**: Tests verify what the component does, not how it does it
2. **User-Centric**: Tests simulate real user interactions
3. **Maintainable**: Tests use data attributes instead of brittle selectors
4. **Type-Safe**: No `any` types - all test state is properly typed
5. **Accessible**: Tests verify ARIA attributes and semantic HTML

### What We Test

✅ User interactions (clicks, typing, etc.)
✅ Component state changes
✅ Prop variations and their effects
✅ Accessibility attributes (ARIA, roles)
✅ Data attributes for component identification
✅ Slot rendering

### What We Avoid

❌ Hard-coded text content (brittle)
❌ Class-based selectors (implementation detail)
❌ Testing internal implementation
❌ Using `any` types

## Directory Structure

```
tests/
├── table/
│   ├── TEST_COVERAGE.md              # Detailed coverage documentation
│   ├── table.test.ts                 # Main test suite
│   ├── basic-table.test.svelte       # Basic rendering
│   ├── table-with-items.test.svelte  # Items prop
│   ├── striped-table.test.svelte     # Striped variant
│   ├── hoverable-table.test.svelte   # Hoverable variant
│   ├── borderless-table.test.svelte  # Borderless variant
│   ├── shadow-table.test.svelte      # Shadow variant
│   ├── colored-table.test.svelte     # Color variants
│   ├── colspan-table.test.svelte     # Colspan functionality
│   ├── clickable-cell.test.svelte    # Cell click events
│   ├── table-with-slots.test.svelte  # Caption/footer slots
│   ├── table-search.test.svelte      # TableSearch basic
│   └── table-search-styled.test.svelte # TableSearch variants
│
└── tabs/
    ├── TEST_COVERAGE.md               # Detailed coverage documentation
    ├── tabs.test.ts                   # Main test suite
    ├── basic-tabs.test.svelte         # Basic rendering
    ├── tab-styles.test.svelte         # Style variants
    ├── tabs-no-divider.test.svelte    # Without divider
    ├── tabs-with-selected.test.svelte # Pre-selected state
    ├── tabs-with-disabled.test.svelte # Disabled tabs
    ├── tabs-with-title-slot.test.svelte # Custom title
    ├── clickable-tabs.test.svelte     # Tab switching
    └── tabs-with-classes.test.svelte  # Custom classes
```

## Running Tests

### Run All Tests

```bash
npm run test:unit
```

### Run Table Tests Only

```bash
npm run test:unit -- table
```

### Run Tabs Tests Only

```bash
npm run test:unit -- tabs
```

### Run Specific Test File

```bash
npm run test:unit -- table.test.ts
npm run test:unit -- tabs.test.ts
```

### Watch Mode

```bash
npm run test:unit table  # Watch table tests
npm run test:unit tabs   # Watch tabs tests
```

### Run with Coverage

```bash
npm run test:unit:run -- --coverage
```

## Test Patterns

### 1. Basic Component Test

```typescript
test("renders component correctly", () => {
  render(ComponentTest);
  const element = screen.getByTestId("component-id");
  
  expect(element).toBeInTheDocument();
});
```

### 2. User Interaction Test

```typescript
test("handles click event", async () => {
  const user = userEvent.setup();
  render(ClickableTest);
  
  const button = screen.getByTestId("clickable-element");
  await user.click(button);
  
  expect(testState.clickCount).toBe(1);
});
```

### 3. State Management Test

```typescript
test("updates state on interaction", async () => {
  const user = userEvent.setup();
  testState.value = "";
  
  render(StatefulTest);
  
  const input = screen.getByRole("textbox");
  await user.type(input, "test");
  
  expect(testState.value).toBe("test");
});
```

### 4. Async State Test

```typescript
test("waits for state update", async () => {
  render(AsyncTest);
  
  await waitFor(() => {
    const element = screen.getByTestId("async-element");
    expect(element).toHaveAttribute("aria-selected", "true");
  });
});
```

## Using Data Attributes

### In Components (Example)

```svelte
<div data-testid="my-component" data-scope="component" data-part="root">
  <button data-testid="action-button">Click me</button>
</div>
```

### In Tests

```typescript
// Good: Use data-testid
const component = screen.getByTestId("my-component");
const button = screen.getByTestId("action-button");

// Also good: Use role for semantic elements
const button = screen.getByRole("button");
const input = screen.getByRole("textbox");

// Avoid: Class selectors
const component = document.querySelector(".my-component"); // ❌

// Avoid: Text selectors (brittle)
const button = screen.getByText("Click me"); // ❌
```

## Test State Management

When testing stateful components, export a test state object:

```svelte
<!-- Component.test.svelte -->
<script lang="ts" module>
  export const testState = {
    clickCount: 0,
    currentValue: ""
  };
</script>

<script lang="ts">
  function handleClick() {
    testState.clickCount++;
  }
</script>
```

Then use it in tests:

```typescript
import ComponentTest, { testState } from "./component.test.svelte";

test("tracks state changes", async () => {
  testState.clickCount = 0; // Reset before test
  
  render(ComponentTest);
  // ... test code
  
  expect(testState.clickCount).toBe(1);
});
```

## Accessibility Testing

Always verify:

1. **Semantic HTML**: Correct roles and element types
2. **ARIA Attributes**: aria-label, aria-selected, aria-controls, etc.
3. **Keyboard Accessibility**: Buttons are keyboard accessible
4. **Focus Management**: Proper focus behavior
5. **Screen Reader Support**: Labels and descriptions

Example:

```typescript
test("has proper accessibility attributes", () => {
  render(AccessibleTest);
  
  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("aria-label");
  
  const input = screen.getByRole("textbox");
  const label = document.querySelector(`label[for="${input.id}"]`);
  expect(label).toBeInTheDocument();
});
```

## Testing Guidelines

### DO ✅

- Use data-testid for element selection
- Use semantic queries (getByRole, getByLabelText)
- Test user behavior and outcomes
- Wait for async operations (waitFor)
- Reset test state before each test
- Use specific types for test state
- Test accessibility features

### DON'T ❌

- Hard-code text content in tests
- Use class selectors
- Test implementation details
- Use `any` types
- Skip cleanup between tests
- Ignore accessibility
- Test internal component logic

## Coverage Goals

| Component | Target Coverage | Current Status |
|-----------|----------------|----------------|
| Table | 90%+ | ✅ Achieved |
| TableBody | 90%+ | ✅ Achieved |
| TableBodyCell | 90%+ | ✅ Achieved |
| TableHead | 90%+ | ✅ Achieved |
| TableSearch | 90%+ | ✅ Achieved |
| Tabs | 90%+ | ✅ Achieved |
| TabItem | 90%+ | ✅ Achieved |

## Troubleshooting

### Tests Timing Out

Use `waitFor` for async operations:

```typescript
await waitFor(() => {
  expect(element).toBeInTheDocument();
});
```

### Elements Not Found

1. Check if component rendered: `screen.debug()`
2. Verify data-testid is correct
3. Check if element is conditional

### State Not Updating

1. Ensure state is reset before test
2. Use `waitFor` for reactive updates
3. Check if effect runs in component

## Contributing

When adding new tests:

1. Follow the existing patterns
2. Use data-testid attributes
3. Test behavior, not implementation
4. Include accessibility checks
5. Update TEST_COVERAGE.md
6. Use TypeScript (no `any`)

## Resources

- [Testing Library Docs](https://testing-library.com/docs/svelte-testing-library/intro)
- [Vitest Docs](https://vitest.dev/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
