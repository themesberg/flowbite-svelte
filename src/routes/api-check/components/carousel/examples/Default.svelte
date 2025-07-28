<script>
  import { Carousel } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images} duration={3000} />
</div>