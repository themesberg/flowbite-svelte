<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from '$lib';

	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.isOpen;
	});
</script>

<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="xl">
	{#snippet brand()}
		<NavBrand siteName="Svelte 5 UI lib (Experimental)" {closeNav}>
			<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
		</NavBrand>
	{/snippet}

	<NavUl>
		<NavLi href="/" {closeNav}>Home</NavLi>
		<NavLi href="/breadcrumb" {closeNav}>Breadcrumb</NavLi>
		<NavLi href="/buttons" {closeNav}>Buttons</NavLi>
		<NavLi href="/cards" {closeNav}>Cards</NavLi>
		<NavLi href="/navbar" {closeNav}>Navbar</NavLi>
		<NavLi href="/footer" {closeNav}>Footer</NavLi>
		<NavLi href="/dropdown" {closeNav}>Dropdown</NavLi>
		<NavLi href="/sidebar" {closeNav}>Sidebar</NavLi>
		<NavLi href="/skeleton" {closeNav}>Skeleton</NavLi>
	</NavUl>
</Navbar>
