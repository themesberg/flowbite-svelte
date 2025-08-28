<script>
  import { Card, Button, Rating, Badge } from "flowbite-svelte";
</script>

<Card class="p-0">
  <a href="/">
    <img class="rounded-t-lg p-8" src="/images/product-1.webp" alt="product 1" />
  </a>
  <div class="px-5 pb-5">
    <a href="/">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
    </a>
    <Rating rating={4} size={24} class="mt-2.5 mb-5">
      {#snippet text()}
        <Badge class="ms-3">4</Badge>
      {/snippet}
    </Rating>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <Button href="/">Buy now</Button>
    </div>
  </div>
</Card>
