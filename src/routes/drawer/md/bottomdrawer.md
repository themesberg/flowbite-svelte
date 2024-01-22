<script>
    import { Drawer, Button } from 'svelte-5-ui-lib'
    import { sineIn } from 'svelte/easing';

	let transitionParamsBottom = {
		y: 320,
		duration: 200,
		easing: sineIn
	};

	const drawerF = uiHelpers();
	let drawerStatusF = $state(false);
	const closeDrawerF = drawerF.close;

    $effect(() => {
		drawerStatusF = drawerF.isOpen;
	});
</script>


<div class="text-center">
	<Button onclick={drawerF.toggle}>Show drawer</Button>
</div>
<Drawer
	placement="bottom"
	transitionType="fly"
	width="w-full"
	drawerStatus={drawerStatusF}
	closeDrawer={closeDrawerF}
	transitionParams={transitionParamsBottom}
>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			<InfoCircleSolid class="me-2.5 h-4 w-4" />Info
		</h5>
		<button
			type="button"
			onclick={closeDrawerF}
			class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
			data-modal-hide="default-modal"
		>
			<svg
				class="h-3 w-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
				/>
			</svg>
			<span class="sr-only">Close modal</span>
		</button>
	</div>
	<p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
		Supercharge your hiring by taking advantage of our <a
			href="/"
			class="text-primary-600 underline hover:no-underline dark:text-primary-500"
		>
			limited-time sale
		</a>
		for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
		job board.
	</p>
	<div class="grid grid-cols-2 gap-4">
		<Button color="light" href="/">Learn more</Button>
		<Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button>
	</div>
</Drawer>