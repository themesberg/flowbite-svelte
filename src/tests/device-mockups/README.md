# Device Mockups Component Tests

## Overview
Comprehensive unit tests for all device mockup components in the Flowbite Svelte library.

## Test Structure

### Main Test File
- `device-mockups.test.ts` - Contains all test assertions and test suites

### Helper Components

#### DeviceMockup Component Tests
- `basic-device-mockup.test.svelte` - Default device mockup (no device prop)
- `device-mockup-android.test.svelte` - Android device variant
- `device-mockup-ios.test.svelte` - iOS device variant
- `device-mockup-tablet.test.svelte` - Tablet device variant
- `device-mockup-smartwatch.test.svelte` - Smartwatch device variant
- `device-mockup-laptop.test.svelte` - Laptop device variant
- `device-mockup-desktop.test.svelte` - Desktop device variant

#### Individual Component Tests
- `basic-android.test.svelte` - Direct Android component usage
- `basic-ios.test.svelte` - Direct iOS component usage
- `basic-default-mockup.test.svelte` - Direct DefaultMockup component usage
- `basic-tablet.test.svelte` - Direct Tablet component usage
- `basic-desktop.test.svelte` - Direct Desktop component usage
- `basic-laptop.test.svelte` - Direct Laptop component usage
- `basic-smartwatch.test.svelte` - Direct Smartwatch component usage

#### Custom Props Tests
- `android-with-class.test.svelte` - Android with custom class prop
- `ios-with-classes.test.svelte` - iOS with custom classes prop
- `mockup-with-attributes.test.svelte` - Component with custom data attributes

## Test Coverage

### DeviceMockup Component (8 tests)
✅ Default device rendering (when no device prop provided)
✅ Android device selection
✅ iOS device selection
✅ Tablet device selection
✅ Smartwatch device selection
✅ Laptop device selection
✅ Desktop device selection
✅ Children content rendering

### Android Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with device elements (5 button divs + slot)
✅ Custom class prop

### iOS Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with device elements (4 button divs + slot)
✅ Custom classes prop for slot and elements

### DefaultMockup Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with device elements (4 button divs + slot)
✅ Custom data attributes and aria labels

### Tablet Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with device elements (4 button divs + slot)

### Desktop Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with multiple divs (base, inner, bot, botUnder)

### Laptop Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with screen and base elements

### Smartwatch Component (2 tests)
✅ Basic rendering with content
✅ Proper structure with watch elements (base, top, buttons, slot)

### Integration Tests (2 tests)
✅ All device mockups render without errors
✅ DeviceMockup dynamically switches between device types

**Total: 24 test cases covering all device mockup components**

## Component Structure Details

### Android
- **Elements**: top, leftTop, leftMid, leftBot, right, slot
- **Props**: children, class, classes, ...restProps

### iOS
- **Elements**: top, leftTop, leftBot, right, slot
- **Props**: children, class, classes, ...restProps

### DefaultMockup
- **Elements**: top, leftTop, leftBot, right, slot
- **Props**: children, class, classes, ...restProps

### Tablet
- **Elements**: leftTop, leftMid, leftBot, right, slot
- **Props**: children, class, classes, ...restProps

### Desktop
- **Elements**: base (with inner content), bot, botUnder
- **Props**: children, class, classes, ...restProps

### Laptop
- **Elements**: wrapper > base > inner, bot > botCen
- **Props**: children, class, classes, ...restProps

### Smartwatch
- **Elements**: wrapper > base, top (rightTop, rightBot, slot), bot
- **Props**: children, class, classes, ...restProps

### DeviceMockup (Wrapper)
- **Props**: device (default|android|ios|tablet|smartwatch|laptop|desktop), children
- **Behavior**: Dynamically loads the appropriate device component

## Running the Tests

### Run All Device Mockup Tests
```bash
pnpm test:unit -- device-mockups
```

### Run All Unit Tests
```bash
pnpm test:unit
```

### Run in Watch Mode
```bash
pnpm test:unit -- --watch
```

### Run with Coverage
```bash
pnpm test:unit -- --coverage
```

## Test Patterns Used

### 1. Separation of Concerns
- Test logic in `.test.ts` file
- Component usage in `.test.svelte` helper files
- Makes tests more readable and maintainable

### 2. Component Structure Testing
- Verifies proper DOM structure
- Checks for expected number of child elements
- Ensures device-specific elements are present

### 3. Props Testing
- Custom class names
- Custom classes object
- Data attributes and ARIA labels
- Rest props spreading

### 4. Content Rendering
- Children content is properly rendered
- Content appears in the correct slot

### 5. Integration Testing
- All components render without errors
- Dynamic component switching works correctly

## Adding More Tests

To add new test cases:

1. **Create a helper component** (`.test.svelte`):
   ```svelte
   <script lang="ts">
     import Android from "$lib/device-mockups/Android.svelte";
   </script>
   
   <Android data-testid="new-test">
     <div>New test content</div>
   </Android>
   ```

2. **Import and test in main file**:
   ```typescript
   import NewTest from "./new-test.test.svelte";
   
   test("new test case", () => {
     render(NewTest);
     const element = screen.getByTestId("new-test");
     expect(element).toBeInTheDocument();
   });
   ```

## Known Behaviors

1. **Dynamic Component Loading**: DeviceMockup uses a component map to dynamically load the correct device component based on the `device` prop

2. **Children Rendering**: All components use Svelte 5's `{@render children()}` syntax for content projection

3. **Theming**: Components use the `getTheme()` utility and merge custom classes with theme classes

4. **Structure Variations**: Different devices have different DOM structures based on their physical appearance (buttons, stands, etc.)

## Testing Technology

- **Vitest** - Fast unit test framework
- **@testing-library/svelte** - Svelte component testing utilities
- **Playwright** - Browser automation for realistic DOM testing

## Next Steps

Consider adding tests for:
- [ ] Theme customization
- [ ] Responsive behavior
- [ ] Edge cases (empty content, very long content)
- [ ] Accessibility features
- [ ] Multiple device mockups on the same page
