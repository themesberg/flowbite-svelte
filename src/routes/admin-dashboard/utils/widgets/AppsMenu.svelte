<script>
	import { MegaMenu, ToolbarButton } from 'flowbite-svelte';
	import {
		ArchiveSolid,
		ArrowRightToBracketOutline,
		CogOutline,
		DollarOutline,
		GridSolid,
		InboxOutline,
		ProfileCardOutline,
		SalePercentOutline,
		ShoppingBagSolid,
		UsersGroupSolid
	} from 'flowbite-svelte-icons';

	const menu = [
		{ name: 'Sales', href: '/sales', icon: ShoppingBagSolid },
		{ name: 'Users', href: '/users', icon: UsersGroupSolid },
		{ name: 'Inbox', href: '/inbox', icon: InboxOutline },
		{ name: 'Profile', href: '/profile', icon: ProfileCardOutline },
		{ name: 'Settings', href: '/settings', icon: CogOutline },
		{ name: 'Prouducts', href: '/products', icon: ArchiveSolid },
		{ name: 'Pricing', href: '/pricing', icon: DollarOutline },
		{ name: 'Billing', href: '/billing', icon: SalePercentOutline },
		{ name: 'Logout', href: '/logout', icon: ArrowRightToBracketOutline }
	];
</script>

<ToolbarButton size="lg" class="-mx-0.5 hover:text-gray-900 dark:hover:text-white">
	<GridSolid size="lg" />
</ToolbarButton>
<MegaMenu items={menu} let:item>
	<a
		href={item.href}
		class="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
	>
		<svelte:component
			this={item.icon}
			class="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400"
		/>
		<div class="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
	</a>
</MegaMenu>
