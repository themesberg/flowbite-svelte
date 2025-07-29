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
