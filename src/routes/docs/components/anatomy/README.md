# Component Anatomy

This directory contains visual diagrams showing the anatomy of Flowbite Svelte components.

## Purpose

Anatomy diagrams help developers understand:
1. The structure of each component
2. Which `data-part` attributes are available for styling
3. How `data-scope` attributes help namespace component styles
4. The hierarchical relationship between component parts

## Data Attributes

### `data-scope`
- Namespaces components to prevent style conflicts
- Example: `data-scope="accordion"` indicates this element belongs to an accordion
- Useful for scoped CSS: `[data-scope="accordion"] [data-part="button"]`

### `data-part`
- Identifies specific parts of a component
- Maps directly to theme slot names for consistency
- Example: `data-part="button"` identifies the button part
- Allows precise CSS targeting: `[data-part="button"] { ... }`

## Benefits

1. **Developer Experience**: Easy identification of component parts in DevTools
2. **Testing**: Simple selectors for E2E tests (`[data-part="button"]`)
3. **Styling**: Clear CSS targeting without relying on class names
4. **Documentation**: Visual mapping between code and rendered output
5. **Theme Integration**: Direct correspondence with theme configuration slots

## Example Usage

```css
/* Target a specific component scope */
[data-scope="accordion"] {
  border: 1px solid gray;
}

/* Target a specific part within a scope */
[data-scope="accordion"] [data-part="button"] {
  font-weight: bold;
}

/* Target a part across all scopes */
[data-part="button"] {
  cursor: pointer;
}
```

## Adding New Diagrams

When creating anatomy diagrams for new components:

1. Create an SVG file: `component-name-anatomy.svg`
2. Show the visual structure with labels
3. Annotate with `data-scope` and `data-part` attributes
4. Use consistent colors for different element types
5. Include a legend explaining the structure
6. Update the main page to include the new diagram

## Inspiration

This approach is inspired by component libraries like:
- **Ark UI**: Uses `data-part` and `data-scope` extensively
- **Radix UI**: Uses data attributes for state and identification
- **Headless UI**: Clear separation of component concerns

## Files

- `+page.svelte` - Main anatomy documentation page
- `accordion-anatomy.svg` - Accordion component anatomy diagram
- More component diagrams will be added here
