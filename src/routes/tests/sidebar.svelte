<script>
	import { Sidebar } from '$lib/index';
	import { ChartPieSolid, ShoppingBagSolid, TableSolid, InboxInSolid, UserSolid, LoginSolid, CogSolid } from 'svelte-heros';
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
			icon: ChartPieSolid
		},
		{
			id: uid++,
			name: 'E-commerce',
			icon: ShoppingBagSolid,
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
			icon: TableSolid,
			href: '/'
		},
		{
			id: uid++,
			name: 'Inbox',
			icon: InboxInSolid,
			href: '/'
		},
		{
			id: uid++,
			name: 'Users',
			icon: UserSolid,
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
			icon: LoginSolid,
			href: '/'
		},
		{
			id: uid++,
			name: 'Setting',
			icon: CogSolid,
			href: '/'
		}
	];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Sidebar</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Example</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
	<Sidebar {links} {site} />
</div>
