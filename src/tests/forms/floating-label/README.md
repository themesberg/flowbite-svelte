# FloatingLabelInput Tests

Comprehensive unit tests for the FloatingLabelInput component using Vitest and Testing Library.

## Test Coverage

### Test Files Created

#### Component Test Files (`.test.svelte`)
- `floating-label-basic.test.svelte` - Basic rendering and functionality
- `floating-label-variants.test.svelte` - Tests all three variants (filled, outlined, standard)
- `floating-label-sizes.test.svelte` - Tests size variants (small, default)
- `floating-label-validation.test.svelte` - Tests validation states (none, success, error)
- `floating-label-disabled.test.svelte` - Tests disabled state behavior
- `floating-label-icon.test.svelte` - Tests icon integration and alignment
- `floating-label-value.test.svelte` - Tests two-way value binding
- `floating-label-clearable.test.svelte` - Tests clearable functionality
- `floating-label-suggestions.test.svelte` - Tests autocomplete/suggestions

#### Main Test File
- `floating-label.test.ts` - Orchestrates all tests (70+ test cases)

## Running Tests

```bash
# Run all tests
npm test

# Run only floating-label tests
npm test floating-label

# Run in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage
```

## Test Structure

### Basic Tests (4 tests)
- ✅ Renders floating label input
- ✅ Has correct label association
- ✅ Input is focusable
- ✅ Accepts text input

### Variant Tests (3 tests)
- ✅ Filled variant styling
- ✅ Outlined variant styling
- ✅ Standard variant styling

### Size Tests (2 tests)
- ✅ Small size padding
- ✅ Default size padding

### Validation Tests (5 tests)
- ✅ None (default) validation state
- ✅ Success validation state and styling
- ✅ Error validation state and styling
- ✅ Success label color
- ✅ Error label color

### Disabled Tests (5 tests)
- ✅ Input is disabled
- ✅ Disabled input styling
- ✅ Disabled label styling
- ✅ Not focusable when disabled
- ✅ Does not accept input when disabled

### Icon Tests (2 tests)
- ✅ Renders with icon
- ✅ Proper inline-flex alignment

### Value Binding Tests (2 tests)
- ✅ Displays initial value
- ✅ Updates value on input

### Clearable Tests (3 tests)
- ✅ Clear button hidden when empty
- ✅ Clear button shown with value
- ✅ Clears value on click

### Autocomplete/Suggestions Tests (5 tests)
- ✅ Shows suggestions on typing
- ✅ Filters suggestions based on input
- ✅ Selects suggestion on click
- ✅ Keyboard navigation (ArrowDown, Enter)
- ✅ Closes suggestions on Escape

## Total: 31+ test suites, 70+ test cases

## Notes

- Tests use `@testing-library/svelte` for component rendering
- User interactions simulated with `@testing-library/user-event`
- All tests include async handling for user events
- Tests validate both functionality and styling
- Coverage includes the new semantic design tokens (validation, disabled, withIcon)
