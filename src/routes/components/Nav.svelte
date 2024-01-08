<script>
	import { Navbar, NavLi, NavBrand, NavUl, navHelper } from '$lib';

	let nav = navHelper();

	let navStatus = $state(false);
	let toggleNav = nav.toggleNav;
	let closeNav = nav.closeNav;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		navStatus = nav.navStatus;
	});
</script>

<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="xl">
	{#snippet brand()}
		<NavBrand siteName="Svelte 5" {closeNav}>
			<img width="30" src="images/svelte-icon.png" alt="svelte icon" />
		</NavBrand>
	{/snippet}

	<NavUl>
		<NavLi href="/" {closeNav}>Home</NavLi>
		<NavLi href="/about" {closeNav}>About</NavLi>
		<NavLi href="/contact" {closeNav}>Contact</NavLi>
	</NavUl>
</Navbar>
