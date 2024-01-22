<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode, 
		Drawer,
		Button,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';
	import {
		InfoCircleSolid,
		ArrowRightOutline,
		ChartPieSolid,
		GridSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketSolid,
		FileEditSolid,
		ShoppingCartSolid,
        BarsSolid
	} from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
    let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

    const drawer = uiHelpers();
	let drawerStatus = $state(false);
	const closeDrawer = drawer.close;

    $effect(() => {
		drawerStatus = drawer.isOpen;
	});
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});
</script>

<header
	class="sticky top-0 z-40 mx-auto w-full pl-4 lg:pl-8 flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900"
>
	<Navbar {toggleNav} {closeNav} {navStatus} fluid breakPoint="xxl">
		{#snippet brand()}

<BarsSolid onclick={drawer.toggle} class="h-5 w-5 z-50 mr-4 mt-1 lg:hidden"/>

			<NavBrand siteName="Svelte 5 UI lib" {closeNav}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>
			<div class="ms-auto flex items-center">
				<Darkmode />
			</div>
		{/snippet}

		<NavUl>
			<NavLi href="/" {closeNav}>Home</NavLi>
			<NavLi href="/banner" {closeNav}>Banner</NavLi>
			<NavLi href="/breadcrumb" {closeNav}>Breadcrumb</NavLi>
			<NavLi href="/button" {closeNav}>Button</NavLi>
			<NavLi href="/card" {closeNav}>Card</NavLi>
			<NavLi href="/darkmode" {closeNav}>Darkmode</NavLi>
			<NavLi href="/dropdown" {closeNav}>Dropdown</NavLi>
			<NavLi href="/footer" {closeNav}>Footer</NavLi>
			<NavLi href="/indicator" {closeNav}>Indicator</NavLi>
			<NavLi href="/kbd" {closeNav}>Kbd</NavLi>
			<NavLi href="/navbar" {closeNav}>Navbar</NavLi>
			<NavLi href="/progress" {closeNav}>Progress</NavLi>
			<NavLi href="/forms/select" {closeNav}>Select</NavLi>
			<NavLi href="/sidebar" {closeNav}>Sidebar</NavLi>
			<NavLi href="/skeleton" {closeNav}>Skeleton</NavLi>
			<NavLi href="/spinner" {closeNav}>Spinner</NavLi>
		</NavUl>
	</Navbar>
</header>



<Drawer leftOffset="top-16 h-screen start-0" width="48" drawerStatus={drawerStatus} closeDrawer={closeDrawer} {transitionParams}>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			<InfoCircleSolid class="me-2.5 h-4 w-4" />Menu
		</h5>
		<button
			type="button"
			onclick={closeDrawer}
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