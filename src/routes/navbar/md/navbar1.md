<script>
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers } from 'svelte-5-ui-lib';
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

<h1>Navbar</h1>

<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="xl">
{#snippet brand()}
<NavBrand siteName="Svelte 5" {closeNav}>
<img width="30" src="images/svelte-icon.png" alt="svelte icon" />
</NavBrand>
{/snippet}

    <NavUl>
    	<NavLi href="/" {closeNav}>Home</NavLi>
    	<NavLi href="/navbar" {closeNav}>Navbar</NavLi>
    	<NavLi href="/footer" {closeNav}>Footer</NavLi>
    </NavUl>

</Navbar>
