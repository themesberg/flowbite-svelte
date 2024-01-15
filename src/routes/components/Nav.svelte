<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from '$lib';

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

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">

<Navbar {toggleNav} {closeNav} {navStatus} fluid breakPoint="xxl">
	{#snippet brand()}
		<NavBrand siteName="Svelte 5 UI lib (Experimental)" {closeNav}>
			<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
		</NavBrand>
		<div class="flex items-center ms-auto">
			<Darkmode />
		</div>
	{/snippet}

	<NavUl>
		<NavLi href="/" {closeNav}>Home</NavLi>
		<NavLi href="/banner" {closeNav}>Banner</NavLi>
		<NavLi href="/breadcrumb" {closeNav}>Breadcrumb</NavLi>
		<NavLi href="/buttons" {closeNav}>Buttons</NavLi>
		<NavLi href="/cards" {closeNav}>Cards</NavLi>
		<NavLi href="/darkmode" {closeNav}>Darkmode</NavLi>
		<NavLi href="/dropdown" {closeNav}>Dropdown</NavLi>
		<NavLi href="/footer" {closeNav}>Footer</NavLi>
		<NavLi href="/indicators" {closeNav}>Indicator</NavLi>
		<NavLi href="/navbar" {closeNav}>Navbar</NavLi>
		<NavLi href="/sidebar" {closeNav}>Sidebar</NavLi>
		<NavLi href="/skeleton" {closeNav}>Skeleton</NavLi>
		<NavLi href="/spinner" {closeNav}>Spinner</NavLi>
	</NavUl>
</Navbar>
</header>