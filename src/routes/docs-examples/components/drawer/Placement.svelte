<script lang="ts">
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let open5 = $state(false);
  let placement: "right" | "left" | "top" | "bottom" = $state("right");
</script>

<div class="text-center">
  <Button onclick={() => ((placement = "top"), (open5 = true))}>Top drawer</Button>
  <div class="my-2 space-x-6">
    <Button onclick={() => ((placement = "left"), (open5 = true))}>Left drawer</Button>
    <Button onclick={() => ((placement = "right"), (open5 = true))}>Right drawer</Button>
  </div>
  <Button onclick={() => ((placement = "bottom"), (open5 = true))}>Bottom drawer</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>

<Drawer {placement} bind:open={open5}>
  <h5 class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-2">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>
