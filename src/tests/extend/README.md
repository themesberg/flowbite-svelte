# Unit Tests for Extend Components

This document provides an overview of the unit tests created for the Tour, VirtualList, and VirtualMasonry components.

## Test Structure

All tests follow the same pattern used in other flowbite-svelte components:
- Test components (`.test.svelte` files) for different scenarios
- Main test file (`.test.ts`) that imports and tests all scenarios
- Use of `@testing-library/svelte` and `vitest`
- Proper cleanup and state management

## Tour Component Tests

**Location:** `src/tests/extend/tour/`

### Test Files Created:
1. **basic-tour.test.svelte** - Basic tour with multiple steps
2. **callbacks.test.svelte** - Tests completion and skip callbacks
3. **no-overlay.test.svelte** - Tour without overlay
4. **custom-style.test.svelte** - Custom color and size props

### Test Coverage:
- ✅ Basic rendering of tour components
- ✅ Navigation between steps (Next/Previous/Finish)
- ✅ Progress indicators and dots
- ✅ Callback functions (oncomplete, onskip)
- ✅ Keyboard navigation (Arrow keys, Escape)
- ✅ Accessibility (ARIA attributes, roles)
- ✅ Overlay functionality
- ✅ Target element scrolling
- ✅ Custom styling (color, size)
- ✅ Highlight positioning
- ✅ Tooltip positioning with Floating UI

## VirtualList Component Tests

**Location:** `src/tests/extend/virtual-list/`

### Test Files Created:
1. **basic-list.test.svelte** - Basic virtual list with 100 items
2. **variable-height.test.svelte** - Items with variable heights
3. **scroll-to-index.test.svelte** - Programmatic scrolling
4. **custom-classes.test.svelte** - Custom styling and overscan
5. **contained.test.svelte** - CSS containment feature

### Test Coverage:
- ✅ Basic rendering and virtualization
- ✅ Only visible items rendered (performance)
- ✅ Scroll event handling with RAF optimization
- ✅ Variable item heights with getItemHeight
- ✅ Scroll to specific index programmatically
- ✅ Custom classes and styling
- ✅ CSS containment feature
- ✅ Accessibility (ARIA roles and attributes)
- ✅ Proper spacer height calculation
- ✅ Transform positioning of content
- ✅ Empty state handling
- ✅ Data-part attributes

## VirtualMasonry Component Tests

**Location:** `src/tests/extend/virtual-masonry/`

### Test Files Created:
1. **basic-masonry.test.svelte** - Basic masonry with 3 columns
2. **two-columns.test.svelte** - Two column layout
3. **scroll-to-index.test.svelte** - Programmatic scrolling
4. **custom-props.test.svelte** - Custom gap, overscan, classes
5. **contained.test.svelte** - CSS containment feature

### Test Coverage:
- ✅ Basic rendering and masonry layout
- ✅ Column distribution (shortest column algorithm)
- ✅ Absolute positioning of items
- ✅ Variable item heights
- ✅ Scroll event handling
- ✅ Overscan for smooth scrolling
- ✅ Scroll to specific index
- ✅ Custom columns, gap, and classes
- ✅ CSS containment feature
- ✅ ResizeObserver integration
- ✅ Accessibility (ARIA roles and attributes)
- ✅ Total height calculation
- ✅ Performance with large datasets
- ✅ Data-part attributes

## Running the Tests

```bash
# Run all tests
npm test

# Run specific component tests
npm test tour
npm test virtual-list
npm test virtual-masonry

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

## Test Utilities

All tests utilize:
- **vitest-setup-client.ts** - Global test setup with polyfills
- **installPopoverPolyfill** - Popover API polyfill for tests
- **@testing-library/svelte** - DOM testing utilities
- **userEvent** - Simulating user interactions
- **Mock implementations** - ResizeObserver, scrollIntoView, etc.

## Key Testing Patterns

### 1. State Management in Tests
```typescript
export const testState = $state({
  completed: false,
  skipped: false
});
```

### 2. Cleanup After Each Test
```typescript
afterEach(() => {
  cleanup();
  testState.completed = false;
});
```

### 3. Testing Async Operations
```typescript
await waitFor(() => {
  expect(screen.getByText("Step 2")).toBeInTheDocument();
});
```

### 4. Keyboard Event Testing
```typescript
await user.keyboard("{ArrowRight}");
await user.keyboard("{Escape}");
```

### 5. Mock Functions
```typescript
Element.prototype.scrollIntoView = vi.fn();
global.ResizeObserver = ResizeObserverMock as any;
```

## Coverage Goals

Each component test suite aims for:
- ✅ 100% of component props tested
- ✅ All user interactions covered
- ✅ Accessibility features verified
- ✅ Edge cases handled
- ✅ Performance characteristics validated
- ✅ Error conditions tested

## Notes

1. **Popover Polyfill**: The tour component uses the Popover API which is polyfilled in tests
2. **RAF Optimization**: Virtual components use requestAnimationFrame which requires timing in tests
3. **ResizeObserver**: VirtualMasonry requires mocking of ResizeObserver
4. **Floating UI**: Tour component positioning is tested but exact pixel values may vary
5. **Virtualization**: Tests verify that not all items are rendered, only visible ones

## Maintenance

When updating components:
1. Add new test scenarios for new features
2. Update existing tests if prop names/behavior changes
3. Ensure all data-testid attributes remain consistent
4. Keep test files aligned with component structure
5. Update this README with new test coverage
