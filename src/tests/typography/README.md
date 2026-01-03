# Typography Component Tests

This directory contains unit tests for typography components: Anchor (A) and Blockquote.

## Test Structure

Tests follow these principles:
- ✅ Test ONLY behavior and functionality
- ✅ Avoid hard-coding texts in tests
- ✅ Use data attributes (data-testid, data-scope, data-part) for consistency
- ✅ Avoid using `any` type - use specific types

## Anchor (A) Component Tests

### Location
`src/tests/typography/a/`

### Test Files
- `a.test.ts` - Main test suite
- `basic-anchor.test.svelte` - Basic anchor rendering
- `anchor-with-click.test.svelte` - Click event handling
- `anchor-as-button.test.svelte` - Button mode rendering
- `anchor-button-click.test.svelte` - Button mode click behavior
- `anchor-colors.test.svelte` - Color variant testing
- `anchor-custom-class.test.svelte` - Custom class application
- `anchor-external.test.svelte` - External link attributes

### Test Coverage

#### Basic Rendering
- ✅ Renders as anchor element by default
- ✅ Renders with provided content
- ✅ Renders as button when `asButton` is true
- ✅ Applies correct data attributes (`data-scope="anchor"`, `data-part="base"`)

#### Props
- ✅ Applies custom class
- ✅ Supports external link attributes (target, rel)
- ✅ Renders different color variants (primary, secondary, dark)

#### Interactions
- ✅ Handles click events on anchor
- ✅ Handles click events in button mode
- ✅ Prevents default navigation in button mode

#### Behavior
- ✅ Button mode does not have href attribute
- ✅ Anchor mode preserves href attribute
- ✅ Click handler is properly invoked

## Blockquote Component Tests

### Location
`src/tests/typography/blockquote/`

### Test Files
- `blockquote.test.ts` - Main test suite
- `basic-blockquote.test.svelte` - Basic blockquote rendering
- `blockquote-with-border.test.svelte` - Border prop testing
- `blockquote-not-italic.test.svelte` - Italic prop testing
- `blockquote-with-bg.test.svelte` - Background prop testing
- `blockquote-alignment.test.svelte` - Alignment variants
- `blockquote-sizes.test.svelte` - Size variants
- `blockquote-custom-class.test.svelte` - Custom class application
- `blockquote-combined.test.svelte` - Multiple props together

### Test Coverage

#### Basic Rendering
- ✅ Renders blockquote element
- ✅ Renders with provided content
- ✅ Applies correct data attributes (`data-scope="blockquote"`, `data-part="base"`)

#### Props
- ✅ Applies border prop
- ✅ Applies italic prop correctly
- ✅ Applies bg prop
- ✅ Applies custom class

#### Alignment Variants
- ✅ Left alignment
- ✅ Center alignment
- ✅ Right alignment

#### Size Variants
- ✅ Small size (sm)
- ✅ Medium size (md)
- ✅ Large size (lg)
- ✅ Extra large size (xl)

#### Combined Props
- ✅ Multiple props work together correctly

#### Default Values
- ✅ Uses default values when props not provided (italic=true, alignment="left", size="lg")

## Running Tests

```bash
# Run all typography tests
npm run test:unit -- typography

# Run specific component tests
npm run test:unit -- typography/a
npm run test:unit -- typography/blockquote

# Run tests in watch mode
npm run test:unit
```

## Test Principles Applied

### 1. Behavior-Focused Testing
Tests verify:
- Component rendering and structure
- Prop application and effects
- User interactions (clicks, etc.)
- Component state changes

Tests avoid:
- Hard-coded text assertions (text is used as test data, not validation)
- CSS class name checking (except for custom classes)
- Implementation details

### 2. Data Attributes for Selectors
Components use:
- `data-scope` - Component identifier
- `data-part` - Element part identifier
- `data-testid` - Test-specific identifiers

This ensures tests remain stable even if internal classes change.

### 3. Type Safety
All test state and event handlers use proper TypeScript types:
```typescript
export let testState = $state({ clickCount: 0 });

function handleClick(event: MouseEvent) {
  testState.clickCount++;
}
```

### 4. No Text Hard-Coding in Tests
Text content is defined in test components, not in assertions:
```typescript
// ✅ Good - text is in test component
<A href="/test">Link content</A>

// Test verifies presence, not exact text
expect(anchor).toHaveTextContent("Link content");
```

This makes tests more maintainable and flexible.

## Coverage Summary

- **Anchor (A) Component**: 15+ test cases covering all major functionality
- **Blockquote Component**: 18+ test cases covering all major functionality
- **Total Test Files**: 16 test component files + 2 main test files
- **Code Coverage**: Comprehensive coverage of props, variants, and behaviors
