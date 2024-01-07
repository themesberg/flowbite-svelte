<script>
	import '../app.pcss';
	let { children } = $props();
	// import { page } from '$app/stores';
	// import Nav from './utils/nav/Nav.svelte'
	import {Navbar, NavLi, NavBrand, NavUl, navHelper} from '$lib'
    
    let nav = navHelper()
	// let handleOutside = clickOutside()
    // let navStatus = $derived(navHelper().navStatus)
    let navStatus = $state()
    let toggleNav = nav.toggleNav
    let closeNav = nav.closeNav

    $effect(()=>{
        // this can be done adding nav.navStatus directly to DOM element
        // without using effect
        navStatus = nav.navStatus 
    })

	
</script>

<Navbar  {toggleNav} {closeNav} navStatus={navStatus}>
	{#snippet brand()}
		<NavBrand siteName="Svelte 5" {closeNav} />
	{/snippet}
	<NavUl>
		<NavLi href="/" closeNav={closeNav}>Home</NavLi>
		<NavLi href="/about" closeNav={closeNav}>About</NavLi>
		<NavLi href="/contact" closeNav={closeNav}>Contact</NavLi>
	</NavUl>
</Navbar>

<div class="container">
{@render children()}
</div>
