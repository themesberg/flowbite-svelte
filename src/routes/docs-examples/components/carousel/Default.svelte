<script lang="ts">
  import { Carousel } from "flowbite-svelte";
  import images from "./imageData/images.json";
</script>

<Carousel {images} duration={3000} />
