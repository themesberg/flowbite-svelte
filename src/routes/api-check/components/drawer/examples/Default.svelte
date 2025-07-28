<script>
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";
  let hidden1 = $state(true);
</script>

<div class="text-center">
  <Button onclick={() => (hidden1 = false)}>Show drawer</Button>
</div>

<Drawer bind:hidden={hidden1} id="sidebar1" aria-controls="sidebar1" aria-labelledby="sidebar1">
  <div class="flex items-center justify-between">
    <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-5 w-5" />Info
    </h5>
    <CloseButton onclick={() => (hidden1 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 dark:text-primary-500 underline hover:no-underline">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
  </div>
</Drawer>