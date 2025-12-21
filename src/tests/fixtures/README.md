# Test Fixtures

This directory contains test fixtures used across component tests.

## test-images.ts

Contains data URL-based test images for component testing:

### General Test Images
- **TEST_IMAGE_VALID**: A simple 1x1 transparent PNG (minimal size)
- **TEST_IMAGE_SVG**: A visible SVG image with "Test Image" text (better for manual testing)
- **TEST_IMAGE_INVALID**: An invalid image URL for testing error handling

### Carousel-Specific Images
For components that use keyed each blocks, we need unique image URLs:
- **CAROUSEL_IMAGE_1**: Blue SVG with "Test Image 1" (unique data URL)
- **CAROUSEL_IMAGE_2**: Green SVG with "Test Image 2" (unique data URL)
- **CAROUSEL_IMAGE_3**: Red SVG with "Test Image 3" (unique data URL)

> **Note**: Each carousel image has a different color and label, ensuring unique data URLs for Svelte's keyed each blocks.

## Why Data URLs?

Using data URLs instead of external URLs or file paths provides several benefits:

1. **No External Dependencies**: Tests don't rely on external websites being available
2. **Consistent Results**: Images are always available and never change
3. **Fast Tests**: No network requests needed
4. **Self-Contained**: Everything needed for tests is in the repository

## Usage

### Basic Components
```typescript
import { TEST_IMAGE_SVG } from "../fixtures/test-images";

// Use in your test component
<Card img={TEST_IMAGE_SVG}>
  <h5>Test Card</h5>
</Card>
```

### Carousel Components
```typescript
import { CAROUSEL_IMAGE_1, CAROUSEL_IMAGE_2, CAROUSEL_IMAGE_3 } from "../fixtures/test-images";

export const testImages = [
  { src: CAROUSEL_IMAGE_1, alt: "Test Image 1" },
  { src: CAROUSEL_IMAGE_2, alt: "Test Image 2" },
  { src: CAROUSEL_IMAGE_3, alt: "Test Image 3" }
];
```

## Best Practices

- Use `TEST_IMAGE_SVG` for most single-image tests (visible in manual testing)
- Use `TEST_IMAGE_VALID` when you need minimal size
- Use `TEST_IMAGE_INVALID` for error handling tests
- Use `CAROUSEL_IMAGE_*` for carousel/gallery components with keyed each blocks
- Always ensure unique image URLs when using Svelte's keyed each blocks
