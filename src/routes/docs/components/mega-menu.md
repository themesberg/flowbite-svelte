---
layout: componentLayout
title: Svelte Mega Menu - Flowbite
breadcrumb_title: Svelte Mega Menu
component_title: Mega menu
dir: Components
description: Use the mega menu component as a full-width dropdown inside the navbar to show a list of menu items based on multiple sizes, variants, and styles
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils';
  import { P, A } from '$lib';
  const dirName = toKebabCase(component_title)
</script>

The mega menu component is a full-width dropdown that can be triggered by clicking on the menu item and it shows a list of links that you can use to navigate through the pages on a website.

## Setup

```svelte example hideOutput
<script>
  import { MegaMenu } from 'flowbite-svelte';
</script>
```

## Default mega menu

Use this example to show a list of links aligned on three columns inside the mega menu dropdown.

```svelte example class="h-[30rem] md:h-80"
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let menu = [
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Library', href: '/library' },
    { name: 'Newsletter', href: '/news' },
    { name: 'Support Center', href: '/support' },
    { name: 'Resources', href: '/resource' },
    { name: 'Playground', href: '/play' },
    { name: 'Terms', href: '/terms' },
    { name: 'Pro Version', href: '/pro' },
    { name: 'License', href: '/license' }
  ];
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <MegaMenu items={menu} let:item>
      <a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Mega menu with icons

This example of a mega menu dropdown can be used to also show an icon near the text of the link.

```svelte example class="h-[30rem] md:h-80"
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
  import { IconOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
  let menu = [
    { name: 'About us', href: '/about', icon: 'user-circle-outline' },
    { name: 'Blog', href: '/blog', icon: 'user-circle-outline' },
    { name: 'Contact us', href: '/contact', icon: 'user-circle-outline' },
    { name: 'Library', href: '/library', icon: 'user-circle-outline' },
    { name: 'Newsletter', href: '/news', icon: 'user-circle-outline' },
    { name: 'Support Center', href: '/support', icon: 'user-circle-outline' },
    { name: 'Resources', href: '/resource', icon: 'user-circle-outline' },
    { name: 'Playground', href: '/play', icon: 'user-circle-outline' },
    { name: 'Terms', href: '/tersm', icon: 'user-circle-outline' },
    { name: 'Pro Version', href: '/pro', icon: 'user-circle-outline' },
    { name: 'License', href: '/license', icon: 'user-circle-outline' }
  ];
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <MegaMenu items={menu} let:item>
      <a href={item.href} class="flex items-center hover:text-primary-600 dark:hover:text-primary-500">
        <span class="sr-only">{item.name}</span>
        <svelte:component this={IconOutline} name={item.icon} class="w-4 h-4 me-2" />{item.name}
      </a>
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Full width dropdown

Use this example to show a mega menu dropdown that spans the entire width of the document page.

```svelte example class="h-[55rem] md:h-[30rem] relative"
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let menu2 = [
    { name: 'Online Stores', help: "Connect with third-party tools that you're already using." },
    { name: 'Segmentation', help: "Connect with third-party tools that you're already using." },
    { name: 'Marketing CRM', help: "Connect with third-party tools that you're already using." },

    { name: 'Online Stores', help: "Connect with third-party tools that you're already using." },
    { name: 'Segmentation', help: "Connect with third-party tools that you're already using." },
    { name: 'Marketing CRM', help: "Connect with third-party tools that you're already using." },

    { name: 'Audience Management', help: "Connect with third-party tools that you're already using." },
    { name: 'Creative Tools', help: "Connect with third-party tools that you're already using." },
    { name: 'Marketing Automation', help: "Connect with third-party tools that you're already using." }
  ];
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <MegaMenu full items={menu2} let:item>
      <a href="/" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 h-full">
        <div class="font-semibold dark:text-white">{item.name}</div>
        <span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span>
      </a>
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Full width with CTA

This example can be used to also show a CTA button or link next to the menu items inside the dropdown.

```svelte example class="h-[40rem] md:h-96 relative"
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
  import { ChevronDownOutline, ArrowRightOutline } from 'flowbite-svelte-icons';
  let menu = [
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Library', href: '/library' },
    { name: 'Newsletter', href: '/news' },
    { name: 'Support Center', href: '/support' },
    { name: 'Resources', href: '/resource' },
    { name: 'Playground', href: '/play' },
    { name: 'Terms', href: '/tersm' },
    { name: 'Pro Version', href: '/pro' },
    { name: 'License', href: '/license' }
  ];
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <MegaMenu full items={menu} let:item>
      <a href={item.href} class="hover:underline hover:text-primary-600 dark:hover:text-primary-500">
        {item.name}
      </a>
      <div slot="extra" class="">
        <h2 class="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
        <p class="mb-2 p-0 text-sm font-light text-gray-500 dark:text-gray-300">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
        <a href="/" class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700">
          Explore our brands
          <span class="sr-only">Explore our brands</span>
          <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-primary-600  hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700" />
        </a>
      </div>
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>

    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
      <MegaMenu full items={menu} let:item offset={12}>
        <a href={item.href} class="hover:underline hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
        <div slot="extra" class="">
          <h2 class="mt-4 mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
          <p class="mb-2 p-0 text-sm font-light text-gray-500 dark:text-gray-300">At Flowbite, we have a portfolio of brands that cater to a variety of preferences.</p>
          <a href="/" class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700">
            Explore our brands
            <span class="sr-only">Explore our brands </span>
            <svg class="ms-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
          </a>
        </div>
      </MegaMenu>
    </NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Full width with image

This example can be used to also show a CTA with a backdround image inside the dropdown next to the other menu items and links.

```svelte example class="h-[40rem] md:h-96 relative"
<script>
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let menu = [
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Library', href: '/library' },
    { name: 'Newsletter', href: '/news' },
    { name: 'Support Center', href: '/support' },
    { name: 'Resources', href: '/resource' },
    { name: 'Playground', href: '/play' },
    { name: 'Terms', href: '/tersm' },
    { name: 'Pro Version', href: '/pro' },
    { name: 'License', href: '/license' }
  ];
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Mega menu<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <MegaMenu full items={menu} let:item>
      <a href={item.href} class="hover:underline hover:text-primary-600 dark:hover:text-primary-500">
        {item.name}
      </a>
      <a slot="extra" href="/" class="block mt-4 p-4 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style="background-image: url(/images/nature-1.webp)">
        <p class="mb-5 max-w-xl text-sm p-0 font-extrabold tracking-tight leading-tight text-white">Preview the new Flowbite dashboard navigation.</p>
        <Button>Get started</Button>
      </a>
    </MegaMenu>
    <NavLi href="/services">Services</NavLi>
    <NavLi href="/services">Products</NavLi>
    <NavLi href="/services">Contact</NavLi>
  </NavUl>
</Navbar>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### MegaMenu styling

- Use the `class` prop to overwrite the wrapper class.
- Use the `classUl` prop to overwrite the `ul` tag class.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Mega Menu](https://flowbite.com/docs/components/list-group/)

<GitHubCompoLinks />
