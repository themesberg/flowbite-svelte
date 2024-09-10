<script lang="ts">
  import { Button, Drawer, Drawerhead, uiHelpers } from '$lib';
  import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
  const drawerMouseEnter = uiHelpers();
  let drawerStatusMouseEnter = $state(false);
  const closeDrawerMouseEnter = drawerMouseEnter.close;
  $effect(() => {
    drawerStatusMouseEnter = drawerMouseEnter.isOpen;
  });
</script>

<div class="text-center">
  <Button onmouseenter={drawerMouseEnter.toggle}>Show drawer</Button>
</div>

<Drawer drawerStatus={drawerStatusMouseEnter} closeDrawer={closeDrawerMouseEnter}>
  <Drawerhead onclick={closeDrawerMouseEnter}>
    <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-4 w-4" />Info
    </h5>
  </Drawerhead>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500">limited-time sale</a>
    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button>
  </div>
</Drawer>