<script lang="ts">
  import { Carousel } from "$lib";
  import { testImages } from "./testData.js";
</script>

<Carousel images={testImages} duration={1000} data-testid="autoplay-carousel" />
