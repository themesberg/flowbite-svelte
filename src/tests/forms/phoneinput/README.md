# PhoneInput Component Tests

This directory contains comprehensive behavior-focused tests for the PhoneInput component.

## Test Philosophy

These tests focus on **behavior and functionality** rather than CSS classes or styling implementation. They verify:
- User interactions and input handling
- Component state and attributes
- Accessibility features
- DOM structure and element relationships
- Different component variants

## Test Coverage

### Basic Rendering (5 tests)
- ✅ Renders phone input element
- ✅ Input type is "tel"
- ✅ Has default pattern attribute
- ✅ Has id attribute
- ✅ Has name attribute

### Phone Icon (3 tests)
- ✅ Renders phone icon by default
- ✅ Can hide phone icon with `phoneIcon={false}`
- ✅ Icon has correct SVG attributes

### Phone Type Variants (5 tests)
- ✅ Default type renders correctly
- ✅ CountryCode type renders correctly
- ✅ Floating type with label
- ✅ Floating label has correct `for` attribute
- ✅ Floating input has correct `id`

### Icon in Different Types (3 tests)
- ✅ Floating type renders with icon by default
- ✅ Floating type can hide icon
- ✅ CountryCode type renders with icon

### User Input (3 tests)
- ✅ Accepts user keyboard input
- ✅ Can be focused
- ✅ Can be cleared and retyped

### Value Binding (2 tests)
- ✅ Displays bound value
- ✅ Input is editable with binding

### Disabled State (2 tests)
- ✅ Disabled input is not editable
- ✅ Shows value when disabled

### Custom Pattern (2 tests)
- ✅ Accepts custom pattern attribute
- ✅ Has title attribute for pattern hint

### Required Attribute (1 test)
- ✅ Input can be required

### Accessibility (4 tests)
- ✅ Input accessible by placeholder
- ✅ Floating input accessible by label
- ✅ Phone icon has aria-hidden
- ✅ Label and input properly associated

### DOM Structure (3 tests)
- ✅ Input wrapped in relative div
- ✅ Icon and input are siblings in default type
- ✅ Floating type has correct structure

### Placeholder (2 tests)
- ✅ Displays placeholder text
- ✅ Different types can have different placeholders

## Test Files

### Main Test File
- `phoneinput.test.ts` - Main test suite with all test cases

### Test Fixtures (Svelte Components)
- `phoneinput-basic.test.svelte` - Basic phone input with default settings
- `phoneinput-no-icon.test.svelte` - Phone input without icon
- `phoneinput-floating.test.svelte` - Floating label variant
- `phoneinput-floating-no-icon.test.svelte` - Floating variant without icon
- `phoneinput-country-code.test.svelte` - Country code variant
- `phoneinput-disabled.test.svelte` - Disabled input with value
- `phoneinput-value-binding.test.svelte` - Value binding demonstration
- `phoneinput-custom-pattern.test.svelte` - Custom validation pattern
- `phoneinput-required.test.svelte` - Required field

## Running Tests

```bash
# Run all PhoneInput tests
npm test phoneinput

# Run in watch mode
npm test phoneinput -- --watch

# Run with coverage
npm test phoneinput -- --coverage
```

## What These Tests DON'T Check

Following best practices, these tests intentionally **do not** check:
- ❌ Specific CSS classes or Tailwind utilities
- ❌ Color values or styling
- ❌ Spacing, padding, or margin classes
- ❌ Border radius or shadow classes
- ❌ Font sizes or text styling
- ❌ Animation or transition classes

These implementation details should be tested through visual regression tests or manual QA, not unit tests.

## Adding New Tests

When adding new tests, follow these principles:

### ✅ DO Test:
- User interactions (typing, clicking, focusing)
- Element attributes (type, name, id, pattern)
- Accessibility features (aria-*, labels, roles)
- Component variants (default, floating, countryCode)
- State changes (disabled, required, value)
- DOM structure (element relationships)

### ❌ DON'T Test:
- CSS class names
- Styling values
- Visual appearance
- Layout specifics

## Example Test Pattern

```typescript
// ✅ Good - Tests behavior
test("accepts user input", async () => {
  const user = userEvent.setup();
  render(PhoneInputBasicTest);
  const input = screen.getByPlaceholderText("123-456-7890");
  
  await user.type(input, "555-123-4567");
  
  expect(input.value).toBe("555-123-4567");
});

// ❌ Bad - Tests implementation
test("has correct padding classes", () => {
  render(PhoneInputBasicTest);
  const input = screen.getByPlaceholderText("123-456-7890");
  
  expect(input).toHaveClass("px-4", "py-2.5");
});
```

## Total Tests: 35

All tests focus on verifying that the PhoneInput component works correctly for users, not on how it's styled.
