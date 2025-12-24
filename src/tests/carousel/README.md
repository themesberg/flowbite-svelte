# Carousel Component Tests

This directory contains comprehensive unit tests for the Carousel components in Flowbite Svelte.

## Test Files

### Main Test Files
- **Carousel.test.ts** - Tests for the main Carousel component
- **Thumbnails.test.ts** - Tests for the Thumbnails component
- **Controls.test.ts** - Tests for the Controls component
- **CarouselIndicators.test.ts** - Tests for the CarouselIndicators component

### Test Helper Files
Test helper Svelte files are used to render specific configurations:
- `basic-carousel.test.svelte` - Basic carousel without any additional features
- `carousel-with-controls.test.svelte` - Carousel with navigation controls
- `carousel-with-indicators.test.svelte` - Carousel with slide indicators
- `carousel-with-thumbnails.test.svelte` - Carousel with thumbnail navigation
- `carousel-autoplay.test.svelte` - Carousel with autoplay enabled
- `carousel-no-swipe.test.svelte` - Carousel with swipe disabled
- `carousel-custom-class.test.svelte` - Carousel with custom CSS classes
- `carousel-onchange.test.svelte` - Carousel with change event handler

### Test Data
- **testData.ts** - Contains mock image data used across all tests

## Test Coverage

### Carousel Component
- ✅ Basic rendering and structure
- ✅ Controls integration
- ✅ Indicators integration
- ✅ Thumbnails integration
- ✅ Autoplay functionality
- ✅ Swipe enable/disable
- ✅ Custom classes
- ✅ Event callbacks (onchange)
- ✅ Accessibility features (ARIA labels, keyboard navigation)

### Thumbnails Component
- ✅ Basic rendering
- ✅ Selection state management
- ✅ User interactions
- ✅ Custom properties (ariaLabel, classes)
- ✅ Edge cases (empty array, single item, out of bounds)

### Controls Component
- ✅ Basic rendering
- ✅ Button positioning (left/right)
- ✅ User interactions
- ✅ Accessibility

### CarouselIndicators Component
- ✅ Basic rendering
- ✅ Correct number of indicators
- ✅ Selection state
- ✅ User interactions
- ✅ Positioning (top/bottom)
- ✅ Accessibility (ARIA attributes)

## Running Tests

Run all carousel tests:
```bash
npm test src/tests/carousel
```

Run a specific test file:
```bash
npm test src/tests/carousel/Carousel.test.ts
```

Run tests in watch mode:
```bash
npm test -- --watch src/tests/carousel
```

## Test Pattern

The tests follow the project's established patterns:

1. **Test Helper Files**: Each test scenario has a corresponding `.test.svelte` file
2. **Main Test Files**: Import and render the helper files, then assert expected behavior
3. **Cleanup**: Each test suite uses `afterEach(cleanup)` to reset the DOM
4. **User Interactions**: Uses `@testing-library/user-event` for realistic user interactions
5. **Accessibility**: Tests include checks for ARIA attributes and keyboard navigation

## Adding New Tests

When adding new carousel features:

1. Create a new `.test.svelte` helper file for the feature
2. Add test cases to the appropriate `.test.ts` file
3. Update this README with the new coverage
4. Ensure tests follow existing patterns and conventions

## Notes

- Tests use mock image data from `testData.ts`
- All tests are designed to be isolated and not affect each other
- Tests check both functionality and accessibility
- Edge cases are covered for robust component behavior
