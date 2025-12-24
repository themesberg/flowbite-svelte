<script lang="ts">
  import { Carousel, Controls } from "$lib";
  import { testImages } from "./testData.js";
</script>

<Carousel images={testImages}>
  <Controls />
</Carousel>
