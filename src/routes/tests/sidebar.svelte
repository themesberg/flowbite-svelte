<script>
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import {
		Sidebar,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from '$lib/index';

	import {
		ChartPie,
		InboxIn,
		User,
		Login,
		Cog,
		ShoppingCart,
		ClipboardList,
		Collection,
		Support,
		ViewGrid,
		Star,
		X
	} from 'svelte-heros';

	let site = {
		name: 'Flowbite-Svelte',
		href: '/',
		img: '/images/flowbite-svelte-icon-logo.svg'
	};

	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sidebar</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Example</h2>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Kanban" {spanClass}>
					<svelte:fragment slot="icon">
						<ViewGrid />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxIn />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users">
					<svelte:fragment slot="icon">
						<User />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<Login />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<Cog />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarDropdownWrapper label="E-commerce">
					<svelte:fragment slot="icon">
						<ShoppingCart />
					</svelte:fragment>
					<SidebarDropdownItem label="Products" />
					<SidebarDropdownItem label="Billing" />
					<SidebarDropdownItem label="Invoice" />
				</SidebarDropdownWrapper>

				<SidebarItem label="Kanban" {spanClass}>
					<svelte:fragment slot="icon">
						<ViewGrid />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxIn />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users">
					<svelte:fragment slot="icon">
						<User />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<Login />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<Cog />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Kanban" {spanClass}>
					<svelte:fragment slot="icon">
						<ViewGrid />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxIn />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users">
					<svelte:fragment slot="icon">
						<User />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<Login />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<Cog />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
			<SidebarGroup border>
				<SidebarItem label="Upgrade to Pro">
					<svelte:fragment slot="icon">
						<Star />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Documentation">
					<svelte:fragment slot="icon">
						<ClipboardList />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Components">
					<svelte:fragment slot="icon">
						<Collection />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Help">
					<svelte:fragment slot="icon">
						<Support />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Kanban" {spanClass}>
					<svelte:fragment slot="icon">
						<ViewGrid />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxIn />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users">
					<svelte:fragment slot="icon">
						<User />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<Login />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<Cog />
					</svelte:fragment>
				</SidebarItem>
				<SidebarCta label="Beta">
					<svelte:fragment slot="icon">
						<button
							type="button"
							class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
							data-collapse-toggle="dropdown-cta"
							aria-label="Close"
						>
							<span class="sr-only">Close</span>
							<X />
						</button>
					</svelte:fragment>
					<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
						Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
						limited time in your profile.
					</p>
					<a
						class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
						href="/">Turn new navigation off</a
					>
				</SidebarCta>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarBrand {site} />
				<SidebarItem label="Dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Kanban" {spanClass}>
					<svelte:fragment slot="icon">
						<ViewGrid />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxIn />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users">
					<svelte:fragment slot="icon">
						<User />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<Login />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<Cog />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>
