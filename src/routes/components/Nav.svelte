<script>

import { Navbar, NavLi, NavBrand, NavUl, navHelper } from '$lib';

let nav = navHelper();

let navStatus = $state();
let toggleNav = nav.toggleNav;
let closeNav = nav.closeNav;

$effect(() => {
  // this can be done adding nav.navStatus directly to DOM element
  // without using effect
  navStatus = nav.navStatus;
});
</script>

<Navbar {toggleNav} {closeNav} {navStatus}>
{#snippet brand()}
  <NavBrand siteName="Svelte 5" {closeNav} />
{/snippet}
<NavUl>
  <NavLi href="/" {closeNav}>Home</NavLi>
  <NavLi href="/about" {closeNav}>About</NavLi>
  <NavLi href="/contact" {closeNav}>Contact</NavLi>
</NavUl>
</Navbar>