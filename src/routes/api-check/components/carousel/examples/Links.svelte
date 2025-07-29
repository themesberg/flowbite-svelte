<script>
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
