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
		ChartPieSolid,
		GridSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketSolid,
		FileEditSolid,
		ShoppingCartSolid,
        BarsSolid
	} from 'flowbite-svelte-icons';
	// import { sineIn } from 'svelte/easing';
    // let transitionParams = {
	// 	x: -320,
	// 	duration: 200,
	// 	easing: sineIn
	// };

    // const drawer = uiHelpers();
	// let drawerStatus = $state(false);
	// const closeDrawer = drawer.close;

    // $effect(() => {
	// 	drawerStatus = drawer.isOpen;
	// });
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
</script>


<Sidebar class='fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 bg-gray-800 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden'>
	<SidebarGroup>
		<SidebarItem label="Banner" href='/banner'/>
		<SidebarItem label="Breadcrumb" href='/breadcrumb'/>
		<SidebarItem label="Button" href='/button'/>
		<SidebarItem label="Card" href='/card'/>
		<SidebarItem label="Drawer" href='/drawer'/>
		<SidebarItem label="Darkmode" href='darkmode'/>
		<SidebarItem label="Dropdown" href='/dropdown'/>
		<SidebarItem label="Footer" href='/footer'/>
		<SidebarItem label="Indicator" href='/indicator'/>
		<SidebarItem label="Kbd" href='/kbd'/>
		<SidebarItem label="Navbar" href='/navbar'/>
		<SidebarItem label="Progress" href='/progress'/>
		<SidebarItem label="Sidebar" href='/sidebar'/>
		<SidebarItem label="Skeleton" href='/skeleton'/>
		<SidebarItem label="Spinner" href='/spinner'/>
		<SidebarDropdownWrapper label="Forms">
			<SidebarDropdownItem  href='/forms/select'>Select</SidebarDropdownItem>

		</SidebarDropdownWrapper>
		
	</SidebarGroup>
</Sidebar>

