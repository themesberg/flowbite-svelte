<script>
	import ExampleDiv from '../utils/ExampleDiv.svelte';
	import { Sidebar, SidebarItem } from '$lib/index';
	import { ChartPie, ShoppingBag, Table, InboxIn, User, Login, Cog } from 'svelte-heros';
	let site = {
		name: 'Flowbite-Svelte',
		href: '/',
		img: '/images/flowbite-svelte-logo-30.png'
	};
	let uid = 1;
	let links = [
		{
			id: uid++,
			name: 'Dashboard',
			href: '/',
			icon: ChartPie
		},
		{
			id: uid++,
			name: 'E-commerce',
			icon: ShoppingBag,
			children: [
				{
					id: uid++,
					name: 'Product',
					href: '/'
				},
				{
					id: uid++,
					name: 'Billing',
					href: '/'
				},
				{
					id: uid++,
					name: 'Invoice',
					href: '/'
				}
			]
		},
		{
			id: uid++,
			name: 'Kanban',
			icon: Table,
			href: '/'
		},
		{
			id: uid++,
			name: 'Inbox',
			icon: InboxIn,
			href: '/'
		},
		{
			id: uid++,
			name: 'Users',
			icon: User,
			children: [
				{
					id: uid++,
					name: 'Sign In',
					href: '/'
				},
				{
					id: uid++,
					name: 'Sign Out',
					href: '/'
				},
				{
					id: uid++,
					name: 'Profile',
					href: '/'
				}
			]
		},
		{
			id: uid++,
			name: 'Sign In',
			icon: Login,
			href: '/'
		},
		{
			id: uid++,
			name: 'Setting',
			icon: Cog,
			href: '/'
		}
	];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sidebar</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Example</h2>

<ExampleDiv>
	<Sidebar {site}>
		<SidebarItem {links} />
	</Sidebar>
</ExampleDiv>
