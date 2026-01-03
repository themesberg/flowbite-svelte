# Tooltip and Video Component Tests

## Overview
This directory contains comprehensive unit tests for the Tooltip and Video components from the flowbite-svelte library.

## Test Structure

### Tooltip Tests (`src/tests/tooltip/`)
- **9 component test files** - Each testing specific behaviors
- **1 main test suite** - Orchestrating all test cases
- **1 coverage document** - Detailed test coverage information

### Video Tests (`src/tests/video/`)
- **9 component test files** - Each testing specific functionality
- **1 main test suite** - Orchestrating all test cases
- **1 coverage document** - Detailed test coverage information

## Testing Principles

### ✅ DO: Test Behavior and Functionality
- User interactions (hover, click, focus)
- State changes and prop effects
- Accessibility features
- Component rendering and structure
- Event callbacks and bindings

### ❌ DON'T: Test Implementation Details
- Hard-coded text content (brittle tests)
- CSS class names (implementation detail)
- Internal component structure
- Specific styling values

## Test Patterns

### 1. Data Attribute Selectors
```typescript
// Always use data-testid for element selection
const element = screen.getByTestId("component-name");

// Verify data attributes for component parts
expect(element).toHaveAttribute("data-scope", "tooltip");
expect(element).toHaveAttribute("data-part", "base");
```

### 2. Type Safety
```typescript
// Import specific types
import type { TriggeredToggleEvent } from "$lib/types";

// Never use 'any' type
// ❌ const event: any = ...
// ✅ const event: TriggeredToggleEvent = ...
```

### 3. State Testing
```typescript
// Export test state for verification
export const testState = {
  isOpen: false
};

// Test behavior through state changes
expect(testState.isOpen).toBe(false);
await user.click(trigger);
expect(testState.isOpen).toBe(true);
```

### 4. Accessibility Testing
```typescript
// Verify accessibility features
expect(trigger.tabIndex).toBeGreaterThanOrEqual(0);
expect(track).toHaveAttribute("kind", "captions");
expect(track).toHaveAttribute("srclang", "en");
```

## Tooltip Component Tests

### What We Test
1. **Basic Rendering** - Element presence and structure
2. **Placement Variants** - top, bottom, left, right
3. **Trigger Types** - hover (default), click
4. **Arrow Visibility** - with/without arrow
5. **Type Variants** - dark, light, auto
6. **Color Variants** - primary, blue, red, etc.
7. **Props** - custom class application
8. **State Binding** - isOpen bidirectional binding
9. **Events** - onbeforetoggle callback
10. **Accessibility** - focus management, tabindex

### Test Files
```
tooltip/
├── basic-tooltip.test.svelte
├── placement-tooltip.test.svelte
├── click-trigger-tooltip.test.svelte
├── arrow-tooltip.test.svelte
├── type-tooltip.test.svelte
├── color-tooltip.test.svelte
├── custom-class-tooltip.test.svelte
├── isopen-tooltip.test.svelte
├── event-tooltip.test.svelte
├── tooltip.test.ts
└── TEST_COVERAGE.md
```

## Video Component Tests

### What We Test
1. **Basic Rendering** - video, source, and track elements
2. **Video Attributes** - controls, autoplay, loop, muted
3. **Source Types** - mp4, webm, ogg
4. **Track Attributes** - captions, languages, labels
5. **Props** - custom class, dimensions
6. **Children Snippet** - additional source elements
7. **Accessibility** - caption tracks, language support
8. **Fallback Content** - browser support message

### Test Files
```
video/
├── basic-video.test.svelte
├── controls-video.test.svelte
├── autoplay-video.test.svelte
├── loop-video.test.svelte
├── type-video.test.svelte
├── custom-class-video.test.svelte
├── track-video.test.svelte
├── children-video.test.svelte
├── dimensions-video.test.svelte
├── video.test.ts
└── TEST_COVERAGE.md
```

## Running Tests

```bash
# Run all tests
npm test

# Run tooltip tests only
npm test tooltip

# Run video tests only
npm test video

# Run with coverage
npm test -- --coverage

# Run in watch mode
npm test -- --watch
```

## Test Coverage Summary

### Tooltip Component
- **23 test cases** across 10 categories
- Focus on interaction patterns and accessibility
- State management and event handling

### Video Component
- **30+ test cases** across 8 categories
- Focus on HTML5 video attributes and accessibility
- Multi-format support and caption handling

## Best Practices Applied

1. **No Hard-coded Text** - Tests don't depend on specific text content
2. **Data Attributes** - Consistent use of `data-testid` for element selection
3. **Type Safety** - All variables properly typed, no `any` usage
4. **Behavioral Focus** - Tests verify what users experience, not how it's implemented
5. **Accessibility First** - Comprehensive accessibility feature testing
6. **Maintainable** - Tests remain valid even if styling or text changes

## Future Enhancements

Potential areas for additional test coverage:
- Integration tests with other components
- Performance testing for animations
- Cross-browser compatibility tests
- Extended accessibility testing with screen readers
- Edge case handling (missing props, invalid values)

## References

- [Testing Library Documentation](https://testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Svelte Testing Best Practices](https://svelte.dev/docs/testing)
- [Flowbite-Svelte Documentation](https://flowbite-svelte.com/)
