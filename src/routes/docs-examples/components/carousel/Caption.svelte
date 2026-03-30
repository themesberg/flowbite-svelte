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

  <div class="bg-neutral-quaternary text-heading my-2 h-10 rounded-sm p-2 text-center">
    {image?.alt}
  </div>
</div>
