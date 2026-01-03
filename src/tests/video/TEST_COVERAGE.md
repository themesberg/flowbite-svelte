# Video Component Test Coverage

## Test Overview
This document outlines the test coverage for the Video component.

## Test Categories

### 1. Basic Rendering
- ✅ Renders video element correctly
- ✅ Video has correct data attributes (`data-scope="video"`, `data-part="base"`)
- ✅ Renders source element with correct src
- ✅ Renders track element with correct attributes
- ✅ Validates component structure

### 2. Video Attributes
- ✅ Controls attribute
- ✅ Autoplay attribute (with muted)
- ✅ Loop attribute
- ✅ Width and height attributes
- ✅ Muted attribute

### 3. Source Type Variants
- ✅ video/mp4 type
- ✅ video/webm type
- ✅ video/ogg type
- ✅ Type attribute on source element

### 4. Track Attributes
- ✅ Track src attribute
- ✅ Track kind attribute (captions)
- ✅ Track srclang attribute (language)
- ✅ Track label attribute
- ✅ Multiple language support

### 5. Props
- ✅ Custom class application
- ✅ Classes prop for styling variants

### 6. Children Snippet
- ✅ Additional source elements rendering
- ✅ Source element ordering
- ✅ Children integration with default source

### 7. Accessibility
- ✅ Track element presence for captions
- ✅ Proper language labeling on tracks
- ✅ Kind attribute for caption tracks

### 8. Fallback Content
- ✅ Browser not supported message
- ✅ Fallback text presence

## Test Files

### Component Test Files
- `basic-video.test.svelte` - Basic rendering test
- `controls-video.test.svelte` - Controls attribute test
- `autoplay-video.test.svelte` - Autoplay and muted attributes
- `loop-video.test.svelte` - Loop attribute test
- `type-video.test.svelte` - Source type variants (mp4, webm, ogg)
- `custom-class-video.test.svelte` - Custom class application
- `track-video.test.svelte` - Track attribute tests (language, label)
- `children-video.test.svelte` - Children snippet rendering
- `dimensions-video.test.svelte` - Width and height attributes

### Main Test File
- `video.test.ts` - Main test suite with all test cases

## Behavioral Tests Focus

All tests focus on **behavior and functionality** rather than:
- ❌ Hard-coded text content (except for fallback message which is part of functionality)
- ❌ Class-based selectors
- ❌ Implementation details

Instead, tests verify:
- ✅ Element presence using data attributes
- ✅ Attribute values and states
- ✅ Source and track element configuration
- ✅ Component props and their impact
- ✅ Accessibility features (captions, tracks)
- ✅ Children rendering behavior

## Test Patterns

### Data Attribute Usage
```typescript
// Good: Using data attributes
const video = screen.getByTestId("basic-video");

// Verify data attributes
expect(video).toHaveAttribute("data-scope", "video");
expect(video).toHaveAttribute("data-part", "base");
```

### Element Queries
```typescript
// Good: Querying child elements
const source = video.querySelector("source");
const track = video.querySelector("track");

// Verify attributes
expect(source).toHaveAttribute("src", "https://example.com/video.mp4");
expect(track).toHaveAttribute("kind", "captions");
```

### Type Safety
```typescript
// Good: Using HTMLVideoAttributes types
import type { VideoProps } from "$lib/types";

// Avoid: any type
const props: any = ...;
```

### Attribute Testing
```typescript
// Testing native HTML attributes
expect(video).toHaveAttribute("controls");
expect(video).toHaveAttribute("autoplay");
expect(video).toHaveAttribute("loop");

// Testing dimension attributes
expect(video).toHaveAttribute("width", "640");
expect(video).toHaveAttribute("height", "360");
```

## Coverage Summary

- **Total Test Categories**: 8
- **Total Test Cases**: 30+
- **Component Test Files**: 9
- **Focus**: Behavior, attributes, and accessibility testing
- **Approach**: Data attribute-based selectors with native HTML attribute verification

## Key Testing Aspects

### Video Element Behavior
- Native HTML5 video element attributes
- Source element configuration
- Track element for captions
- Multiple source format support

### Accessibility Features
- Caption track availability
- Language labeling
- Fallback content for unsupported browsers

### Component Integration
- Children snippet for additional sources
- Custom styling via class prop
- Theme integration via classes prop
