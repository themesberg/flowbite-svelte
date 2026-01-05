# Command Palette & Kanban Component Tests

This directory contains comprehensive unit tests for the Command Palette and Kanban Board components in the Flowbite Svelte library.

## Test Structure

Both components follow a consistent testing pattern with:
- Main test file (`*.test.ts`) containing all test suites
- Supporting Svelte test files (`*.test.svelte`) for specific scenarios

## Command Palette Tests

### Location
`src/tests/extend/command-palette/`

### Test Files
- `command-palette.test.ts` - Main test suite
- `basic-palette.test.svelte` - Basic rendering scenario
- `open-palette.test.svelte` - Opened state with items
- `filtering-palette.test.svelte` - Search and filtering scenarios
- `keyboard-navigation.test.svelte` - Keyboard navigation testing
- `vim-mode.test.svelte` - Vim-style navigation (j/k keys)
- `empty-state.test.svelte` - Empty state display
- `selection.test.svelte` - Item selection behavior
- `custom-shortcut.test.svelte` - Custom keyboard shortcuts

### Test Coverage

#### Behavioral Tests
- ✅ Dialog open/close functionality
- ✅ Keyboard shortcut triggers (Cmd+K, Ctrl+K)
- ✅ Custom shortcut key support
- ✅ Search input interaction
- ✅ Item filtering by label, description, and keywords
- ✅ Case-insensitive search
- ✅ Empty state display when no results
- ✅ Search clearing on dialog close

#### Keyboard Navigation
- ✅ Arrow key navigation (up/down)
- ✅ Vim-mode navigation (j/k keys)
- ✅ Enter key selection
- ✅ Escape key closing
- ✅ Selection index management
- ✅ Boundary conditions (first/last item)

#### Mouse Interactions
- ✅ Item selection on click
- ✅ Mouse hover highlighting
- ✅ Dialog closing after selection

#### Accessibility
- ✅ ARIA roles (dialog, combobox, listbox, option)
- ✅ ARIA attributes (aria-selected, aria-controls, aria-activedescendant)
- ✅ Autofocus on search input
- ✅ Proper keyboard navigation
- ✅ Screen reader compatibility

#### Rendering
- ✅ Item labels and descriptions
- ✅ Icons when provided
- ✅ Footer with keyboard shortcuts
- ✅ Data attributes for styling
- ✅ Proper item ordering

## Kanban Board Tests

### Location
`src/tests/extend/kanban/`

### Test Files
- `kanban.test.ts` - Main test suite
- `basic-board.test.svelte` - Basic board with multiple columns
- `empty-board.test.svelte` - Board with empty columns
- `drag-drop-board.test.svelte` - Drag and drop functionality
- `callbacks-board.test.svelte` - Callback testing (onMove, onAddCard)
- `add-card-board.test.svelte` - Add card functionality
- `colored-columns.test.svelte` - Column color borders
- `card-with-tags.test.svelte` - Cards with tags

### Test Coverage

#### Behavioral Tests
- ✅ Board rendering with columns
- ✅ Column rendering with titles
- ✅ Card rendering in columns
- ✅ Empty column handling
- ✅ Column color borders
- ✅ Add card button functionality

#### Drag and Drop
- ✅ Card draggability
- ✅ Drag state management (aria-grabbed)
- ✅ Drop zone feedback
- ✅ Card movement between columns
- ✅ Same-column drop prevention
- ✅ Drag state cleanup
- ✅ onMove callback execution

#### Card Features
- ✅ Card title rendering
- ✅ Optional description display
- ✅ Tag rendering when provided
- ✅ Card data preservation
- ✅ Unique card IDs

#### Callbacks
- ✅ onMove callback with correct parameters
- ✅ onAddCard callback execution
- ✅ Callback parameter validation

#### Accessibility
- ✅ ARIA roles (group, list, listitem)
- ✅ Descriptive aria-labels
- ✅ Draggable state communication
- ✅ Keyboard accessibility (tabindex)
- ✅ Drop zone descriptions

#### Data Integrity
- ✅ Unique card IDs
- ✅ Unique column IDs
- ✅ Card data preservation after moves

## Testing Guidelines

### Key Principles
1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Data Attributes**: Rely on `data-testid`, `data-part`, `data-scope` for element selection
3. **Avoid Hard-coded Text**: Don't test for specific text content that might change
4. **Type Safety**: Always use specific types, never `any`
5. **Interaction Testing**: Include user interaction tests (clicks, keyboard, drag-drop)

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests for a specific component
npm run test -- command-palette
npm run test -- kanban

# Run tests with coverage
npm run test:coverage
```

### Adding New Tests

When adding new tests:
1. Follow the existing naming convention (`*.test.ts` for main suite, `*.test.svelte` for scenarios)
2. Use data attributes for element selection
3. Export test state from test components when needed
4. Include accessibility checks
5. Test both happy path and edge cases
6. Clean up state in `afterEach` hook

### Test State Management

Test components can export state for verification:

```svelte
<script lang="ts" module>
  export const testState = $state({
    clickCount: 0,
    selectedValue: null
  });
</script>
```

This allows tests to verify internal behavior through exported observables.

## Maintenance

### When to Update Tests
- Component API changes
- New features added
- Bug fixes affecting behavior
- Accessibility improvements

### Test Maintenance Checklist
- [ ] Update test descriptions to match new behavior
- [ ] Add tests for new features
- [ ] Remove obsolete tests
- [ ] Update data attributes if changed
- [ ] Verify all interactions still work
- [ ] Check accessibility compliance

## Coverage Goals

Current coverage targets:
- **Statements**: > 90%
- **Branches**: > 85%
- **Functions**: > 90%
- **Lines**: > 90%

### Coverage Areas
- ✅ Component rendering
- ✅ User interactions (mouse, keyboard, drag-drop)
- ✅ State management
- ✅ Callback execution
- ✅ Accessibility features
- ✅ Edge cases and error conditions
- ✅ Data integrity

## Future Improvements

Potential enhancements:
- [ ] Visual regression testing
- [ ] Performance benchmarks
- [ ] Integration tests with real drag-drop events
- [ ] Cross-browser compatibility tests
- [ ] Mobile touch interaction tests
- [ ] Advanced keyboard navigation patterns

## Related Documentation

- [Flowbite Svelte Documentation](https://flowbite-svelte.com/)
- [Testing Library Documentation](https://testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
