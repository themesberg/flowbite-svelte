# Unit Tests for Avatar, Badge, and Banner Components

## Created Test Files

### Avatar Tests (`src/tests/avatar/`)

**Helper Components:**
- `basic-avatar.test.svelte` - Default avatar with SVG placeholder
- `avatar-with-image.test.svelte` - Avatar with image source
- `avatar-with-dot.test.svelte` - Avatar with dot indicator
- `avatar-link.test.svelte` - Avatar as a clickable link
- `avatar-with-border.test.svelte` - Avatar with border styling
- `avatar-sizes.test.svelte` - Different size variants (xs, sm, md, lg, xl)
- `avatar-squared.test.svelte` - Squared corner style variant

**Test Suite (`avatar.test.ts`):**
- ✅ Basic rendering with SVG placeholder
- ✅ Rendering with image source (standalone img tag)
- ✅ Dot indicator functionality
- ✅ Link behavior (renders as `<a>` tag)
- ✅ Border styling
- ✅ Corner styles (circular vs squared)
- ✅ Different size variants
- ✅ Accessibility (alt text)

**Note:** Avatar renders differently based on props:
- **With only `src`**: Renders as standalone `<img>` tag
- **With `href`, `dot`, `indicator`, or `children`**: Renders wrapped in div/a with role="button"

### Badge Tests (`src/tests/badge/`)

**Helper Components:**
- `basic-badge.test.svelte` - Default badge
- `dismissable-badge.test.svelte` - Badge with close button
- `badge-link.test.svelte` - Badge as a link
- `large-badge.test.svelte` - Large size variant
- `badge-colors.test.svelte` - Different color variants
- `badge-border.test.svelte` - Badge with border

**Test Suite (`badge.test.ts`):**
- ✅ Basic rendering with text content
- ✅ Large size variant
- ✅ Different color variants
- ✅ Border styling
- ✅ Link behavior (renders with `<a>` tag inside)
- ✅ Dismissable functionality with close button
- ✅ Close event dispatch
- ✅ Accessibility (aria-labels)

### Banner Tests (`src/tests/banner/`)

**Helper Components:**
- `basic-banner.test.svelte` - Default dismissable banner
- `non-dismissable-banner.test.svelte` - Banner without close button
- `banner-colors.test.svelte` - Different color variants
- `banner-closed.test.svelte` - Banner with open=false (not visible)

**Test Suite (`banner.test.ts`):**
- ✅ Basic rendering with content
- ✅ Different color variants
- ✅ Visibility control (open prop)
- ✅ Dismissable functionality (default true)
- ✅ Non-dismissable variant
- ✅ Close button interaction
- ✅ Close event dispatch
- ✅ Accessibility (tabindex, aria-labels)
- ✅ Component structure (inner div, close container)

## Running the Tests

### Run All Unit Tests
```bash
pnpm test:unit
```

### Run Tests in Watch Mode
```bash
pnpm test:unit -- --watch
```

### Run Only Avatar Tests
```bash
pnpm test:unit -- avatar
```

### Run Only Badge Tests
```bash
pnpm test:unit -- badge
```

### Run Only Banner Tests
```bash
pnpm test:unit -- banner
```

### Run with Coverage
```bash
pnpm test:unit -- --coverage
```

## Test Structure Pattern

Each component follows this pattern:

```
src/tests/[component]/
├── [component].test.ts           # Main test file with assertions
├── basic-[component].test.svelte # Helper: basic usage
├── [variant1].test.svelte        # Helper: specific variant
└── [variant2].test.svelte        # Helper: another variant
```

**Benefits:**
1. **Separation of Concerns**: Test logic (`.test.ts`) separate from component usage (`.test.svelte`)
2. **Reusability**: Helper components can be used in multiple tests
3. **Readability**: Tests focus on assertions, not component setup
4. **Maintainability**: Changes to component API only affect helper files

## Test Coverage Summary

### Avatar Component Coverage (11 tests)
- Default rendering (no src) ✅
- Image rendering (with src) ✅
- Link mode (with href) ✅
- Indicator/dot functionality ✅
- Size variants ✅
- Corner styles ✅
- Border styling ✅
- Accessibility ✅

### Badge Component Coverage (10 tests)
- Basic rendering ✅
- Link mode ✅
- Dismissable functionality ✅
- Size variants ✅
- Color variants ✅
- Border styling ✅
- Event handling ✅
- Accessibility ✅

### Banner Component Coverage (12 tests)
- Basic rendering ✅
- Color variants ✅
- Visibility control (open prop) ✅
- Dismissable functionality ✅
- Non-dismissable variant ✅
- Close button interaction ✅
- Event handling ✅
- Accessibility ✅
- Component structure ✅

**Total: 33 test cases across 3 components**

## Next Steps

### To Add More Tests:
1. Create a new `.test.svelte` helper component with your use case
2. Import it in the main `.test.ts` file
3. Add test assertions using `@testing-library/svelte` and `vitest`

### Example - Adding Avatar Click Test:

**Create `avatar-clickable.test.svelte`:**
```svelte
<script lang="ts">
  import Avatar from "$lib/avatar/Avatar.svelte";
  
  let clicked = $state(false);
  const handleClick = () => { clicked = true; };
</script>

<Avatar onclick={handleClick} alt="Clickable avatar" />
```

**Add to `avatar.test.ts`:**
```typescript
import AvatarClickableTest from "./avatar-clickable.test.svelte";

test("handles click events", async () => {
  const user = userEvent.setup();
  render(AvatarClickableTest);
  
  const button = screen.getByRole("button");
  await user.click(button);
  
  // Add your assertions
});
```

## Important Notes

### Avatar Component Behavior
The Avatar component has conditional rendering:
- **Standalone image**: When only `src` is provided (renders as `<img>`)
- **Wrapped image**: When `href`, `dot`, `indicator`, or `children` are provided (renders with wrapper)

This affects how you query elements in tests:
```typescript
// For standalone image
const img = screen.getByRole("img");

// For wrapped image
const wrapper = screen.getByRole("button"); // or "link" if href
const img = wrapper.querySelector("img");
```

### Banner Component Transitions
Banners use transitions when opening/closing. Tests may need small delays when testing dismiss functionality:
```typescript
await user.click(closeButton);
await new Promise(resolve => setTimeout(resolve, 100));
// Now check if banner is removed
```

## Continuous Integration

These tests will run automatically:
- On every commit (if configured in CI)
- Before building the package
- As part of the `pnpm test` command

## Testing Technology Stack

- **Vitest** - Fast unit test framework
- **@testing-library/svelte** - Svelte component testing utilities
- **Playwright** - Browser automation for realistic DOM testing
- **@testing-library/user-event** - Simulates user interactions
- **@testing-library/jest-dom** - Custom matchers for DOM assertions
