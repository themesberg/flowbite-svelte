<script>
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';
	let currentUrl = $page.url.pathname;
	$effect(() => {
		currentUrl = $page.url.pathname;
	});
	const hasPath = (key) => currentUrl.includes(key);
	// console.log(hasPath('typography'))
</script>

<Sidebar
	asideclass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible bg-gray-100 dark:bg-gray-900 lg:pt-0 lg:block hidden"
	divclass="dark:bg-gray-900 bg-transparent"
>
	<SidebarGroup>
		<SidebarDropdownWrapper label="Components" isOpen={hasPath('components')}>
			<SidebarDropdownItem label="Avatar" href="/components/avatar" />
			<SidebarDropdownItem label="Banner" href="/components/banner" />
			<SidebarDropdownItem label="Breadcrumb" href="/components/breadcrumb" />
			<SidebarDropdownItem label="Button" href="/components/button" />
			<SidebarDropdownItem label="Button group" href="/components/button-group" />
			<SidebarDropdownItem label="Card" href="/components/card" />
			<SidebarDropdownItem label="Drawer" href="/components/drawer" />
			<SidebarDropdownItem label="Darkmode" href="/components/darkmode" />
			<SidebarDropdownItem label="Dropdown" href="/components/dropdown" />
			<SidebarDropdownItem label="Footer" href="/components/footer" />
			<SidebarDropdownItem label="Gallery" href="/components/gallery" />
			<SidebarDropdownItem label="Indicator" href="/components/indicator" />
			<SidebarDropdownItem label="Kbd" href="/components/kbd" />
			<SidebarDropdownItem label="List group" href="/components/list-group" />
			<SidebarDropdownItem label="Navbar" href="/components/navbar" />
			<SidebarDropdownItem label="Progress" href="/components/progress" />
			<SidebarDropdownItem label="Rating" href="/components/rating" />
			<SidebarDropdownItem label="Sidebar" href="/components/sidebar" />
			<SidebarDropdownItem label="Skeleton" href="/components/skeleton" />
			<SidebarDropdownItem label="Spinner" href="/components/spinner" />
			<SidebarDropdownItem label="Video" href="/components/video" />
		</SidebarDropdownWrapper>
		<SidebarDropdownWrapper label="Forms" isOpen={hasPath('forms')}>
			<SidebarDropdownItem label="Radio" href="/forms/radio" />
			<SidebarDropdownItem label="Range" href="/forms/range" />
			<SidebarDropdownItem label="Select" href="/forms/select" />
		</SidebarDropdownWrapper>
		<SidebarDropdownWrapper label="Typography" isOpen={hasPath('typography')}>
			<SidebarDropdownItem label="Blockquote" href="/typography/blockquote" />
			<SidebarDropdownItem label="Heading/Span/Mark" href="/typography/heading" />
			<SidebarDropdownItem label="HR" href="/typography/hr" />
			<SidebarDropdownItem label="Link" href="/typography/link" />
			<SidebarDropdownItem label="List" href="/typography/list" />
			<SidebarDropdownItem label="Paragraph" href="/typography/paragraph" />
		</SidebarDropdownWrapper>
	</SidebarGroup>
</Sidebar>
