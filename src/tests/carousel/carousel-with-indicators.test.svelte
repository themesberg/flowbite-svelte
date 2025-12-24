<script lang="ts">
  import { Carousel, CarouselIndicators } from "$lib";
  import { testImages } from "./testData.js";
</script>

<Carousel images={testImages}>
  <CarouselIndicators />
</Carousel>
