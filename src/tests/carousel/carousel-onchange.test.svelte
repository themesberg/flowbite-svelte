<script lang="ts">
  import { Carousel, Controls } from "$lib";
  import { testImages } from "./testData.js";

  let changeCount = $state(0);


  function handleChange(image) {
    changeCount++;
    lastChangedImage = image;
  }
</script>

<Carousel images={testImages} onchange={handleChange} data-testid="onchange-carousel">
  <Controls />
</Carousel>
