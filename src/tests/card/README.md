# Unit Tests for Card Component

## Overview
This directory contains comprehensive unit tests for the Card component in Flowbite Svelte. The tests cover all component features including rendering, layouts, styling, images, and accessibility.

## Test Files Structure

### Helper Components
- `basic-card.test.svelte` - Basic card with default settings
- `card-link.test.svelte` - Card as a clickable link
- `card-with-image.test.svelte` - Card with image
- `card-sizes.test.svelte` - All size variants (xs, sm, md, lg, xl)
- `card-shadows.test.svelte` - All shadow variants (xs, sm, normal, md, lg, xl, 2xl, inner)
- `card-hoverable.test.svelte` - Card with hover effects
- `card-horizontal.test.svelte` - Horizontal layout card
- `card-reverse.test.svelte` - Reversed layout (image at bottom)
- `card-horizontal-reverse.test.svelte` - Horizontal layout with image on right
- `card-custom-class.test.svelte` - Card with custom CSS classes
- `card-image-error.test.svelte` - Card with invalid image URL (error handling)
- `card-custom-image-class.test.svelte` - Card with custom image classes

### Main Test Suite
- `card.test.ts` - Comprehensive test suite with all assertions

## Test Coverage

### Basic Rendering (3 tests)
- ✅ Renders basic card with content
- ✅ Applies proper base classes
- ✅ Renders children content correctly

### Link Behavior (2 tests)
- ✅ Renders as anchor tag when href is provided
- ✅ Applies proper link classes

### Image Functionality (4 tests)
- ✅ Renders card with image
- ✅ Image has proper classes and attributes
- ✅ Handles image loading errors gracefully
- ✅ Applies custom image classes

### Size Variants (2 tests)
- ✅ Renders all size variants (xs, sm, md, lg, xl)
- ✅ Applies correct max-width classes

### Shadow Variants (2 tests)
- ✅ Renders all shadow variants (xs, sm, normal, md, lg, xl, 2xl, inner)
- ✅ Applies correct shadow classes

### Hoverable State (2 tests)
- ✅ Renders hoverable card
- ✅ Applies hover effect classes

### Layout Variants (7 tests)
- ✅ Horizontal layout
- ✅ Horizontal flex direction classes
- ✅ Reversed layout
- ✅ Reversed flex direction classes
- ✅ Horizontal reversed combination
- ✅ Horizontal reversed flex direction classes
- ✅ Horizontal image sizing

### Custom Styling (2 tests)
- ✅ Applies custom classes
- ✅ Preserves essential classes with custom classes

### Accessibility (4 tests)
- ✅ Card content is readable
- ✅ Card links have proper href attributes
- ✅ Images have alt attributes
- ✅ Images have lazy loading

### Component Structure (3 tests)
- ✅ Renders as div when no href
- ✅ Renders as anchor when href provided
- ✅ Maintains proper hierarchy with image and content

### Props Integration (2 tests)
- ✅ Multiple props work together
- ✅ All layout options combined

## Total Test Count: 33 tests

## Running the Tests

### Run All Card Tests
```bash
pnpm test:unit -- card
```

### Run Tests in Watch Mode
```bash
pnpm test:unit -- --watch card
```

### Run with Coverage
```bash
pnpm test:unit -- --coverage card
```

## Card Component Features Tested

### Props
- ✅ `children` - Card content
- ✅ `hoverable` - Hover effects (default: false)
- ✅ `horizontal` - Horizontal layout (default: false)
- ✅ `shadow` - Shadow size (default: "md")
- ✅ `reverse` - Reverse layout (default: false)
- ✅ `img` - Image source URL
- ✅ `size` - Card size (default: "sm")
- ✅ `class` - Custom CSS classes
- ✅ `classes` - Custom classes object for slots
- ✅ `href` - Makes card a link

### Variants Tested

**Sizes:**
- xs (max-w-xs)
- sm (max-w-sm) - default
- md (max-w-lg)
- lg (max-w-2xl)
- xl (max-w-none)

**Shadows:**
- xs (shadow-xs)
- sm (shadow-sm)
- normal (shadow)
- md (shadow-md) - default
- lg (shadow-lg)
- xl (shadow-xl)
- 2xl (shadow-2xl)
- inner (shadow-inner)

**Layouts:**
- Default (flex-col)
- Horizontal (md:flex-row)
- Reverse (flex-col-reverse)
- Horizontal + Reverse (md:flex-row-reverse)

### Component Behavior

**Conditional Rendering:**
- Without `href`: Renders as `<div>`
- With `href`: Renders as `<a>` (link)

**Image Handling:**
- Supports lazy loading
- Handles errors gracefully (hides broken images)
- Responsive sizing in horizontal layouts
- Custom classes via `classes.image`

**Styling:**
- Base classes always applied
- Custom classes merged with base classes
- Theme support via `getTheme()`
- Tailwind variant classes applied based on props

## Testing Patterns

### Pattern: Helper Components + Main Test Suite
Each test scenario has a dedicated `.test.svelte` helper component that sets up the component with specific props. The main `card.test.ts` file imports these helpers and runs assertions.

**Benefits:**
1. Clear separation of setup (Svelte) and assertions (TypeScript)
2. Reusable test components
3. Easy to add new test scenarios
4. Maintains readability in test file

### Example Pattern
```typescript
// Import helper
import BasicCardTest from "./basic-card.test.svelte";

// Render and test
test("renders basic card", () => {
  const { container } = render(BasicCardTest);
  const card = container.querySelector("div");
  expect(card).toBeInTheDocument();
});
```

## Adding New Tests

### To add a new test scenario:

1. **Create a helper component** (`[scenario-name].test.svelte`):
```svelte
<script lang="ts">
  import Card from "$lib/card/Card.svelte";
</script>

<Card [your-props]>
  Your content
</Card>
```

2. **Import in `card.test.ts`**:
```typescript
import YourScenarioTest from "./[scenario-name].test.svelte";
```

3. **Add test case**:
```typescript
test("your test description", () => {
  const { container } = render(YourScenarioTest);
  // Your assertions
});
```

## Key Testing Considerations

### Image Error Handling
The Card component includes error handling for broken images:
```javascript
onerror={(e) => {
  const target = e.currentTarget as HTMLImageElement;
  if (target) {
    target.style.display = "none";
  }
}}
```

Tests verify this by dispatching an error event and checking `display: none`.

### Conditional Rendering
Tests verify the component renders different root elements:
- `<div>` when no href
- `<a>` when href is provided

### Layout Combinations
Tests ensure compound variants work correctly:
- Horizontal + Reverse
- Size + Shadow + Hoverable

### Accessibility
Tests verify:
- Link href attributes (navigation testing is better suited for e2e tests)
- Alt attributes on images
- Lazy loading attributes
- Content readability

## Technology Stack

- **Vitest** - Fast unit test framework
- **@testing-library/svelte** - Component testing utilities
- **@testing-library/user-event** - User interaction simulation
- **Playwright** - Browser automation for realistic testing

## Next Steps

Potential areas for additional testing:
- [ ] Theme customization tests
- [ ] Color variant tests (if href is present)
- [ ] Rest props spreading verification
- [ ] Performance tests for large lists of cards
- [ ] Visual regression tests (consider Storybook)
