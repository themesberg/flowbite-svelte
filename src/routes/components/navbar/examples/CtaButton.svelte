<script lang="ts">
	import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger } from '$lib';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	$effect(() => {
		navStatus = nav.isOpen;
		activeUrl = $page.url.pathname;
	});
</script>

<Navbar {navStatus} breakPoint="md" hamburgerMenu={false}>
	{#snippet brand()}
		<NavBrand siteName="Svelte 5 UI Lib">
			<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
		</NavBrand>
	{/snippet}
	{#snippet navSlotBlock()}
		<div class="flex items-center space-x-1 md:order-2">
			<Button size="sm">Get started</Button>
			<NavHamburger {toggleNav} />
		</div>
	{/snippet}
	<NavUl class="order-1" {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/components/navbar">Navbar</NavLi>
		<NavLi href="/components/footer">Footer</NavLi>
	</NavUl>
</Navbar>
