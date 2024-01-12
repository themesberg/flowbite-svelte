<script>
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';
	import {
		ChartPieSolid,
		GridSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketSolid,
		FileEditSolid,
		ShoppingCartSolid,
		FireSolid,
		BookSolid,
		WindowRestoreOutline
	} from 'flowbite-svelte-icons';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	import HighlightCompo from '../components/HighlightCompo.svelte';

	import defaultSidebar from './md/default.md?raw';
	import multiLevel from './md/multiLevel.md?raw';
	import contentSeparator from './md/contentSeparator.md?raw';
</script>

<h1>Sidebar</h1>

<Sidebar>
	<SidebarGroup>
		<SidebarItem label="Dashboard" href="/">
			{#snippet icon()}
				<ChartPieSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
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
		<SidebarItem label="Sidebar" href="/sidebar">
			{#snippet icon()}
				<UserSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
	</SidebarGroup>
</Sidebar>

<HighlightCompo code={defaultSidebar} />

<h2>Multi-level dropdown</h2>

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

<HighlightCompo code={multiLevel} />

<h2>Content separator</h2>

<Sidebar>
	<SidebarGroup>
		<SidebarItem label="Dashboard" href="/">
			{#snippet icon()}
				<ChartPieSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
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
		<SidebarItem label="Sidebar" href="/sidebar">
			{#snippet icon()}
				<UserSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
	</SidebarGroup>
	<SidebarGroup border>
		<SidebarItem label="Upgrade to Pro">
			{#snippet icon()}
				<FireSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Documentation">
			{#snippet icon()}
				<BookSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Components">
			{#snippet icon()}
				<WindowRestoreOutline
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
	</SidebarGroup>
</Sidebar>

<HighlightCompo code={contentSeparator} />
