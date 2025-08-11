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
