<script lang="ts">
  import Card from "$lib/card/Card.svelte";
</script>

<Card img="https://invalid-url.com/non-existent-image.jpg">
  <h5 class="mb-2 text-2xl font-bold tracking-tight">Card with Invalid Image</h5>
  <p class="font-normal">This card has an invalid image URL that should handle errors gracefully.</p>
</Card>
