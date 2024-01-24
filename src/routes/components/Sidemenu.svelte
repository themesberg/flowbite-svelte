<script>
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';
</script>

<Sidebar
	asideclass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible bg-gray-100 dark:bg-gray-900 lg:pt-0 lg:block hidden"
	divclass="dark:bg-gray-900 bg-transparent"
>
	<SidebarGroup>
		<SidebarDropdownWrapper label="Components">
			<SidebarItem label="Banner" href="/banner" />
			<SidebarItem label="Breadcrumb" href="/breadcrumb" />
			<SidebarItem label="Button" href="/button" />
			<SidebarItem label="Card" href="/card" />
			<SidebarItem label="Drawer" href="/drawer" />
			<SidebarItem label="Darkmode" href="darkmode" />
			<SidebarItem label="Dropdown" href="/dropdown" />
			<SidebarItem label="Footer" href="/footer" />
			<SidebarItem label="Indicator" href="/indicator" />
			<SidebarItem label="Kbd" href="/kbd" />
			<SidebarItem label="Navbar" href="/navbar" />
			<SidebarItem label="Progress" href="/progress" />
			<SidebarItem label="Sidebar" href="/sidebar" />
			<SidebarItem label="Skeleton" href="/skeleton" />
			<SidebarItem label="Spinner" href="/spinner" />
		</SidebarDropdownWrapper>
		<SidebarDropdownWrapper label="Forms">
			<SidebarDropdownItem href="/forms/select">Select</SidebarDropdownItem>
		</SidebarDropdownWrapper>
		<SidebarDropdownWrapper label="Typography">
			<SidebarDropdownItem href="/typography/blockquote">Blockquote</SidebarDropdownItem>
			<SidebarDropdownItem href="/typography/heading">Heading/Span/Mark</SidebarDropdownItem>
			<SidebarDropdownItem href="/typography/hr">HR</SidebarDropdownItem>
			<SidebarDropdownItem href="/typography/link">Link</SidebarDropdownItem>
			<SidebarDropdownItem href="/typography/paragraph">Paragraph</SidebarDropdownItem>
		</SidebarDropdownWrapper>
	</SidebarGroup>
</Sidebar>
