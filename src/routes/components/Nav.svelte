<script>
	import {
		Navbar,
		NavLi,
		NavBrand,
		NavUl,
		uiHelpers,
		Darkmode,
		Drawer,
		Button,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';

	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	const navDrawer = uiHelpers();
	let navDrawerStatus = $state(false);
	const closeNavDrawer = navDrawer.close;

	// let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		navDrawerStatus = navDrawer.isOpen;
		navStatus = nav.isOpen;
	});
	const navClass = 'w-full divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-950 sm:px-4'
	const ulClass =
    'flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium xl:gap-4 dark:lg:bg-transparent lg:bg-white border-0';
 
</script>

<header
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-950 lg:pl-4"
>
	<Navbar {toggleNav} {closeNav} {navStatus} {navClass} fluid breakPoint="lg" divChildrenClass="ml-auto w-full">
		{#snippet brand()}
			<button
				onclick={navDrawer.toggle}
				type="button"
				class="z-50 mr-4 mt-1 lg:hidden"
				aria-controls="navbar-default"
			>
				<span class="sr-only">Open drawer menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
			<NavBrand siteName="Svelte 5 UI lib" {closeNav}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>

			<div class="flex items-center ml-auto lg:order-1">
				<Darkmode />
			</div>
		{/snippet}

		<NavUl {ulClass}>
			<NavLi href="/" {closeNav}>Home</NavLi>
			<NavLi href="https://github.com/shinokada/svelte-5-ui-lib" {closeNav}>Repo</NavLi>
		</NavUl>
	</Navbar>
</header>

<Drawer width='64' drawerStatus={navDrawerStatus} closeDrawer={closeNavDrawer} {transitionParams}>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-4 inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"
		>
			Svelte 5 UI Lib
		</h5>
		<button
			type="button"
			onclick={closeNavDrawer}
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
			<span class="sr-only">Close drawer</span>
		</button>
	</div>
	<Sidebar class='w-48 p-0'>
		<SidebarGroup>
			<SidebarItem onclick={closeNavDrawer} label="Banner" href="/banner" />
			<SidebarItem onclick={closeNavDrawer} label="Breadcrumb" href="/breadcrumb" />
			<SidebarItem onclick={closeNavDrawer} label="Button" href="/button" />
			<SidebarItem onclick={closeNavDrawer} label="Card" href="/card" />
			<SidebarItem onclick={closeNavDrawer} label="Drawer" href="/drawer" />
			<SidebarItem onclick={closeNavDrawer} label="Darkmode" href="darkmode" />
			<SidebarItem onclick={closeNavDrawer} label="Dropdown" href="/dropdown" />
			<SidebarItem onclick={closeNavDrawer} label="Footer" href="/footer" />
			<SidebarItem onclick={closeNavDrawer} label="Indicator" href="/indicator" />
			<SidebarItem onclick={closeNavDrawer} label="Kbd" href="/kbd" />
			<SidebarItem onclick={closeNavDrawer} label="Navbar" href="/navbar" />
			<SidebarItem onclick={closeNavDrawer} label="Progress" href="/progress" />
			<SidebarItem onclick={closeNavDrawer} label="Sidebar" href="/sidebar" />
			<SidebarItem onclick={closeNavDrawer} label="Skeleton" href="/skeleton" />
			<SidebarItem onclick={closeNavDrawer} label="Spinner" href="/spinner" />
			<SidebarDropdownWrapper label="Forms">
				<SidebarDropdownItem onclick={closeNavDrawer} href="/forms/select"
					>Select</SidebarDropdownItem
				>
			</SidebarDropdownWrapper>
		</SidebarGroup>
	</Sidebar>
</Drawer>
