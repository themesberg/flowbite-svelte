# Skeleton Component Tests

This directory contains unit tests for all skeleton/placeholder components in the Flowbite Svelte library.

## Test Structure

### Main Test File
- `skeleton.test.ts` - Main test suite with comprehensive tests for all skeleton components

### Test Component Files

#### Skeleton Component
- `basic-skeleton.test.svelte` - Basic skeleton rendering
- `skeleton-sizes.test.svelte` - Size variants (sm, md, lg, xl, xxl)
- `skeleton-custom-class.test.svelte` - Custom CSS classes

#### CardPlaceholder Component
- `basic-card-placeholder.test.svelte` - Basic card placeholder rendering
- `card-placeholder-sizes.test.svelte` - Size variants

#### ImagePlaceholder Component
- `basic-image-placeholder.test.svelte` - Basic image placeholder rendering
- `image-placeholder-sizes.test.svelte` - Size variants
- `image-placeholder-rounded.test.svelte` - Rounded variant
- `image-placeholder-img-only.test.svelte` - Image only mode (no text content)

#### ListPlaceholder Component
- `basic-list-placeholder.test.svelte` - Basic list placeholder rendering
- `list-placeholder-items.test.svelte` - Custom item numbers (3, 5, 8 items)

#### TestimonialPlaceholder Component
- `basic-testimonial-placeholder.test.svelte` - Basic testimonial placeholder rendering

#### TextPlaceholder Component
- `basic-text-placeholder.test.svelte` - Basic text placeholder rendering
- `text-placeholder-sizes.test.svelte` - Size variants

#### VideoPlaceholder Component
- `basic-video-placeholder.test.svelte` - Basic video placeholder rendering
- `video-placeholder-sizes.test.svelte` - Size variants

#### WidgetPlaceholder Component
- `basic-widget-placeholder.test.svelte` - Basic widget placeholder rendering

## Test Coverage

The tests cover the following aspects for each component:

### Basic Rendering
- Component renders correctly
- Proper DOM structure
- Role and ARIA attributes
- Screen reader text ("Loading...")

### Size Variants
- Different size options (sm, md, lg, xl, xxl where applicable)
- Proper styling for each size
- Consistent structure across sizes

### Props & Features
- Custom CSS classes
- Component-specific props (rounded, imgOnly, itemNumber, etc.)
- Default values
- Prop combinations

### Accessibility
- `role="status"` attribute
- `aria-hidden` on decorative SVG elements
- Screen reader accessible text
- Proper semantic HTML structure

### Component Structure
- SVG icons render correctly
- Multiple placeholder lines/bars
- Proper nesting and hierarchy
- Animation/styling classes

## Running Tests

```bash
# Run all skeleton tests
npm test skeleton

# Run specific test file
npm test skeleton.test.ts

# Run tests in watch mode
npm test skeleton -- --watch
```

## Test Organization

Tests are organized by component and feature:

1. **Skeleton** - Text content loading placeholder
2. **CardPlaceholder** - Card component loading state
3. **ImagePlaceholder** - Image with optional text loading state
4. **ListPlaceholder** - List items loading state
5. **TestimonialPlaceholder** - Testimonial/quote loading state
6. **TextPlaceholder** - Paragraph text loading state
7. **VideoPlaceholder** - Video player loading state
8. **WidgetPlaceholder** - Chart/widget loading state

Each component test suite includes:
- Basic rendering tests
- Size/variant tests (where applicable)
- Accessibility tests
- Component-specific feature tests

## Notes

- All skeleton components use `role="status"` for accessibility
- All components include "Loading..." text for screen readers
- SVG icons use `aria-hidden="true"` as they're decorative
- Components support custom CSS classes via the `class` prop
- Most components support size variants: sm, md, lg, xl, xxl
