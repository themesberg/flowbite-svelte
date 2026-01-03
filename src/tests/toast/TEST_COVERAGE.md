# Toast Component Tests

## Overview
This directory contains comprehensive unit tests for the Toast and ToastContainer components from the Flowbite Svelte library.

## Test Philosophy
These tests follow the principle of **testing behavior, not implementation**:
- ✅ Tests focus on how components behave from a user's perspective
- ✅ Tests use data attributes (`data-testid`, `data-scope`, `data-part`) for element selection
- ✅ Tests avoid hardcoded text where possible to prevent brittleness
- ✅ Tests use specific TypeScript types instead of `any`

## Components Tested

### Toast.svelte
The main toast notification component.

#### Test Coverage

##### Basic Rendering
- ✅ Toast renders with correct `role="alert"` for accessibility
- ✅ Toast has correct data attributes (`data-scope="toast"`, `data-part="base"`)
- ✅ Toast content renders correctly

##### Dismissable Prop
- ✅ Dismissable toast shows close button
- ✅ Non-dismissable toast hides close button
- ✅ Close button has correct aria-label

##### Color Variants
- ✅ Primary color variant
- ✅ Success color variant
- ✅ Red color variant
- ✅ Warning color variant
- ✅ Green color variant

##### Position Variants
- ✅ Top-left position
- ✅ Top-right position
- ✅ Bottom-left position
- ✅ Bottom-right position

##### Icon Rendering
- ✅ Toast with icon renders icon container with `data-part="icon"`
- ✅ Toast without icon doesn't render icon container
- ✅ Icon content is properly rendered

##### Close Functionality
- ✅ Clicking close button updates `toastStatus` to false
- ✅ Close event is properly triggered

##### Custom Classes
- ✅ Custom classes are applied to toast element

##### Data Attributes
- ✅ Toast has `data-scope="toast"` and `data-part="base"`
- ✅ Content container has `data-part="content"`
- ✅ Icon container has `data-part="icon"` when present

### ToastContainer.svelte
Container component for positioning toast notifications.

#### Test Coverage

##### Position Variants
- ✅ Top-left position with correct positioning classes
- ✅ Top-right position with correct positioning classes
- ✅ Bottom-left position with correct positioning classes
- ✅ Bottom-right position with correct positioning classes

##### Data Attributes
- ✅ Container has `data-scope="toast-container"` and `data-part="base"`

## Test Files Structure

```
toast/
├── toast.test.ts                      # Main test suite
├── basic-toast.test.svelte            # Basic rendering fixture
├── dismissable-toast.test.svelte      # Dismissable prop fixture
├── color-toast.test.svelte            # Color variants fixture
├── position-toast.test.svelte         # Position variants fixture
├── icon-toast.test.svelte             # Icon rendering fixture
├── close-toast.test.svelte            # Close functionality fixture
├── custom-class-toast.test.svelte     # Custom classes fixture
└── toast-container.test.svelte        # ToastContainer fixture
```

## Running Tests

```bash
# Run all unit tests
npm run test:unit

# Run only toast tests
npm run test:unit toast

# Run tests in watch mode
npm run test:unit -- --watch

# Run tests with coverage
npm run test:unit -- --coverage
```

## Key Testing Patterns

### 1. Using Data Attributes
```typescript
// ✅ Good - Uses data-testid
const toast = screen.getByTestId("custom-toast");

// ❌ Bad - Uses class selectors
const toast = document.querySelector('.toast-class');
```

### 2. Testing Behavior, Not Content
```typescript
// ✅ Good - Tests that close button exists
const closeButton = toast.querySelector('button[aria-label="Remove toast"]');
expect(closeButton).toBeInTheDocument();

// ❌ Bad - Tests hardcoded text
expect(toast).toHaveTextContent("Close");
```

### 3. Testing State Changes
```typescript
// ✅ Good - Tests behavioral state
expect(testState.toastVisible).toBe(false);

// ❌ Bad - Tests DOM class changes
expect(toast).toHaveClass('hidden');
```

### 4. Accessible Element Selection
```typescript
// ✅ Good - Uses semantic roles
const toast = screen.getByRole("alert");

// ✅ Also good - Uses data attributes
const toast = screen.getByTestId("my-toast");
```

## What is NOT Tested

These tests intentionally avoid:
- ❌ Testing specific CSS classes (implementation detail)
- ❌ Testing exact text content (too brittle)
- ❌ Testing internal component structure (implementation detail)
- ❌ Testing animation timing (too flaky)
- ❌ Testing specific style values (implementation detail)

## Future Enhancements

Potential areas for additional testing:
- [ ] Transition parameter testing with different transition functions
- [ ] Keyboard accessibility testing (Escape key to close)
- [ ] Focus management when toast appears/disappears
- [ ] Multiple toast stacking behavior
- [ ] Custom closeButtonProps configuration
- [ ] Theme integration testing

## Dependencies

- `@testing-library/svelte` - Component rendering and querying
- `@testing-library/user-event` - User interaction simulation
- `vitest` - Test runner and assertions

## Notes

- All tests clean up after each test using `afterEach(cleanup)`
- Tests use `userEvent` for realistic user interactions
- State management uses Svelte 5 runes (`$state`, `$effect`)
- Module-level state exports enable testing of internal state changes
