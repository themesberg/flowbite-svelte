# Svelte 5 UI Lib

Personal UI library for Svelte 5

## Installation

```
pnpm i -D svelte-5-ui-lib
```

## Nav

```
<script>

import { Navbar, NavLi, NavBrand, NavUl, navHelper } from 'svelte-5-ui-lib';

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
```

## Footer

```
<script>
  import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib'
</script>

<Footer footerClass="shadow-none" footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
  <FooterBrand href="/" name="Svelt 5 UI Lib"/>
  <FooterUl ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLi href="/">Home</FooterLi>
    <FooterLi href="/about">About</FooterLi>
  </FooterUl>
  </div>
</Footer>
```