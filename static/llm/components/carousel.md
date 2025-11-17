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
<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<Carousel {images} duration={3000} />
```

## Controls

Use the internal `Controls` component to listen to click events which will trigger the slide event from the carousel component to each direction.

You can customize the control elements with the `class` property.

```svelte
<script lang="ts">
  import { Carousel, Controls } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images}>
    <Controls />
  </Carousel>
</div>
```

## Indicators

Show the carousel indicators by adding the internal `Indicators` component.

```svelte
<script lang="ts">
  import { Carousel, CarouselIndicators } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images}>
    <CarouselIndicators />
  </Carousel>
</div>
```

## Thumbnails

You can control the `Carousel` component externally by the `index` prop. Here is an example how to use the `Thumbnails` component to achieve that.

```svelte
<script lang="ts">
  import { Carousel, Controls, CarouselIndicators, Thumbnails } from "flowbite-svelte";
  import images from "./imageData/images.json";

  let index = $state(0);
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} bind:index>
    <Controls />
    <CarouselIndicators />
  </Carousel>
  <Thumbnails {images} bind:index />
</div>
```

## Caption

The `Carousel` exposes the `change` event containing info about the currently displayed image. You can use it to build custom caption for the carousel.

```svelte
<script lang="ts">
  import { Carousel, Controls, CarouselIndicators } from "flowbite-svelte";
  import images from "./imageData/images.json";
  import type { HTMLImgAttributes } from "svelte/elements";

  let image: HTMLImgAttributes | undefined = $state();
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} onchange={(detail) => (image = detail)}>
    <Controls />
    <CarouselIndicators />
  </Carousel>

  <div class="my-2 h-10 rounded-sm bg-gray-300 p-2 text-center dark:bg-gray-700 dark:text-white">
    {image?.alt}
  </div>
</div>
```

## Carousel with links

You can use `slide` snippet and internal component `Slide` to control the image display. Here's an example how to wrap images with the anchor element.

```svelte
<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} duration={3900}>
    {#snippet slide({ index, Slide })}
      <a href="http://google.com/search?q={images[index]?.title}" target="_blank">
        <Slide image={images[index]} />
      </a>
    {/snippet}
    <!-- Indicators / -->
  </Carousel>
</div>
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between `Controls`, `Indicators`, and `Thumbnails`.

## Customization

### Basic customization

```svelte
<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} duration={3900}>
    {#snippet slide({ index, Slide })}
      <a href="http://google.com/search?q={images[index]?.title}" target="_blank">
        <Slide image={images[index]} />
      </a>
    {/snippet}
    <!-- Indicators / -->
  </Carousel>
</div>
```

### Advanced customization

```svelte
<script lang="ts">
  import { Button, Carousel, ControlButton, Controls, Indicator, CarouselIndicators, Thumbnails } from "flowbite-svelte";
  import { CaretRightOutline } from "flowbite-svelte-icons";
  import images from "./imageData/images.json";
  let index = $state(0);
</script>

<div class="max-w-4xl space-y-4">
  <Carousel {images} bind:index>
    <CarouselIndicators>
      {#snippet children({ selected, index })}
        <Indicator color={selected ? "red" : "green"} class="h-5 w-5 border border-white text-white {selected ? 'opacity-100' : 'opacity-80'}">
          {index}
        </Indicator>
      {/snippet}
    </CarouselIndicators>
    <Controls>
      {#snippet children(changeSlide)}
        <ControlButton name="Previous" forward={false} onclick={() => changeSlide(false)} />
        <Button pill class="absolute end-4 top-1/2 -translate-y-1/2 p-2 font-bold" onclick={() => changeSlide(true)}>
          <CaretRightOutline />
        </Button>
      {/snippet}
    </Controls>
  </Carousel>
  <Thumbnails class="mt-4 gap-3 bg-transparent" {images} bind:index>
    {#snippet children({ image, selected, Thumbnail })}
      <Thumbnail {selected} {...image} class="hover:outline-primary-500 rounded-md shadow-xl hover:outline {selected ? 'outline-primary-400 outline-4' : ''}" />
    {/snippet}
  </Thumbnails>
</div>
```

### Custom Carousel transition

```svelte
<script lang="ts">
  import { Carousel, Controls, CarouselIndicators } from "flowbite-svelte";
  import images from "./imageData/images.json";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  const scaleAnimation = (node: HTMLElement) => scale(node, { duration: 500, easing: quintOut });
</script>

<div class="max-w-4xl">
  <Carousel {images} transition={scaleAnimation}>
    <Controls />
    <CarouselIndicators />
  </Carousel>
</div>
```

## Component data

### Carousel

#### Types

[CarouselProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L413)

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

[IndicatorsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L428)

#### Props

- children
- activeClass
- inactiveClass
- position: "bottom"
- class: className

### ControlButton

#### Types

[ControlButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L435)

#### Props

- children
- forward
- name
- class: className
- spanClass

### Controls

#### Types

[ControlsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L441)

#### Props

- children
- class: className

### Slide

#### Types

[SlideProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L458)

#### Props

- image
- transition
- fit
- class: className

### Thumbnail

#### Types

[ThumbnailProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L445)

#### Props

- selected
- class: className

### Thumbnails

#### Types

[ThumbnailsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L449)

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
