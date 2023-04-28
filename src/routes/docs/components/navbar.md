---
layout: componentLayout
title: Svelte Navbar - Flowbite
breadcrumb_title: Svelte Navbar
component_title: Navbar
dir: Components
description: The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, Heading, P, A } from '$lib';

  import { props as items } from '../../props/Navbar.json'
  import { props as items2 } from '../../props/NavBrand.json'
  import { props as items3 } from '../../props/NavLi.json'
  import { props as items4 } from '../../props/NavUl.json'
  import { props as items5 } from '../../props/NavHamburger.json'
  import { props as items6 } from '../../props/Menu.json'
  import { props as items7 } from '../../props/NavDropdown.json'

  const events = ["on:blur","on:change","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover"];
</script>



Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

## Setup

```svelte example hideOutput
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>
```

## Default navbar

Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.

```svelte example hideScript
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Navbar with dropdown

This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.

```svelte example class="h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, Chevron, DropdownDivider } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Dropdown</Chevron></NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
    <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  </NavUl>
</Navbar>
```

## Navbar with search

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

```svelte example class="h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
    </Button>
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
      </div>
      <Input id="search-navbar" class="pl-10" placeholder="Search..." />
    </div>
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
  </NavUl>
</Navbar>
```

## Navbar with CTA button

Use the following navbar element to show a call to action button alongside the logo and page links.

```svelte example class="h-80 md:h-64"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get started</Button>
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {hidden} class="order-1">
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Sticky navbar

Use this example to keep the navbar positioned fixed to the top side as you scroll down the document page.

```svelte example class="h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte'
</script>

<div class="relative px-8">
  <Navbar
    navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
    let:hidden
    let:toggle
  >
    <NavBrand href="/">
      <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  <div style="height:300px;" class="overflow-scroll pb-16">
    <Skeleton class="mt-16 mb-8" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>
</div>
```

## User menu dropdown

Use this example to create a navigation bar with a user profile or button to toggle a dropdown menu.

```svelte example class="h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
    <span class="block text-sm"> Bonnie Green </span>
    <span class="block truncate text-sm font-medium"> name@flowbite.com </span>
    </DropdownHeader>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem>
  </Dropdown>
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Solid background

Use this example to show a solid background for the navbar component instead of being transparent.

```svelte example
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle rounded color="form">
  <NavBrand href="/">
    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Navbar

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### NavBrand

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### NavDropdown

<TableProp>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

### NavHamburger

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### NavLi

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### NavUl

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### Menu

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

## Forwarded Events

### NavLi

<DocBadgeList items={events} />


## References

<P>
  <A href="https://flowbite.com/docs/components/navbar/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Navbar</A
  >
</P>
