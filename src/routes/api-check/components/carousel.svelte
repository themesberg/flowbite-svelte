<script lang="ts">
  import { Button, Carousel, ControlButton, Controls, Indicator, Indicators, Thumbnails } from "$lib";
  import type { HTMLImgAttributes } from "svelte/elements";
  import { CaretRightOutline } from "flowbite-svelte-icons";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  // import images from "./imageData/images.json";
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
  let index = $state(0);
  let image: HTMLImgAttributes | undefined = $state();
  const scaleAnimation = (node: HTMLElement) => scale(node, { duration: 500, easing: quintOut });
</script>

<h1 class="my-4 text-3xl">Carousel</h1>

<h2 class="my-4 text-2xl">Default</h2>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} duration={3000} />
</div>

<h2 class="my-4 text-2xl">Controls</h2>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images}>
    <Controls />
  </Carousel>
</div>

<h2 class="my-4 text-2xl">Indicators</h2>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images}>
    <Indicators />
  </Carousel>
</div>

<h2 class="my-4 text-2xl">Thumbnails</h2>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} bind:index>
    <Controls />
    <Indicators />
  </Carousel>
  <Thumbnails {images} bind:index />
</div>

<h2 class="my-4 text-2xl">Caption</h2>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} onchange={(detail) => (image = detail)}>
    <Controls />
    <Indicators />
  </Carousel>

  <div class="my-2 h-10 rounded-sm bg-gray-300 p-2 text-center dark:bg-gray-700 dark:text-white">
    {image?.alt}
  </div>
</div>

<h2 class="my-4 text-2xl">Carousel with links</h2>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} duration={3900}>
    {#snippet slide({ index, Slide })}
      <a href="http://google.com/search?q={images[index]?.title}" target="_blank">
        <Slide image={images[index]} />
      </a>
    {/snippet}
  </Carousel>
</div>

<h2 class="my-4 text-2xl">Customization</h2>

<h3 class="my-2 text-xl">Basic customization</h3>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} imgClass="object-contain h-full w-fit rounded-xs" class="min-h-[320px] rounded-md border-4 border-white bg-gray-200 ring-4 ring-green-500 dark:border-gray-800">
    <Indicators class="rounded-md border border-white p-2" />
    <Controls class="items-center pt-4 text-red-400 dark:text-green-400" />
  </Carousel>
</div>

<h3 class="my-2 text-xl">Advanced customization</h3>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} bind:index>
    <Indicators>
      {#snippet children({ selected, index })}
        <Indicator color={selected ? "red" : "green"} class="h-5 w-5 border border-white text-white {selected ? 'opacity-100' : 'opacity-80'}">
          {index}
        </Indicator>
      {/snippet}
    </Indicators>
    <Controls>
      {#snippet children(changeSlide)}
        <ControlButton name="Previous" forward={false} onclick={() => changeSlide(false)} class="bg-red-300/50 dark:bg-red-400/50" />
        <Button pill class="absolute end-4 top-1/2 -translate-y-1/2 p-2 font-bold" onclick={() => changeSlide(true)}>
          <CaretRightOutline />
        </Button>
      {/snippet}
    </Controls>
  </Carousel>

  <Thumbnails class="gap-3 bg-transparent" {images} bind:index>
    {#snippet children({ image, selected, Thumbnail })}
      <Thumbnail {selected} {...image} class="hover:outline-primary-500 rounded-md shadow-xl hover:outline {selected ? 'outline-primary-400 outline-4' : ''}" />
    {/snippet}
  </Thumbnails>
</div>

<h3 class="my-2 text-xl">Custom Carousel transition</h3>
<div class="my-4 max-w-4xl rounded border p-4">
  <Carousel {images} transition={scaleAnimation}>
    <Controls />
    <Indicators />
  </Carousel>
</div>
