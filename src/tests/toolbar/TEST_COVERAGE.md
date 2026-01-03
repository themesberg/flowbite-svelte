# Toolbar Component Tests

## Overview
This directory contains comprehensive unit tests for the Toolbar, ToolbarButton, and ToolbarGroup components from the Flowbite Svelte library.

## Test Philosophy
These tests follow the principle of **testing behavior, not implementation**:
- ✅ Tests focus on how components behave from a user's perspective
- ✅ Tests use data attributes (`data-testid`, `data-scope`, `data-part`) for element selection
- ✅ Tests avoid hardcoded text where possible to prevent brittleness
- ✅ Tests use specific TypeScript types instead of `any`

## Components Tested

### Toolbar.svelte
The main toolbar container component.

#### Test Coverage

##### Basic Rendering
- ✅ Toolbar renders correctly with child buttons
- ✅ Toolbar has correct data attributes (`data-scope="toolbar"`, `data-part="base"`)

##### Color Variants
- ✅ Primary color variant
- ✅ Blue color variant
- ✅ Dark color variant
- ✅ Green color variant
- ✅ Red color variant

##### Embedded Prop
- ✅ Embedded toolbar renders with appropriate styling
- ✅ Non-embedded toolbar renders with default styling

##### End Snippet
- ✅ Toolbar renders end snippet content when provided

##### Custom Classes
- ✅ Custom classes are applied to toolbar element

##### Data Attributes
- ✅ Toolbar has `data-scope="toolbar"` and `data-part="base"`
- ✅ Content container has `data-part="content"`

### ToolbarButton.svelte
Individual button component for use within toolbars.

#### Test Coverage

##### Basic Rendering
- ✅ Button renders as `<button>` element by default
- ✅ Button has `type="button"` attribute
- ✅ Button has correct data attributes (`data-scope="toolbar-button"`, `data-part="button"`)

##### Link Variant
- ✅ Renders as `<a>` element when `href` is provided
- ✅ Link has correct href attribute
- ✅ Link has data attribute `data-part="link"`

##### Color Variants
- ✅ Primary color variant
- ✅ Blue color variant
- ✅ Dark color variant
- ✅ Red color variant
- ✅ Green color variant

##### Size Variants
- ✅ Extra small (xs) size
- ✅ Small (sm) size
- ✅ Medium (md) size
- ✅ Large (lg) size
- ✅ Extra large (xl) size

##### ARIA Attributes
- ✅ Button with `name` prop sets aria-label correctly
- ✅ Custom aria-label overrides name
- ✅ aria-expanded attribute is applied correctly
- ✅ Name prop adds sr-only span for screen readers

##### Click Functionality
- ✅ Button click handler is triggered
- ✅ Multiple clicks are tracked correctly

### ToolbarGroup.svelte
Grouping component for organizing toolbar buttons.

#### Test Coverage

##### Basic Rendering
- ✅ Group renders correctly with child buttons
- ✅ Group has correct data attributes (`data-scope="toolbar-group"`, `data-part="base"`)
- ✅ Group contains rendered buttons

##### Spacing Variants
- ✅ None spacing variant
- ✅ Small (sm) spacing variant
- ✅ Medium (md) spacing variant
- ✅ Large (lg) spacing variant

##### Padding Variants
- ✅ None padding variant
- ✅ Small (sm) padding variant
- ✅ Medium (md) padding variant
- ✅ Large (lg) padding variant

##### Position Variants
- ✅ Start position
- ✅ Middle position
- ✅ End position

## Test Files Structure

```
toolbar/
├── toolbar.test.ts                         # Main test suite
├── basic-toolbar.test.svelte               # Basic toolbar rendering
├── color-toolbar.test.svelte               # Toolbar color variants
├── embedded-toolbar.test.svelte            # Embedded prop
├── end-toolbar.test.svelte                 # End snippet
├── custom-class-toolbar.test.svelte        # Custom classes
├── basic-toolbar-button.test.svelte        # Basic button rendering
├── link-toolbar-button.test.svelte         # Link button variant
├── color-toolbar-button.test.svelte        # Button color variants
├── size-toolbar-button.test.svelte         # Button size variants
├── aria-toolbar-button.test.svelte         # ARIA attributes
├── click-toolbar-button.test.svelte        # Click functionality
├── basic-toolbar-group.test.svelte         # Basic group rendering
├── spacing-toolbar-group.test.svelte       # Spacing variants
├── padding-toolbar-group.test.svelte       # Padding variants
└── position-toolbar-group.test.svelte      # Position variants
```

## Running Tests

```bash
# Run all unit tests
npm run test:unit

# Run only toolbar tests
npm run test:unit toolbar

# Run tests in watch mode
npm run test:unit -- --watch

# Run tests with coverage
npm run test:unit -- --coverage
```

## Key Testing Patterns

### 1. Using Data Attributes
```typescript
// ✅ Good - Uses data-testid
const button = screen.getByTestId("toolbar-button");

// ❌ Bad - Uses class selectors
const button = document.querySelector('.toolbar-btn');
```

### 2. Testing Element Types
```typescript
// ✅ Good - Tests semantic element type
expect(button.tagName).toBe("BUTTON");
expect(link.tagName).toBe("A");

// ❌ Bad - Tests specific classes
expect(button).toHaveClass('btn-default');
```

### 3. Testing Behavior, Not Content
```typescript
// ✅ Good - Tests that aria-label is set
expect(button).toHaveAttribute("aria-label", "Button Name");

// ❌ Bad - Tests hardcoded visible text
expect(button).toHaveTextContent("Click Here");
```

### 4. Testing State Changes
```typescript
// ✅ Good - Tests behavioral state through interactions
await user.click(button);
expect(testState.clickCount).toBe(1);

// ❌ Bad - Tests internal component state directly
expect(component.state.clicked).toBe(true);
```

### 5. Testing Context Integration
```typescript
// ✅ Good - Tests that context affects behavior
render(ToolbarWithGroup);
const toolbar = screen.getByRole("toolbar");
// Context should cause separators to show
```

## What is NOT Tested

These tests intentionally avoid:
- ❌ Testing specific CSS classes (implementation detail)
- ❌ Testing exact text content (too brittle)
- ❌ Testing internal component structure (implementation detail)
- ❌ Testing specific style values (implementation detail)
- ❌ Testing toolbar context internal state directly

## Context Testing Notes

The ToolbarGroup component sets a context value (`separators: true`) when rendered. While we don't test the context directly, we verify that:
1. The group renders correctly
2. The group has the correct data attributes
3. The group contains its child buttons

The context mechanism is tested indirectly through integration tests where the visual effect of separators can be observed in the rendered output.

## Future Enhancements

Potential areas for additional testing:
- [ ] Keyboard navigation between toolbar buttons (Tab, Arrow keys)
- [ ] Focus management and focus indicators
- [ ] Disabled state for ToolbarButton
- [ ] Integration tests with Toolbar + ToolbarGroup + ToolbarButton
- [ ] Context separator visual effect testing
- [ ] RTL (right-to-left) layout support
- [ ] Mobile responsiveness behavior
- [ ] Custom classes prop on ToolbarGroup

## Dependencies

- `@testing-library/svelte` - Component rendering and querying
- `@testing-library/user-event` - User interaction simulation
- `vitest` - Test runner and assertions

## Notes

- All tests clean up after each test using `afterEach(cleanup)`
- Tests use `userEvent` for realistic user interactions
- State management uses Svelte 5 runes (`$state`, `$effect`)
- Module-level state exports enable testing of internal state changes
- Button vs Link rendering is determined by presence of `href` prop
- Screen reader support is tested through sr-only spans and aria-label attributes
