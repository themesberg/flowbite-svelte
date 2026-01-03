# Table Component Test Coverage

## Overview
Comprehensive unit tests for all Table components focusing on behavior and functionality.

## Test Structure
Tests are organized into logical groups covering all aspects of the table components.

## Components Tested

### 1. Table Component
- **File**: `src/lib/table/Table.svelte`
- **Test File**: `src/tests/table/table.test.ts`

#### Test Categories

##### Basic Rendering
- ✅ Renders basic table structure with thead and tbody
- ✅ Renders table with items prop (auto-generates headers and rows)
- ✅ Renders table head and body sections correctly
- ✅ Proper semantic HTML structure

##### Table Props and Variants
- ✅ Striped tables (alternating row colors)
- ✅ Hoverable tables (hover effects on rows)
- ✅ Borderless tables (border prop set to false)
- ✅ Shadow tables (with shadow effect)
- ✅ Color variants (blue, green, red, etc.)

##### TableBodyCell Features
- ✅ Cell with colspan attribute (spanning multiple columns)
- ✅ Clickable cells with onclick handlers
- ✅ Click event tracking and state updates

##### Table Slots
- ✅ Caption slot rendering
- ✅ Footer slot rendering
- ✅ Proper placement of caption and footer elements

##### TableSearch Component
- ✅ Renders search input field
- ✅ User input in search field
- ✅ Custom placeholder text
- ✅ Striped and hoverable props
- ✅ Search icon rendering
- ✅ Color variants for search table

##### Data Attributes
- ✅ Table has correct data-scope and data-part attributes
- ✅ TableSearch has correct data attributes
- ✅ Proper component identification for testing

##### Accessibility
- ✅ Table has proper semantic structure (table role)
- ✅ Search input has accessible label (sr-only)
- ✅ Table headers properly marked as columnheader
- ✅ Table cells properly marked as td elements

## Test Scenarios

### 1. Basic Table Usage
```svelte
<Table>
  <TableHead>
    <TableHeadCell>Header</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Data</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
```

### 2. Table with Items Prop
```svelte
<Table items={[
  { name: "Product", price: 100 }
]} />
```

### 3. Styled Table
```svelte
<Table striped hoverable color="blue" shadow>
  {/* content */}
</Table>
```

### 4. Clickable Cells
```svelte
<TableBodyCell onclick={handleClick}>
  Click me
</TableBodyCell>
```

### 5. Table Search
```svelte
<TableSearch bind:inputValue={search} striped hoverable>
  {/* table content */}
</TableSearch>
```

## Test Files

### Main Test File
- `table.test.ts` - Main test suite with all test cases

### Component Test Files (Svelte)
- `basic-table.test.svelte` - Basic table structure
- `table-with-items.test.svelte` - Table using items prop
- `striped-table.test.svelte` - Striped variant
- `hoverable-table.test.svelte` - Hoverable variant
- `borderless-table.test.svelte` - Borderless variant
- `shadow-table.test.svelte` - Shadow variant
- `colored-table.test.svelte` - Color variants
- `colspan-table.test.svelte` - Colspan functionality
- `clickable-cell.test.svelte` - Cell click events
- `table-with-slots.test.svelte` - Caption and footer slots
- `table-search.test.svelte` - Basic TableSearch
- `table-search-styled.test.svelte` - Styled TableSearch

## Running Tests

```bash
# Run all table tests
npm run test:unit -- table

# Run specific test file
npm run test:unit -- table.test.ts

# Run with watch mode
npm run test:unit table
```

## Test Principles Applied

1. ✅ **Behavior-focused**: Tests verify functionality, not implementation
2. ✅ **No hard-coded text**: Uses data-testid attributes instead
3. ✅ **Data attributes**: Prefers data-testid over class selectors
4. ✅ **Type safety**: No `any` types, uses specific types
5. ✅ **User interactions**: Tests real user behavior with userEvent
6. ✅ **Accessibility**: Verifies ARIA attributes and semantic HTML

## Coverage Summary

| Component | Tests | Coverage |
|-----------|-------|----------|
| Table | 25 | Complete |
| TableHead | Integrated | Via Table tests |
| TableHeadCell | Integrated | Via Table tests |
| TableBody | Integrated | Via Table tests |
| TableBodyRow | Integrated | Via Table tests |
| TableBodyCell | 3 | Complete |
| TableSearch | 6 | Complete |

## Future Enhancements

- [ ] Test table sorting functionality (if implemented)
- [ ] Test pagination integration (if implemented)
- [ ] Test responsive behavior
- [ ] Test keyboard navigation
- [ ] Performance tests for large datasets
