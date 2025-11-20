---
layout: componentLayout
title: Svelte Carousel - Flowbite
breadcrumb_title: Svelte Carousel
component_title: Carousel
dir: Components
description: Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options
thumnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    'docs/components/gallery',
    'docs/components/modal',
    'docs/components/tabs',
    'docs/components/card'
  ];
</script>

The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators.

Carousels are versatile UI components perfect for:
- **Image galleries** - showcasing photos, artwork, or product images
- **Hero sections** - rotating banner content on landing pages
- **Testimonials** - cycling through customer reviews
- **Product showcases** - highlighting multiple products or features
- **Portfolio displays** - presenting creative work
- **News rotators** - featuring latest articles or updates
- **Before/after comparisons** - showing transformations
- **Tutorial slides** - step-by-step guides and onboarding
- **Promotional banners** - rotating marketing messages
- **Feature highlights** - demonstrating product capabilities

Carousels help conserve screen space while presenting multiple pieces of content in an engaging, interactive format.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  // ./imageData/+server.js has the following
  export const images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    {
      alt: "Cristina Gottardi",
      src: "/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp",
      title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com"
    },
    {
      alt: "Johannes Plenio",
      src: "/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp",
      title: "johannes-plenio-RwHv7LgeC7s-unsplash.com"
    },
    {
      alt: "Jonatan Pie",
      src: "/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp",
      title: "jonatan-pie-3l3RwQdHRHg-unsplash.com"
    },
    {
      alt: "Mark Harpur",
      src: "/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp",
      title: "mark-harpur-K2s_YE031CA-unsplash"
    },
    {
      alt: "Pietro De Grandi",
      src: "/images/carousel/pietro-de-grandi-T7K4aEPoGGk-unsplash.webp",
      title: "pietro-de-grandi-T7K4aEPoGGk-unsplash"
    },
    {
      alt: "Sergey Pesterev",
      src: "/images/carousel/sergey-pesterev-tMvuB9se2uQ-unsplash.webp",
      title: "sergey-pesterev-tMvuB9se2uQ-unsplash"
    },
    {
      alt: "Solo travel goals",
      src: "/images/carousel/solotravelgoals-7kLufxYoqWk-unsplash.webp",
      title: "solotravelgoals-7kLufxYoqWk-unsplash"
    }
  ];
</script>
```

## Default Carousel

Set the `duration` prop (in milliseconds) to define the auto-advance interval between slides.

The default value of `duration` is `0` (no auto-advance). In that case, control the visible slide with the `index` prop.

Auto-advance considerations:
- **User control** - Allow users to pause/resume automatic rotation
- **Duration timing** - Give users enough time to read content (typically 5-7 seconds)
- **Accessibility** - Provide pause controls for users who need more time
- **Content type** - Images can rotate faster than text-heavy slides
- **User preference** - Some users find auto-rotation distracting

Manual control (duration=0) is better for:
- Content requiring extended viewing time
- Interactive elements within slides
- User-driven exploration
- Accessibility compliance

```svelte example
{#include Default.svelte}
```

## Controls

Use the internal `Controls` component to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the `class` property.

Navigation controls are essential for:
- **User agency** - letting users control their browsing experience
- **Skipping content** - moving past uninteresting slides quickly
- **Reviewing content** - going back to previous slides
- **Accessibility** - keyboard navigation support
- **Mobile interaction** - touch-friendly navigation areas

Best practices for controls:
- Make controls large enough for easy clicking/tapping (44x44px minimum)
- Position controls consistently (typically on sides)
- Ensure sufficient contrast against background images
- Provide keyboard alternatives (arrow keys)
- Consider hiding controls on touch devices (swipe instead)

```svelte example
{#include Controls.svelte}
```

## Indicators

Show the carousel indicators by adding the internal `Indicators` component.

Indicators (also called dots or pagination) provide:
- **Position awareness** - showing current slide and total count
- **Direct navigation** - jumping to specific slides
- **Progress indication** - how much content remains
- **Visual feedback** - confirming user navigation
- **Scannable overview** - quick sense of carousel length

Indicator patterns:
- **Dots**: Most common, minimal design
- **Thumbnails**: Preview of each slide
- **Numbers**: Explicit count (3 of 8)
- **Progress bar**: Linear progression indicator

```svelte example
{#include Indicators.svelte}
```

## Thumbnails

You can control the `Carousel` component externally by the `index` prop. Here is an example how to use the `Thumbnails` component to achieve that.

Thumbnail navigation offers:
- **Content preview** - seeing what's in each slide before navigating
- **Faster navigation** - directly accessing desired content
- **Better UX** - eliminating guesswork about slide contents
- **Visual appeal** - more engaging than simple dots
- **E-commerce optimization** - crucial for product image galleries

Thumbnails work best when:
- Images are the primary content
- Users need to find specific content
- Visual distinction between slides is clear
- Screen space allows for thumbnail strip

```svelte example
{#include Thumbnails.svelte}
```

## Caption

The `Carousel` exposes the `change` event containing info about the currently displayed image. You can use it to build custom caption for the carousel.

Captions enhance carousels by providing:
- **Context** - explaining what's shown in the image
- **Attribution** - crediting photographers or sources
- **Additional information** - details not visible in the image
- **Accessibility** - text alternative for visual content
- **SEO benefits** - searchable text content

Caption best practices:
- Keep captions concise and relevant
- Ensure sufficient contrast for readability
- Consider caption positioning (below, overlay, sidebar)
- Make captions responsive to screen size
- Include essential information without overwhelming

```svelte example
{#include Caption.svelte}
```

## Carousel with links

You can use `slide` snippet and internal component `Slide` to control the image display. Here's an example how to wrap images with the anchor element.

Linking carousel slides enables:
- **Click-through functionality** - navigating to related content
- **Product pages** - linking gallery images to detail pages
- **Article previews** - connecting images to full articles
- **Campaign landing** - directing users to promotional content
- **Portfolio cases** - linking to project details

When making slides clickable:
- Ensure the entire slide area is clickable
- Provide visual feedback on hover (cursor change, overlay)
- Consider how controls and indicators interact with click areas
- Include accessible labels for screen readers
- Don't conflict with navigation controls

```svelte example
{#include Links.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between `Controls`, `Indicators`, and `Thumbnails`.

Accessibility considerations for carousels:

**Keyboard Navigation:**
- Arrow keys to navigate between slides
- Tab to reach controls and indicators
- Enter/Space to activate controls
- Escape to pause auto-rotation

**Screen Readers:**
- Announce current slide number and total
- Describe images with meaningful alt text
- Label controls clearly (Previous, Next, Pause)
- Announce slide changes

**Best Practices:**
- Provide pause/play controls for auto-rotating carousels
- Ensure sufficient color contrast
- Don't rely solely on color to convey information
- Make interactive elements large enough (44x44px)
- Allow users to control timing and navigation
- Avoid motion that could trigger vestibular disorders

## Customization

### Basic customization

Basic customization allows you to adjust visual appearance while maintaining core functionality. Common customizations include:
- **Colors** - matching brand palette
- **Sizing** - adjusting dimensions for context
- **Spacing** - controlling gaps and padding
- **Borders** - adding frames or separators
- **Shadows** - creating depth and emphasis

```svelte example
{#include Basic.svelte}
```

### Advanced customization

Advanced customization provides deeper control over carousel behavior and appearance:
- **Custom transitions** - unique slide animations
- **Control positioning** - relocating navigation elements
- **Overlay effects** - gradients, text overlays, filters
- **Responsive behavior** - different layouts at breakpoints
- **Custom indicators** - unique pagination styles

```svelte example
{#include Advanced.svelte}
```

### Custom Carousel transition

Custom transitions can create distinctive experiences:
- **Fade**: Smooth crossfade between slides
- **Slide**: Traditional horizontal movement
- **Zoom**: Scale and fade effects
- **Cube/3D**: Three-dimensional rotations
- **Creative**: Unique brand-specific animations

Transition considerations:
- Match transition to content type and brand
- Keep transitions subtle and smooth
- Consider performance on mobile devices
- Test across different browsers
- Avoid transitions that could cause motion sickness

```svelte example
{#include Transition.svelte}
```

## Best Practices

When implementing carousels, consider these guidelines:

**Content:**
- Limit carousel to 5-7 slides maximum for optimal engagement
- Use high-quality, optimized images
- Ensure consistent image dimensions across slides
- Include alt text for all images
- Make slide content scannable and concise

**Performance:**
- Lazy load images not currently visible
- Optimize image file sizes
- Preload next/previous slides for smooth transitions
- Consider reducing auto-play on mobile for data savings
- Test performance across devices

**User Experience:**
- Always provide manual navigation controls
- Make it obvious that content is a carousel (show partial next slide)
- Avoid placing critical content in carousels
- Don't auto-advance too quickly (5-7 seconds minimum)
- Pause on hover or focus
- Show progress indicators

**Mobile Optimization:**
- Support swipe gestures for navigation
- Ensure touch targets are large enough (44x44px)
- Consider disabling auto-play on mobile
- Test on various screen sizes
- Simplify controls for small screens

## When to Avoid Carousels

Carousels aren't always the best choice:
- **Critical content**: Users often ignore carousel slides after the first
- **SEO-important content**: Hidden slides aren't indexed as effectively
- **Mobile-first sites**: Carousels can be awkward on small screens
- **Simple content**: If you only have 2-3 items, consider other layouts
- **Performance concerns**: Multiple large images can slow page load

Alternatives to consider:
- Grid layouts for products or galleries
- Accordion for content that doesn't need images
- Tabs for organizing related content
- Simple image galleries with modal zoom
- Static hero images with focused messaging

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Key Props

**Carousel:**
- `images`: Array of image objects with src, alt, and optional title
- `duration`: Auto-advance interval in milliseconds (0 = manual only)
- `index`: Current slide index (bindable for external control)
- `showControls`: Show/hide previous/next buttons
- `showIndicators`: Show/hide position indicators
- `showThumbnails`: Show/hide thumbnail navigation
- `transition`: Custom transition function
- `transitionParams`: Parameters for transition (duration, easing)

**Controls:**
- `class`: Custom classes for control buttons
- Position customization through slots

**Indicators:**
- `class`: Custom classes for indicator dots
- Active state styling

**Thumbnails:**
- `class`: Custom classes for thumbnail container
- Active thumbnail highlighting

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Carousel](https://flowbite.com/docs/components/carousel/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
