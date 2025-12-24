<script lang="ts">
  import Card from "$lib/card/Card.svelte";
  import { TEST_IMAGE_SVG } from "../fixtures/test-images";
</script>

<Card horizontal={true} reverse={true} img={TEST_IMAGE_SVG}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight">Horizontal Reversed Card</h5>
  <p class="font-normal">This card has horizontal layout with image on the right.</p>
</Card>
