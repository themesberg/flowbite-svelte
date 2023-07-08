---
layout: componentLayout
title: Svelte Sidebar - Flowbite
breadcrumb_title: Svelte Sidebar
component_title: Sidebar
dir: Components
description: Use the sidebar component to show a list of menu items and multi-level dropdown items on either side of the page to navigate on your website
thumnailSize: w-72
---

<script>
  import { page } from '$app/stores';
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  import { props as items } from '../../props/Sidebar.json'
  import { props as items2 }  from '../../props/SidebarBrand.json'
  import { props as items3 }  from '../../props/SidebarCta.json'
  import { props as items4 }  from '../../props/SidebarDropdownItem.json'
  import { props as items5 }  from '../../props/SidebarDropdownWrapper.json'
  import { props as items6 }  from '../../props/SidebarGroup.json'
  import { props as items7 }  from '../../props/SidebarItem.json'
  import { props as items8 }  from '../../props/SidebarWrapper.json'

  const events = ["on:blur","on:click","on:focus","on:keydown","on:keypress","on:keyup","on:mouseenter","on:mouseleave","on:mouseover"];
</script>
The sidebar component can be used as a complementary element relative to the navbar shown on either the left or right side of the page used for the navigation on your web application, including menu items, multi-level dropdown items, call to actions elements, and more.

Disclaimer: this sidebar component is based on this <A class="text-primary-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank" rel="noreferrer">sidebar menu</A> plugin.

## Setup

```svelte example hideOutput
<script>
  import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, 
           SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
</script>
```

## Default sidebar

Use this example to show a responsive list of menu items inside the sidebar with icons and labels.

```svelte example
<script>
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid,  ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
      <svelte:fragment slot="icon">
        <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
      <svelte:fragment slot="icon">
        <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sidebar" href='/docs/components/sidebar' active={activeUrl === '/docs/components/sidebar'}>
        <svelte:fragment slot="icon">
          <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <FileEditSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Multi-level dropdown

Use this sidebar example to create multi-level menu items by using the dSidebarDropdownWrapper and SidebarDropdownItem components.

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, ShoppingCartSolid, GridSolid, MailBoxSolid, UsersSolid, BagSolid, ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        <svelte:fragment slot="icon">
          <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UsersSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <FileEditSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

You can change the icons using `arrowup` and `arrowdown` slots.

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, ShoppingCartSolid, ChevronDoubleDownOutline, ChevronDoubleUpOutline } from 'flowbite-svelte-icons';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        <svelte:fragment slot="icon">
          <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="arrowup">
          <ChevronDoubleUpOutline class="w-3 h-3" />
        </svelte:fragment>
        <svelte:fragment slot="arrowdown">
          <ChevronDoubleDownOutline class="w-3 h-3" />
        </svelte:fragment>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Active item

Use the following example to show the active item. Use the `activeClass` prop to change the style.

```svelte example
<script>
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" href='/dashboard' active={activeUrl === '/dashboard'} />
      <SidebarItem label="Sidebar" href='/docs/component/sidebar' active={activeUrl === '/docs/components/sidebar'} />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

```svelte example
<script>
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname
  $: containPath = ()=>{
    // add your logic here
    true
  }
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" active={activeUrl === '/dashboard'} />
      <SidebarDropdownWrapper label="E-commerce" isOpen={containPath}>
        <SidebarDropdownItem label="Products" href='/components/products' active={activeUrl === '/components/products'} />
        <SidebarDropdownItem label="Sidebar" href='/docs/components/sidebar' active={activeUrl === '/docs/components/sidebar'}/>
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Items">
        <SidebarDropdownItem label="Item 1" href='/components/item1' active={activeUrl === '/components/item'} />
        <SidebarDropdownItem label="Item 2" href='/components/item2' active={activeUrl === '/components/billing'} />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Content separator

Separate the content inside the sidebar component by applying a border separator to the SidebarGroup component.

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, ShoppingCartSolid, GridSolid, MailBoxSolid, UsersSolid, BagSolid, ArrowRightToBracketSolid, FileEditSolid, FireSolid, BookSolid, WindowRestoreOutline, LifeBuoySolid } from 'flowbite-svelte-icons';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
      <svelte:fragment slot="icon">
        <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
      <svelte:fragment slot="icon">
        <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UsersSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Products">
        <svelte:fragment slot="icon">
          <BagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <FileEditSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup border>
      <SidebarItem label="Upgrade to Pro">
        <svelte:fragment slot="icon">
          <FireSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Documentation">
        <svelte:fragment slot="icon">
          <BookSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Components">
        <svelte:fragment slot="icon">
          <WindowRestoreOutline class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Help">
        <svelte:fragment slot="icon">
          <LifeBuoySolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## CTA button

Use this example to add a CTA button inside the sidebar component and encourage your users to visit the dedicated page.

```svelte example
<script>
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta } from 'flowbite-svelte';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
      <svelte:fragment slot="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarCta label="Beta">
        <svelte:fragment slot="icon">
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-primary-50 text-primary-900 rounded-lg focus:ring-2 focus:ring-primary-400 p-1 hover:bg-primary-200 inline-flex h-6 w-6 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800"
            data-collapse-toggle="dropdown-cta"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </svelte:fragment>
        <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">
          Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
          limited time in your profile.
        </p>
        <a
          class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          href="/">Turn new navigation off</a
        >
      </SidebarCta>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Logo branding

Show the logo of your brand and link back to the homepage from the top part of the sidebar.

```svelte example
<script>
  import { Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte'
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';

  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-icon-logo.svg'
  };
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarBrand {site} />
      <SidebarItem label="Dashboard">
      <svelte:fragment slot="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Transition

You can add own transition by setting `transitionType` and `transitionParams`. 

```svelte example
<script>
  import { page } from '$app/stores';
  import { sineIn } from 'svelte/easing';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname
  $: containPath = ()=>{
    // add your logic here
    true
  }
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" active={activeUrl === '/dashboard'} />
      <SidebarDropdownWrapper label="E-commerce" isOpen={containPath} transitionType="fly" {transitionParams}>
        <SidebarDropdownItem label="Products" href='/components/products' active={activeUrl === '/components/products'} />
        <SidebarDropdownItem label="Sidebar" href='/docs/components/sidebar' active={activeUrl === '/docs/components/sidebar'}/>
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Items" transitionType="fly" {transitionParams}>
        <SidebarDropdownItem label="Item 1" href='/components/item1' active={activeUrl === '/components/item'} />
        <SidebarDropdownItem label="Item 2" href='/components/item2' active={activeUrl === '/components/billing'} />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Sidebar

- Use the `class` prop to overwrite `asideClass`.

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### SidebarBrand

- Use the `class` prop to overwrite `aClass`.

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### SidebarCta

- Use the `class` prop to overwrite the default class.

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### SidebarDropdownItem

- Use the `class` prop to overwrite `divWrapperClass`.

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### SidebarDropdownWrapper

- Use the `class` prop to overwrite `btnClass`.

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### SidebarGroup

- Use the `class` prop to overwrite `ulClass`.

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

### SidebarItem

- Use the `class` prop to overwrite the `a` tag class.

<TableProp>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

### SidebarWrapper

- Use the `class` prop to overwrite `divClass`.

<TableProp>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>

## Forwarded Events

### SidebarDropdownItem, SidebarItem

<DocBadgeList items={events} />

## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/sidebar/)
