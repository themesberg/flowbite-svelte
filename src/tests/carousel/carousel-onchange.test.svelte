<script lang="ts">
  import { Carousel, Controls } from "$lib";
  import { testImages } from "./testData.js";
  import type { HTMLImgAttributes } from "svelte/elements";

  let changeCount = $state(0);

  function handleChange(_image: HTMLImgAttributes) {
    changeCount++;
  }
</script>

<Carousel images={testImages} onchange={handleChange} data-testid="onchange-carousel">
  <Controls />
</Carousel>
