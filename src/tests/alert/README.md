# Alert Component Tests

This directory contains comprehensive tests for the Alert component.

## Test Files

### Component Test Files (`.test.svelte`)

1. **basic-alert.test.svelte** - Basic alert with default settings
2. **colored-alert.test.svelte** - Alert with danger color variant
3. **dismissable-alert.test.svelte** - Dismissable alert with close button
4. **icon-alert.test.svelte** - Alert with icon snippet
5. **bordered-alert.test.svelte** - Alert with border
6. **hidden-alert.test.svelte** - Alert with alertStatus set to false
7. **custom-close-icon-alert.test.svelte** - Alert with custom close icon
8. **border-accent-alert.test.svelte** - Alert with border accent (border-t-4)
9. **custom-color-alert.test.svelte** - Alert with color="none" and custom classes
10. **close-event-alert.test.svelte** - Alert that tests the close event handler

### Main Test File

**alert.test.ts** - Contains all test suites organized by functionality:

- **Basic Functionality**: Tests default rendering, role, default color classes, and rounded corners
- **Color Variants**: Tests different color options (danger, success, warning, dark, brand)
- **Dismissable Functionality**: Tests close button presence and dismiss behavior
- **Icon Functionality**: Tests icon snippet rendering
- **Border Variant**: Tests border styling
- **Visibility Control**: Tests alertStatus binding
- **Custom Close Icon**: Tests custom close icon component
- **Border Accent**: Tests border accent styling with custom classes
- **Custom Colors**: Tests color="none" with custom Tailwind classes
- **Close Event**: Tests the onclose event handler

## Running Tests

```bash
# Run all tests
pnpm test

# Run alert tests specifically
pnpm test alert

# Run tests in watch mode
pnpm test:watch
```

## Test Coverage

The tests cover:

- ✅ Default rendering and accessibility (role="alert")
- ✅ All color variants (brand, danger, success, warning, dark, none)
- ✅ Dismissable functionality with close button
- ✅ Icon snippet rendering
- ✅ Border and border accent styling
- ✅ Custom styling with color="none"
- ✅ alertStatus binding for visibility control
- ✅ Custom close icon component
- ✅ Close event handling
- ✅ Proper CSS classes application

## Component Props Tested

| Prop | Tested | Description |
|------|--------|-------------|
| `color` | ✅ | All color variants including "none" |
| `dismissable` | ✅ | Close button functionality |
| `alertStatus` | ✅ | Visibility control |
| `border` | ✅ | Border styling |
| `rounded` | ✅ | Rounded corners (default) |
| `icon` | ✅ | Icon snippet |
| `closeIcon` | ✅ | Custom close icon |
| `class` | ✅ | Custom CSS classes |
| `onclose` | ✅ | Close event handler |

## Notes

- All tests use Vitest and Testing Library for Svelte
- Tests follow the Arrange-Act-Assert pattern
- User interactions are tested with @testing-library/user-event
- Tests ensure proper accessibility with role="alert"
- Tests verify both visual styling and behavior
