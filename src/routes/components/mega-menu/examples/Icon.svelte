<script>
	import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, uiHelpers } from '$lib';
	import { ChevronDownOutline, UserCircleOutline } from 'flowbite-svelte-icons';
	let menu = [
		{ name: 'About us', href: '/about', Icon: UserCircleOutline },
		{ name: 'Blog', href: '/blog', Icon: UserCircleOutline },
		{ name: 'Contact us', href: '/contact', Icon: UserCircleOutline },
		{ name: 'Library', href: '/library', Icon: UserCircleOutline },
		{ name: 'Newsletter', href: '/news', Icon: UserCircleOutline },
		{ name: 'Support Center', href: '/support', Icon: UserCircleOutline },
		{ name: 'Resources', href: '/resource', Icon: UserCircleOutline },
		{ name: 'Playground', href: '/play', Icon: UserCircleOutline },
		{ name: 'Terms', href: '/tersm', Icon: UserCircleOutline },
		{ name: 'Pro Version', href: '/pro', Icon: UserCircleOutline },
		{ name: 'License', href: '/license', Icon: UserCircleOutline }
	];
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let mega = uiHelpers();
	let megaStatus = $state(false);
	const toggleMega = mega.toggle;
	$effect(() => {
		navStatus = nav.isOpen;
		megaStatus = mega.isOpen;
	});
</script>

<div class="h-64">
	<Navbar {toggleNav} {closeNav} {navStatus}>
		{#snippet brand()}
			<NavBrand href="/">
				<img
					src="/images/flowbite-svelte-icons-logo.svg"
					class="me-3 h-6 sm:h-9"
					alt="Flowbite Logo"
				/>
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Flowbite</span
				>
			</NavBrand>
		{/snippet}
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi class="cursor-pointer" onclick={toggleMega}>
				Mega menu<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
			</NavLi>
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/services">Products</NavLi>
		</NavUl>
	</Navbar>
	<div class="relative">
		<MegaMenu
			items={menu}
			dropdownStatus={megaStatus}
			class="absolute -top-[20px] left-[300px] w-[450px]"
		>
			{#snippet children(prop)}
				<a
					href={prop.item.href}
					class="hover:text-primary-600 dark:hover:text-primary-500 flex items-center"
				>
					<prop.item.Icon class="me-2 h-4 w-4" />
					{prop.item.name}
				</a>
			{/snippet}
		</MegaMenu>
	</div>
</div>
