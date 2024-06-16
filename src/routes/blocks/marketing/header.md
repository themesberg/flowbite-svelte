---
layout: blockComponentLayout
title: Svelte Headers - Flowbite Svelte Blocks
breadcrumb_title: Headers
no_of_components: 1 free component
dir: marketing
description: Get started with the header component for the navigation of a website featuring multi-level dropdowns, mega-menus, search bars, language selectors, and more.
---

## Default header navigation

Use this example of a responsive navigation bar for your website by showing multiple menu items, a few CTA buttons, and a hamburger icon to toggle the mobile view.

```svelte example
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Button } from 'flowbite-svelte';

  let navClass = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
  let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
</script>

<header>
  <Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
    <NavBrand href="/">
      <img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Flowbite </span>
    </NavBrand>
    <div class="flex items-center lg:order-2">
      <Button href="/" color="dark">Log in</Button>
      <Button href="/" class="ml-2" color="red">Get started</Button>
      <NavHamburger on:click={toggle} btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" />
    </div>
    <NavUl {hidden} divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/">Company</NavLi>
      <NavLi href="/">Marketplace</NavLi>
      <NavLi href="/">Features</NavLi>
      <NavLi href="/">Team</NavLi>
      <NavLi href="/">Contact</NavLi>
    </NavUl>
  </Navbar>
</header>
```
