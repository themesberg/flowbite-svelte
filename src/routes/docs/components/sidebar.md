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
  import { page } from '$app/state';
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The sidebar component can be used as a complementary element relative to the navbar shown on either the left or right side of the page used for the navigation on your web application, including menu items, multi-level dropdown items, call to actions elements, and more.

Disclaimer: this sidebar component is based on this <A class="text-primary-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank" rel="noreferrer">sidebar menu</A> plugin.

## Setup

```svelte example hideOutput
<script>
  import { Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte-next";
</script>
```

## Default sidebar

Use this example to show a responsive list of menu items inside the sidebar with icons and labels.

```svelte example
<script>
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
  let activeUrl = page.url.pathname;
</script>

<Sidebar position="static" {activeUrl}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        {#snippet icon()}
          <GridSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/docs/components/sidebar" active={activeUrl === "/docs/components/sidebar"}>
        {#snippet icon()}
          <UserSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet icon()}
          <EditOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Adding links and active class

Utilize the `href` prop within the `SidebarItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `Sidebar` component:

```svelte example
<script>
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let activeUrl = page.url.pathname;
</script>

<Sidebar position="static" {activeUrl}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Accordion" href="/docs/components/accordion">
        {#snippet icon()}
          <GridSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Alert" href="/docs/components/alert">
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/docs/components/sidebar">
        {#snippet icon()}
          <UserSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Badge" href="/docs/components/badge">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

Control the `active` and `nonactive` class by using `activeClass` and `nonActiveClass`:

```svelte example
<script>
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let activeUrl = page.url.pathname;
  let activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";
  let nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
</script>

<Sidebar position="static" {activeUrl} {activeClass} {nonActiveClass}>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Accordion" href="/docs/components/accordion">
        {#snippet icon()}
          <GridSolid class="h-6 w-6" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Alert" href="/docs/components/alert">
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/docs/components/sidebar">
        {#snippet icon()}
          <UserSolid class="h-6 w-6" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Badge" href="/docs/components/badge">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

You can control icon class by changing the `class` prop in the `Icon` component.

## Multi-level dropdown

Use this sidebar example to create multi-level menu items by using the SidebarDropdownWrapper and SidebarDropdownItem components.

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        {#snippet icon()}
          <CartSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanClass}>
        {#snippet icon()}
          <GridSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Users">
        {#snippet icon()}
          <UserSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet icon()}
          <EditOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

You can change the icons using `arrowup` and `arrowdown` slots.

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, CartSolid, ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce">
        {#snippet icon()}
          <CartSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet arrowup()}
          <ChevronDoubleUpOutline class="h-6 w-6" />
        {/snippet}
        {#snippet arrowdown()}
          <ChevronDoubleDownOutline class="h-6 w-6" />
        {/snippet}
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Content separator

Separate the content inside the sidebar component by applying a border separator to the SidebarGroup component.

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ShoppingBagSolid, ArrowRightToBracketOutline, EditOutline, FireSolid, BookSolid, RestoreWindowOutline, LifeSaverSolid } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        {#snippet icon()}
          <GridSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Users">
        {#snippet icon()}
          <UserSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Products">
        {#snippet icon()}
          <ShoppingBagSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet icon()}
          <EditOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup border>
      <SidebarItem label="Upgrade to Pro">
        {#snippet icon()}
          <FireSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Documentation">
        {#snippet icon()}
          <BookSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Components">
        {#snippet icon()}
          <RestoreWindowOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Help">
        {#snippet icon()}
          <LifeSaverSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## CTA button

Use this example to add a CTA button inside the sidebar component and encourage your users to visit the dedicated page.

```svelte example
<script>
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline, CloseOutline } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        {#snippet icon()}
          <GridSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Users">
        {#snippet icon()}
          <UserSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet icon()}
          <EditOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarCta label="Beta">
        {#snippet icon()}
          <button type="button" class="bg-primary-50 text-primary-900 focus:ring-primary-400 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800 -mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg p-1 focus:ring-2" data-collapse-toggle="dropdown-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <CloseOutline class="h-4 w-4" />
          </button>
        {/snippet}
        <p class="text-primary-900 dark:text-primary-400 mb-3 text-sm">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>
        <a class="text-primary-900 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 text-sm underline" href="/">Turn new navigation off</a>
      </SidebarCta>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Logo branding

Show the logo of your brand and link back to the homepage from the top part of the sidebar.

```svelte example
<script>
  import { Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from "flowbite-svelte-next";
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";

  let site = {
    name: "flowbite-svelte-next",
    href: "/",
    img: "/images/flowbite-svelte-icon-logo.svg"
  };
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarBrand {site} />
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        {#snippet icon()}
          <GridSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        {#snippet icon()}
          <MailBoxSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Users">
        {#snippet icon()}
          <UserSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign In">
        {#snippet icon()}
          <ArrowRightToBracketOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sign Up">
        {#snippet icon()}
          <EditOutline class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Transition

You can add own transition by setting `transitionType` and `transitionParams`.

```svelte example
<script>
  import { page } from "$app/state";
  import { sineIn } from "svelte/easing";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from "flowbite-svelte-next";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
  let activeUrl = page.url.pathname;
  let containPath = () => {
    // add your logic here
    true;
  };
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" />
      <SidebarDropdownWrapper label="E-commerce" isOpen={containPath} transitionType="fly" {transitionParams}>
        <SidebarDropdownItem label="Products" href="/products" />
        <SidebarDropdownItem label="Cart" href="/cart" />
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Items" transitionType="fly" {transitionParams}>
        <SidebarDropdownItem label="Item 1" href="/components/item1" />
        <SidebarDropdownItem label="Item 2" href="/components/item2" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## use:action

Svelte Actions are essentially element-level lifecycle functions. They're useful for things like:

- interfacing with third-party libraries
- lazy-loaded images
- tooltips
- adding custom event handlers

The `SidebarItem` component has `use:action` directive you can use:

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from "flowbite-svelte-next";
  const routes = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Contact",
      href: "/contact"
    },
    {
      label: "Profile",
      href: "/profile"
    }
  ];
  const myaction = (label) => {
    console.log("Hello ", label);
  };
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      {#each routes as { label, href }}
        <SidebarItem {label} {href} action={myaction(label)} />
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## onclickclick handler on SidebarDropdownWrapper

```svelte example
<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from "flowbite-svelte-next";
  import { ChartPieSolid, CartSolid, ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
  const handleClick = () => {
    console.log("Hello from SidebarDropdownWrapper.");
  };
</script>

<Sidebar position="static">
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        {#snippet icon()}
          <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarDropdownWrapper label="E-commerce" onclickclick={handleClick}>
        {#snippet icon()}
          <CartSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet arrowup()}
          <ChevronDoubleUpOutline class="h-6 w-6" />
        {/snippet}
        {#snippet arrowdown()}
          <ChevronDoubleDownOutline class="h-6 w-6" />
        {/snippet}
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Sidebar styling

- Use the `class` prop to overwrite `asideClass`.

### SidebarBrand styling

- Use the `class` prop to overwrite `aClass`.

### SidebarCta styling

- Use the `class` prop to overwrite the default class.

### SidebarDropdownItem styling

- Use the `class` prop to overwrite `divWrapperClass`.

### SidebarDropdownWrapper styling

- Use the `class` prop to overwrite `btnClass`.

### SidebarGroup styling

- Use the `class` prop to overwrite `ulClass`.

### SidebarItem styling

- Use the `class` prop to overwrite the `a` tag class.

### SidebarWrapper styling

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/sidebar/)

<GitHubCompoLinks />
