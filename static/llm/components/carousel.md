# Svelte Carousel - Flowbite


The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators.

## Setup

```svelte
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

Set the `duration` prop (in milliseconds) to define the auto‑advance interval between slides.

The default value of `duration` is `0` (no auto‑advance). In that case, control the visible slide with the `index` prop.

```svelte
{#include Default.svelte}
```

## Controls

Use the internal `Controls` component to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the `class` property.

```svelte
{#include Controls.svelte}
```

## Indicators

Show the carousel indicators by adding the internal `Indicators` component.

```svelte
{#include Indicators.svelte}
```

## Thumbnails

You can control the `Carousel` component externally by the `index` prop. Here is an example how to use the `Thumbnails` component to achieve that.

```svelte
{#include Thumbnails.svelte}
```

## Caption

The `Carousel` exposes the `change` event containing info about the currently displayed image. You can use it to build custom caption for the carousel.

```svelte
{#include Caption.svelte}
```

## Carousel with links

You can use `slide` snippet and internal component `Slide` to control the image display. Here's an example how to wrap images with the anchor element.

```svelte
{#include Links.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between `Controls`, `Indicators`, and `Thumbnails`.

## Customization

### Basic customization

```svelte
{#include Basic.svelte}
```

### Advanced customization

```svelte
{#include Advanced.svelte}
```

### Custom Carousel transition

```svelte
{#include Transition.svelte}
```

## Component data

### Carousel

#### Types

[CarouselProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L374)

#### Props

- children
- slide
- images
- index: $bindable(0)
- slideDuration: 1000
- slideFit
- transition
- duration: 0
- "aria-label": ariaLabel: "Draggable Carousel"
- disableSwipe: false
- imgClass: ""
- class: className
- classes
- onchange
- isPreload: false

### CarouselIndicators

#### Types

[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L389)

#### Props

- children
- activeClass
- inactiveClass
- position: "bottom"
- class: className

### ControlButton

#### Types

[ControlButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L396)

#### Props

- children
- forward
- name
- class: className
- spanClass

### Controls

#### Types

[ControlsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L402)

#### Props

- children
- class: className

### Slide

#### Types

[SlideProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L419)

#### Props

- image
- transition
- fit
- class: className

### Thumbnail

#### Types

[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L406)

#### Props

- selected
- class: className

### Thumbnails

#### Types

[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L410)

#### Props

- children
- images: []
- index: $bindable()
- ariaLabel: "Click to view image"
- imgClass
- throttleDelay: 650
- class: className


## References

- [Flowbite Carousel](https://flowbite.com/docs/components/carousel/)


