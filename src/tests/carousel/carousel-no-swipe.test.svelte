<script lang="ts">
  import { Carousel } from "$lib";
  import { testImages } from "./testData.js";
</script>

<Carousel images={testImages} disableSwipe={true} data-testid="no-swipe-carousel" />
