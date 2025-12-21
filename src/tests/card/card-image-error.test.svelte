<script lang="ts">
  import Card from "$lib/card/Card.svelte";
  import { TEST_IMAGE_INVALID } from "../fixtures/test-images";
</script>

<Card img={TEST_IMAGE_INVALID}>
  <h5 class="mb-2 text-2xl font-bold tracking-tight">Card with Invalid Image</h5>
  <p class="font-normal">This card has an invalid image URL that should handle errors gracefully.</p>
</Card>
