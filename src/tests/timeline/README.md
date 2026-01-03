# Timeline Component Tests

This directory contains comprehensive unit tests for the Timeline components in the Flowbite Svelte library.

## Test Files

### Main Test Suite
- **Timeline.test.ts** - Main test suite with 100+ test cases

### Test Fixtures (*.test.svelte)
- **basic-timeline.test.svelte** - Basic timeline with default order
- **vertical-timeline.test.svelte** - Vertical timeline layout
- **horizontal-timeline.test.svelte** - Horizontal timeline layout
- **activity-order-timeline.test.svelte** - Activity order variant
- **activity-timeline.test.svelte** - Activity component with ActivityItem
- **group-timeline.test.svelte** - Group component with GroupItem
- **color-timeline.test.svelte** - All color variants (primary, green, orange, red, blue, purple, gray)
- **date-format-timeline.test.svelte** - Date formatting options (year, month-year, full-date)
- **date-prefix-timeline.test.svelte** - Custom date prefixes
- **custom-class-timeline.test.svelte** - Custom CSS classes

## Components Covered

### Timeline Component
- Container element structure
- Order variants (default, vertical, horizontal, activity)
- Data attributes (data-scope, data-part)
- Semantic HTML (ordered list)

### TimelineItem Component
- Title and date rendering
- Date formatting (year, month-year, full-date)
- Date prefix support
- Color variants (primary, green, orange, red, blue, purple, gray)
- Connector lines (visible on vertical/activity, hidden on last item)
- Indicator dots and icons
- Custom CSS classes
- isLast prop behavior

### Activity Component
- Container structure
- Data attributes
- Semantic list element

### ActivityItem Component
- Multiple activities rendering
- Image display with alt text
- Card structure
- Header and time elements
- Text content rendering

### Group Component
- Multiple groups support
- Date display
- List container structure

### GroupItem Component
- Timeline items with images
- Link navigation
- Privacy status badges (public/private)
- Status icons
- Comment display

## Test Categories

### 1. Basic Functionality (7 tests)
- Container rendering
- Data attributes
- Multiple items
- Titles and dates
- Semantic structure

### 2. Order Variants (11 tests)
- Vertical timeline
- Horizontal timeline
- Activity order
- Indicators and icons
- Connector behavior

### 3. Color Variants (3 tests)
- All seven color options
- Indicator rendering
- Color application

### 4. Date Formatting (4 tests)
- Year-only format
- Month-year format
- Full date format
- Datetime attributes

### 5. Date Prefix (3 tests)
- Custom prefix rendering
- Prefix positioning
- Multiple prefixes

### 6. Activity Component (8 tests)
- Container structure
- Item rendering
- Image display
- Card structure
- Headers and time

### 7. Group Component (10 tests)
- Multiple groups
- Time display
- List containers
- Link navigation
- Privacy badges
- Status icons

### 8. Custom Classes (3 tests)
- Timeline classes
- Item classes
- Part-specific classes

### 9. Connector Behavior (2 tests)
- Vertical connectors
- Last item behavior

### 10. Accessibility (8 tests)
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Alt text for images
- Time elements
- Link accessibility

### 11. Edge Cases (4 tests)
- Single items
- Invalid dates
- Empty arrays
- Missing data

### 12. Structure (4 tests)
- Item ordering
- List elements
- Component hierarchy

## Testing Principles Applied

### ✅ Behavior and Functionality Only
- Tests focus on component behavior, not implementation details
- Validates rendered output and user-visible features
- Checks data attributes that define component roles

### ✅ No Hard-coded Text
- Tests avoid checking for specific text content
- Uses data-testid attributes for element selection
- Validates structure and behavior, not exact wording

### ✅ Data Attributes Over Classes
- Primarily uses `data-testid` for element selection
- Validates `data-scope` and `data-part` attributes
- Avoids fragile class-based selectors

### ✅ Proper TypeScript Types
- No `any` types used
- Imports proper types from `$lib/types`
- Type-safe test fixtures

## Running Tests

```bash
# Run all timeline tests
npm test timeline

# Run with coverage
npm test timeline -- --coverage

# Run in watch mode
npm test timeline -- --watch
```

## Test Coverage

The test suite covers:
- ✅ All 6 timeline components
- ✅ All order variants (default, vertical, horizontal, activity)
- ✅ All color variants (7 colors)
- ✅ All date formats (3 formats)
- ✅ Custom classes and styling
- ✅ Date prefix functionality
- ✅ Connector line behavior
- ✅ Privacy status indicators
- ✅ Image rendering
- ✅ Link navigation
- ✅ Accessibility features
- ✅ Edge cases and error handling

## Key Features Tested

### TimelineItem
- ✅ Date formatting with Intl.DateTimeFormat
- ✅ Date prefix customization
- ✅ Color variants with proper indicators
- ✅ Connector lines (shown/hidden based on position and order)
- ✅ Custom CSS classes for all parts
- ✅ Icon rendering in vertical/horizontal modes
- ✅ Dot rendering in default mode

### ActivityItem
- ✅ Multiple activities from array
- ✅ Image display with proper alt text
- ✅ Card structure for each activity
- ✅ Time display
- ✅ Optional text content

### GroupItem
- ✅ Multiple timeline items from array
- ✅ Privacy status (public/private)
- ✅ Status icons (globe/eye-slash)
- ✅ Link navigation with href
- ✅ Optional comments

## Notes

- All tests follow the project's testing conventions
- Tests use the same patterns as existing component tests
- Each test is independent and can run in isolation
- Tests clean up after themselves using afterEach(cleanup)
- Test fixtures are in separate .svelte files for clarity
