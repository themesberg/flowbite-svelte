<script>
	import {
		Drawer,
		Button,
		uiHelpers,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';
	import {
		InfoCircleSolid,
		ArrowRightOutline,
		ChartSolid,
		GridSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketSolid,
		EditSolid,
		ShoppingBagSolid
	} from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';

	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import H3 from '../../utils/H3.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	let transitionParamsRight = {
		x: 320,
		duration: 200,
		easing: sineIn
	};

	let transitionParamsTop = {
		y: -320,
		duration: 200,
		easing: sineIn
	};

	let transitionParamsBottom = {
		y: 320,
		duration: 200,
		easing: sineIn
	};

	const drawerA = uiHelpers();
	let drawerStatusA = $state(false);
	const closeDrawerA = drawerA.close;

	const drawerB = uiHelpers();
	let drawerStatusB = $state(false);
	const closeDrawerB = drawerB.close;

	const drawerC = uiHelpers();
	let drawerStatusC = $state(false);
	const closeDrawerC = drawerC.close;

	const drawerD = uiHelpers();
	let drawerStatusD = $state(false);
	const closeDrawerD = drawerD.close;

	const drawerE = uiHelpers();
	let drawerStatusE = $state(false);
	const closeDrawerE = drawerE.close;

	const drawerF = uiHelpers();
	let drawerStatusF = $state(false);
	const closeDrawerF = drawerF.close;

	const drawerG = uiHelpers();
	let drawerStatusG = $state(false);
	const closeDrawerG = drawerG.close;

	const drawerH = uiHelpers();
	let drawerStatusH = $state(false);
	const closeDrawerH = drawerH.close;

	const drawerI = uiHelpers();
	let drawerStatusI = $state(false);
	const closeDrawerI = drawerI.close;

	const drawerJ = uiHelpers();
	let drawerStatusJ = $state(false);
	const closeDrawerJ = drawerJ.close;

	const drawerK = uiHelpers();
	let drawerStatusK = $state(false);
	const closeDrawerK = drawerK.close;

	$effect(() => {
		drawerStatusA = drawerA.isOpen;
		drawerStatusB = drawerB.isOpen;
		drawerStatusC = drawerC.isOpen;
		drawerStatusD = drawerD.isOpen;
		drawerStatusE = drawerE.isOpen;
		drawerStatusF = drawerF.isOpen;
		drawerStatusG = drawerG.isOpen;
		drawerStatusH = drawerH.isOpen;
		drawerStatusI = drawerI.isOpen;
		drawerStatusJ = drawerJ.isOpen;
		drawerStatusK = drawerK.isOpen;
	});
	let spanclass = 'flex-1 ms-3 whitespace-nowrap';
</script>

<H1>Drawer</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default drawer</H2>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerA.toggle}>Show drawer</Button>
	</div>

	<Drawer drawerStatus={drawerStatusA} closeDrawer={closeDrawerA} {transitionParams}>
		<div class="flex items-center">
			<h5
				id="drawer-label"
				class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
			>
				<InfoCircleSolid class="me-2.5 h-4 w-4" />Info
			</h5>
			<button
				type="button"
				onclick={closeDrawerA}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultdrawer.md']} />

<H2>Drawer navigation</H2>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerB.toggle}>Show navigation</Button>
	</div>

	<Drawer drawerStatus={drawerStatusB} closeDrawer={closeDrawerB} {transitionParams}>
		<div class="flex items-center">
			<h5
				id="drawer-label"
				class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
			>
				<InfoCircleSolid class="me-2.5 h-4 w-4" />Menu
			</h5>
			<button
				type="button"
				onclick={closeDrawerB}
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
		<Sidebar>
			<SidebarGroup>
				<SidebarItem label="Dashboard">
					{#snippet icon()}
						<ChartSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
				</SidebarItem>
				<SidebarDropdownWrapper label="E-commerce">
					{#snippet icon()}
						<ShoppingBagSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
					<SidebarDropdownItem>Products</SidebarDropdownItem>
					<SidebarDropdownItem>Billing</SidebarDropdownItem>
					<SidebarDropdownItem>Invoice</SidebarDropdownItem>
				</SidebarDropdownWrapper>
				<SidebarItem label="Kanban" {spanclass}>
					{#snippet icon()}
						<GridSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
					{#snippet subtext()}
						<span
							class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
						>
							Pro
						</span>
					{/snippet}
				</SidebarItem>
				<SidebarItem label="Inbox" {spanclass}>
					{#snippet icon()}
						<MailBoxSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
					{#snippet subtext()}
						<span
							class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
						>
							3
						</span>
					{/snippet}
				</SidebarItem>
				<SidebarItem label="Users">
					{#snippet icon()}
						<UserSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
				</SidebarItem>
				<SidebarItem label="Sign In">
					{#snippet icon()}
						<ArrowRightToBracketSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
				</SidebarItem>
				<SidebarItem label="Sign Up">
					{#snippet icon()}
						<EditSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					{/snippet}
				</SidebarItem>
			</SidebarGroup>
		</Sidebar>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/navigation.md']} />

<H2>Placement</H2>

<H3>Left drawer</H3>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerC.toggle}>Show drawer</Button>
	</div>
	<Drawer
		placement="left"
		transitionType="fly"
		drawerStatus={drawerStatusC}
		closeDrawer={closeDrawerC}
		{transitionParams}
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
				onclick={closeDrawerC}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/leftdrawer.md']} />

<H3>Right drawer</H3>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerD.toggle}>Show drawer</Button>
	</div>
	<Drawer
		placement="right"
		transitionType="fly"
		drawerStatus={drawerStatusD}
		closeDrawer={closeDrawerD}
		transitionParams={transitionParamsRight}
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
				onclick={closeDrawerD}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/rightdrawer.md']} />

<H3>Top drawer</H3>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerE.toggle}>Show drawer</Button>
	</div>
	<Drawer
		placement="top"
		transitionType="fly"
		width="w-full"
		drawerStatus={drawerStatusE}
		closeDrawer={closeDrawerE}
		transitionParams={transitionParamsTop}
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
				onclick={closeDrawerE}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/topdrawer.md']} />

<H3>Bottom drawer</H3>

<CodeWrapper>
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/bottomdrawer.md']} />

<H2>Backdrop</H2>

<H3>Enabled (default)</H3>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerG.toggle}>Show drawer</Button>
	</div>

	<Drawer
		backdrop={true}
		drawerStatus={drawerStatusG}
		closeDrawer={closeDrawerG}
		{transitionParams}
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
				onclick={closeDrawerG}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/backdrop.md']} />

<H3>Disabled</H3>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerH.toggle}>Show drawer</Button>
	</div>

	<Drawer
		backdrop={false}
		drawerStatus={drawerStatusH}
		closeDrawer={closeDrawerH}
		{transitionParams}
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
				onclick={closeDrawerH}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/backdropdisabled.md']} />

<H2>Offset position</H2>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerK.toggle}>Show drawer</Button>
	</div>

	<Drawer
		leftOffset="top-16 h-screen start-0"
		drawerStatus={drawerStatusK}
		closeDrawer={closeDrawerK}
		{transitionParams}
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
				onclick={closeDrawerA}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/offset.md']} />

<H2>Disabling outside click and backdrop</H2>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerI.toggle}>Show drawer</Button>
	</div>

	<Drawer
		activateClickOutside={false}
		backdrop={false}
		drawerStatus={drawerStatusI}
		closeDrawer={closeDrawerI}
		{transitionParams}
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
				onclick={closeDrawerI}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/disabling-outside-click-and-backdrop.md']} />

<H2>Disabling only outside click</H2>

<CodeWrapper>
	<div class="text-center">
		<Button onclick={drawerJ.toggle}>Show drawer</Button>
	</div>

	<Drawer
		activateClickOutside={false}
		drawerStatus={drawerStatusJ}
		closeDrawer={closeDrawerJ}
		{transitionParams}
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
				onclick={closeDrawerJ}
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
			<Button href="/" btnclass="px-4"
				>Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button
			>
		</div>
	</Drawer>
</CodeWrapper>

<HighlightCompo code={modules['./md/disabling-outside-click.md']} />
