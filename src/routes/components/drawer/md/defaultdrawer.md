<script>
  import { Drawer, Button } from 'svelte-5-ui-lib'
  import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
    
  const drawerA = uiHelpers();
	let drawerStatusA = $state(false);
	const closeDrawerA = drawerA.close;

  $effect(() => {
		drawerStatusA = drawerA.isOpen;
	});

</script>

<div class="text-center">
    <Button onclick={drawerA.toggle}>Show drawer</Button>
</div>

<Drawer drawerStatus={drawerStatusA} closeDrawer={closeDrawerA}  {transitionParams}>
    <div class="flex items-center">
        <h5 id="drawer-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <InfoCircleSolid class="w-4 h-4 me-2.5" />Info
        </h5>
        <button type="button" onclick={closeDrawerA} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
        </button>
      </div>
      <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline dark:text-primary-500 hover:no-underline"> limited-time sale </a>
        for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
      </p>
      <div class="grid grid-cols-2 gap-4">
        <Button color="light" href="/">Learn more</Button>
        <Button href="/" btnclass="px-4">Get access <ArrowRightOutline class="w-3.5 h-3.5 ms-2" /></Button>
      </div>    
</Drawer>