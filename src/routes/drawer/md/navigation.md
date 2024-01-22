<script>
    import { Drawer, Button, uiHelpers, Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, SidebarDropdownItem } from 'svelte-5-ui-lib'
    import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

    const drawerB = uiHelpers();
	let drawerStatusB = $state(false);
	const closeDrawerB = drawerB.close;

	$effect(() => {
		drawerStatusB = drawerB.isOpen;
	});
</script>


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
					<ChartPieSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				{/snippet}
			</SidebarItem>
			<SidebarDropdownWrapper label="E-commerce">
				{#snippet icon()}
					<ShoppingCartSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				{/snippet}
				<SidebarDropdownItem>Products</SidebarDropdownItem>
				<SidebarDropdownItem>Billing</SidebarDropdownItem>
				<SidebarDropdownItem>Invoice</SidebarDropdownItem>
			</SidebarDropdownWrapper>
			<SidebarItem label="Kanban" {spanClass}>
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
			<SidebarItem label="Inbox" {spanClass}>
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
					<FileEditSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				{/snippet}
			</SidebarItem>
		</SidebarGroup>
	</Sidebar>
</Drawer>

