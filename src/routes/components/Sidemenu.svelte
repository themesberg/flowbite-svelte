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


<Sidebar class="hidden lg:block fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block">
	<SidebarGroup>
		<SidebarDropdownItem href='/banner'>Banner</SidebarDropdownItem>
		<SidebarDropdownItem href='/breadcrumb'>Breadcrumb</SidebarDropdownItem>
		<SidebarDropdownItem href='/button'>Button</SidebarDropdownItem>
		<SidebarDropdownItem href='/card'>Card</SidebarDropdownItem>
		<SidebarDropdownItem href='/darkmode'>Darkmode</SidebarDropdownItem>
		<SidebarDropdownItem href='/drawer'>Drawer</SidebarDropdownItem>
		<SidebarDropdownItem href='/dropdown'>Dropdown</SidebarDropdownItem>
	</SidebarGroup>
</Sidebar>
