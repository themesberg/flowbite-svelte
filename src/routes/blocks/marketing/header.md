---
layout: componentLayout
title: Svelte Headers - Flowbite Svelte Blocks
breadcrumb_title: Headers
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: Get started with the header component for the navigation of a website featuring multi-level dropdowns, mega-menus, search bars, language selectors, and more.
---

## Default header navigation

Use this example of a responsive navigation bar for your website by showing multiple menu items, a few CTA buttons, and a hamburger icon to toggle the mobile view.

```svelte example
<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from "flowbite-svelte";
</script>

<header>
  <Navbar>
    <NavBrand href="/">
      <img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex items-center lg:order-2">
      <Button href="/" color="dark">Log in</Button>
      <Button href="/" class="ml-2" color="red">Get started</Button>
      <NavHamburger />
    </div>
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/">Company</NavLi>
      <NavLi href="/">Marketplace</NavLi>
      <NavLi href="/">Features</NavLi>
      <NavLi href="/">Team</NavLi>
      <NavLi href="/">Contact</NavLi>
    </NavUl>
  </Navbar>
</header>
```
