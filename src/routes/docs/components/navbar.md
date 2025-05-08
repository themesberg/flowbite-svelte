---
layout: componentLayout
title: Svelte Navbar - Flowbite
breadcrumb_title: Svelte Navbar
component_title: Navbar
dir: Components
description: The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, Heading, P, A } from '$lib';
  const dirName = toKebabCase(component_title)
</script>

Get started with the responsive navbar component from Flowbite to quickly set up a navigation menu for your website and set up the logo, list of pages, CTA button, search input, user profile options with a dropdown, and more.

## Setup

```svelte example hideOutput
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>
```

## Default navbar

Use this example of a navigation bar built with the utility classes from Tailwind CSS to enable users to navigate across the pages of your website.

By default, navbar content width is controlled by Tailwind class `container`. If you want your navbar to be full page width set the prop `fluid=true`.

```svelte example hideScript class="h-96 md:h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Active class

Utilize the `href` prop within the `NavLi` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `NavUl` component:

```svelte example class="h-96 md:h-80"
<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>
```

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

```svelte example class="h-96 md:h-80"
<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent";
  let nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl} {activeClass} {nonActiveClass}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
</Navbar>
```

## Navbar with dropdown

This example can be used to show a secondary dropdown menu when clicking on one of the navigation links.

```svelte example class="h-96 md:h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Dropdown<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <Dropdown simple class="w-44">
      <DropdownItem href="/">Dashboard</DropdownItem>
      <DropdownItem href="/docs/components/navbar">Settings</DropdownItem>
      <DropdownItem href="/">Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem href="/">Sign out</DropdownItem>
    </Dropdown>
    <NavLi href="/settings">Setting</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Navbar with search

Use this example of a navbar element to also show a search input element that you can integrate for a site-wide search.

```svelte example class="h-96 md:h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Search, ToolbarButton, Button, Input } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  import { fade } from "svelte/transition";
</script>

<Navbar>
  {#snippet children({ hidden, toggle, NavContainer })}
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <div class="flex md:order-2">
      <ToolbarButton class="block md:hidden" onclick={toggle}>
        <SearchOutline class="h-5 w-5 text-gray-500 dark:text-gray-400" />
      </ToolbarButton>
      <div class="hidden md:block">
        <Search size="md" class="ms-auto" placeholder="Search..." />
      </div>
      <NavHamburger />
    </div>
    {#if !hidden}
      <div class="mt-2 w-full md:hidden" transition:fade>
        <Search size="md" placeholder="Search..." />
      </div>
    {/if}
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
```

## Navbar with CTA button

Use the following navbar element to show a call to action button alongside the logo and page links.

```svelte example class="h-96 md:h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button size="sm">Get started</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Sticky navbar

Use this example to keep the navbar positioned fixed to the top side as you scroll down the document page.

```svelte example class="p-2 sm:p-6 h-96 md:h-80 overflow-hidden"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ImagePlaceholder, Skeleton, TextPlaceholder } from "flowbite-svelte";
</script>

<div class="relative px-8">
  <Navbar class="fixed start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4">
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
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

```svelte example class="h-96 md:h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <div class="flex items-center md:order-2">
    <Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
    <NavHamburger />
  </div>
  <Dropdown placement="bottom" triggeredBy="#avatar-menu">
    <DropdownHeader>
      <span class="block text-sm">Bonnie Green</span>
      <span class="block truncate text-sm font-medium">name@flowbite.com</span>
    </DropdownHeader>
    <DropdownGroup>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
    </DropdownGroup>
    <DropdownHeader>Sign out</DropdownHeader>
  </Dropdown>
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Solid background

Use this example to show a solid background for the navbar component instead of being transparent.

```svelte example class="h-96 md:h-80"
<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
</script>

<Navbar class="bg-primary-100 dark:bg-primary-700">
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Navbar](https://flowbite.com/docs/components/navbar/)

<GitHubCompoLinks />
