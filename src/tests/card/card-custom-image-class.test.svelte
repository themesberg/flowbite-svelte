<script lang="ts">
  import Card from "$lib/card/Card.svelte";
  import { TEST_IMAGE_SVG } from "../fixtures/test-images";
</script>

<Card classes={{ image: "custom-image-class" }} img={TEST_IMAGE_SVG}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight">Card with Custom Image Class</h5>
  <p class="font-normal">This card has custom classes applied to the image.</p>
</Card>
