<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavUl,
		NavLi,
		uiHelpers,
		Dropdown,
		DropdownUl,
		DropdownLi
	} from '$lib';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	// for navbar
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	// for Dropdown
	let dropdown = uiHelpers();
	let dropdownStatus = $state(false);
	let closeDropdown = dropdown.close;
	$effect(() => {
		navStatus = nav.isOpen;
		dropdownStatus = dropdown.isOpen;
		activeUrl = $page.url.pathname;
	});
</script>

<div class="h-64">
	<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
		{#snippet brand()}
			<NavBrand siteName="Svelte 5">
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>
		{/snippet}

		<NavUl {activeUrl}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/components/navbar">Navbar</NavLi>
			<NavLi onclick={dropdown.toggle} class="cursor-pointer">
				Dropdown<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
			</NavLi>
			<div class="relative">
				<Dropdown
					{dropdownStatus}
					{closeDropdown}
					class="absolute -top-[20px] left-[100px] md:top-[20px] md:-left-[170px]"
				>
					<DropdownUl>
						<DropdownLi href="/components/alert">Alert</DropdownLi>
						<DropdownLi href="/components/button">Button</DropdownLi>
						<DropdownLi href="/components/drawer">Drawer</DropdownLi>
					</DropdownUl>
				</Dropdown>
			</div>
			<NavLi href="/components/footer">Footer</NavLi>
		</NavUl>
	</Navbar>
</div>
