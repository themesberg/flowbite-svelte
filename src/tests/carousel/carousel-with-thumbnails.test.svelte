<script lang="ts">
  import { Carousel, Thumbnails } from "$lib";
  import { testImages } from "./testData.js";

  let index = $state(0);
</script>

<div>
  <Carousel images={testImages} bind:index />
  <Thumbnails images={testImages} bind:index />
</div>
