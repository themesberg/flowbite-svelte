<script lang="ts">
  import { Carousel, Controls, CarouselIndicators } from "flowbite-svelte";
  import images from "./imageData/images.json";
  import type { HTMLImgAttributes } from "svelte/elements";

  let index = $state(0);
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