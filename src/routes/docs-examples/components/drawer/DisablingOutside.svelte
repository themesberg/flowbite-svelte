<script>
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  let open10 = $state(false);
  let outsideclose = false;
</script>

<div class="text-center">
  <Button onclick={() => (open10 = true)}>Show drawer</Button>
</div>

<Drawer {outsideclose} bind:open={open10} id="sidebar10">
  <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
  </h5>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
</Drawer>
