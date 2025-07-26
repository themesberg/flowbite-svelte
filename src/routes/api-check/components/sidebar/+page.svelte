<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarButton, SidebarCta, SidebarBrand, SidebarDropdownWrapper, SidebarDropdownItem, CloseButton, uiHelpers } from "$lib";
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid, BookSolid, RestoreWindowOutline, FireSolid, CloseOutline, ChevronDoubleUpOutline, ChevronDoubleDownOutline, ChartPieSolid, CartSolid } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";
  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";

  let activeUrl = $state(page.url.pathname);
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";

  const site = {
    name: "Flowbite Svelte",
    href: "/",
    img: "/images/flowbite-svelte-icon-logo.svg",
    imgClass: "h-6 w-6"
  };

  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;

  // UI helpers for different examples
  const demoSidebarUi1 = uiHelpers();
  const demoSidebarUi2 = uiHelpers();
  const demoSidebarUi3 = uiHelpers();
  const demoSidebarUi4 = uiHelpers();
  const demoSidebarUi5 = uiHelpers();

  let isDemo1Open = $state(false);
  let isDemo2Open = $state(false);
  let isDemo3Open = $state(false);
  let isDemo4Open = $state(false);
  let isDemo5Open = $state(false);

  const closeDemo1Sidebar = demoSidebarUi1.close;
  const closeDemo2Sidebar = demoSidebarUi2.close;
  const closeDemo3Sidebar = demoSidebarUi3.close;
  const closeDemo4Sidebar = demoSidebarUi4.close;
  const closeDemo5Sidebar = demoSidebarUi5.close;

  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
    isDemo1Open = demoSidebarUi1.isOpen;
    isDemo2Open = demoSidebarUi2.isOpen;
    isDemo3Open = demoSidebarUi3.isOpen;
    isDemo4Open = demoSidebarUi4.isOpen;
    isDemo5Open = demoSidebarUi5.isOpen;
  });

  const sidebarEx1 = [
    {
      label: "Dashboard",
      href: "/",
      icon: ChartOutline
    },
    {
      label: "Kanban",
      href: "/",
      icon: GridSolid,
      subContent: "Pro"
    },
    {
      label: "Inbox",
      href: "/",
      icon: MailBoxSolid,
      subContent: "3"
    },
    {
      label: "Sidebar",
      href: "/components/sidebar",
      icon: UserSolid
    }
  ];
  // For the first demo
  const demoSidebarUi6 = uiHelpers();
  let isDemoOpen6 = $state(false);
  const closeDemoSidebar6 = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen6 = demoSidebarUi6.isOpen;
  });

  // For transition demo
  let params = {
    duration: 700,
    easing: sineIn
  };

  // For static positioning demo
  const staticDemoSidebarUi = uiHelpers();
  let isStaticDemoOpen = $state(true);
  const closeStaticDemoSidebar = staticDemoSidebarUi.close;
  $effect(() => {
    isStaticDemoOpen = staticDemoSidebarUi.isOpen;
  });

  // For action demo
  const routes = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Contact",
      href: "/"
    },
    {
      label: "Profile",
      href: "/"
    }
  ];

  // For onclick handler demo
  const handleClick = () => {
    alert("Hello from SidebarDropdownWrapper.");
  };
</script>

<h1 class="my-4 text-3xl">Sidebar</h1>

<h2 class="my-4 text-2xl">Default sidebar</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Adding links and active class</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} activeClass="flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-800 dark:hover:bg-primary-800" nonActiveClass="flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700" position="absolute" class="z-50 h-full">
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/docs/components/sidebar">
          {#snippet icon()}
            <UserSolid class="text-primary-500 h-5 w-5 transition duration-75 " />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" {activeClass} {nonActiveClass} class="z-50 h-full">
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/" active>
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} active={false}>
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} active={false}>
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar" active={false}>
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Multi-level dropdown</h2>
<div class="my-4 h-[580px] rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Sidebar" href="/docs/components/sidebar" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Users">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign In">
          {#snippet icon()}
            <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign Up">
          {#snippet icon()}
            <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>

    <div class="h-[500px] overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" class="z-50 h-full" activeClass="p-2" nonActiveClass="p-2">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet arrowup()}
            <ChevronDoubleUpOutline class="h-6 w-6" />
          {/snippet}
          {#snippet arrowdown()}
            <ChevronDoubleDownOutline class="h-6 w-6" />
          {/snippet}
          <SidebarItem label="Sidebar" href="/docs/components/sidebar" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
      </SidebarGroup>
    </Sidebar>

    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Content separator</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
      <SidebarGroup border>
        <SidebarItem label="Upgrade to Pro" href="/">
          {#snippet icon()}
            <FireSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Documentation" href="/">
          {#snippet icon()}
            <BookSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Components" href="/">
          {#snippet icon()}
            <RestoreWindowOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">CTA button</h2>
<div class="my-4 h-[500px] rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/docs/components/sidebar">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarCta label="Beta">
          {#snippet icon()}
            <button type="button" class="bg-primary-50 text-primary-900 hover:bg-primary-200 focus:ring-primary-400 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800 -mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg p-1 focus:ring-2" data-collapse-toggle="dropdown-cta" aria-label="Close">
              <span class="sr-only">Close</span>
              <CloseOutline class="h-4 w-4" />
            </button>
          {/snippet}
          <p class="text-primary-900 dark:text-primary-400 mb-3 text-sm">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>
          <a class="text-primary-900 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 text-sm underline" href="/">Turn new navigation off</a>
        </SidebarCta>
      </SidebarGroup>
    </Sidebar>
    <div class="h-[450px] overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Logo branding</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi1.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemo1Open} closeSidebar={closeDemo1Sidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <CloseButton onclick={closeDemo1Sidebar} color="gray" class="absolute top-3 right-1 p-2 md:hidden" />
      <SidebarGroup>
        <SidebarBrand {site} />
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Branding using children</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi2.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemo2Open} closeSidebar={closeDemo2Sidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <CloseButton onclick={closeDemo2Sidebar} color="gray" class="absolute top-3 right-1 p-2 md:hidden" />
      <SidebarGroup>
        <SidebarBrand>
          <img src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Svelte" class="h-6 w-6" />
          <span class="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Svelte 5 UI Lib</span>
        </SidebarBrand>
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Close button</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi3.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemo3Open} closeSidebar={closeDemo3Sidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full pt-6" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <CloseButton onclick={closeDemo3Sidebar} color="gray" class="absolute top-2 right-2 p-2 md:hidden" />
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sidebar" href="/components/sidebar">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Using object</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi4.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemo4Open} closeSidebar={closeDemo4Sidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
      <SidebarGroup>
        {#each sidebarEx1 as { label, href, icon: Icon, subContent }}
          <SidebarItem {label} {href} {spanClass}>
            {#snippet icon()}
              <Icon class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></Icon>
            {/snippet}
            {#if subContent}
              {#snippet subtext()}
                <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  {subContent}
                </span>
              {/snippet}
            {/if}
          </SidebarItem>
        {/each}
      </SidebarGroup>
    </Sidebar>
    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Single selection</h2>

<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi5.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemo5Open} closeSidebar={closeDemo5Sidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="Shop" btnClass="p-2">
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Products" href="" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper label="Profile" btnClass="p-2">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Projects" href="/" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Sidebar" {spanClass} href="/components/sidebar">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
      <SidebarGroup border>
        <SidebarDropdownWrapper label="Setting" btnClass="p-2">
          {#snippet icon()}
            <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Account" href="" />
        </SidebarDropdownWrapper>
      </SidebarGroup>
    </Sidebar>

    <div class="h-96 overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">All open</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} isSingle={false} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="Shop" btnClass="p-2">
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Products" href="" />
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper label="Profile" btnClass="p-2">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Projects" href="/" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Sidebar" {spanClass} href="/components/sidebar">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
      <SidebarGroup border>
        <SidebarDropdownWrapper label="Setting" btnClass="p-2">
          {#snippet icon()}
            <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Account" href="" />
        </SidebarDropdownWrapper>
      </SidebarGroup>
    </Sidebar>

    <div class="h-[480px] overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Transition</h2>
<div class="my-4 h-[550px] rounded border border-gray-200 p-4 dark:border-gray-600">
  <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
  <div class="relative">
    <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce" btnClass="p-2" transition={fade} {params}>
          {#snippet icon()}
            <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          <SidebarItem label="Sidebar" href="/components/sidebar" />
          <SidebarItem label="Billing" />
          <SidebarItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" {spanClass} href="/">
          {#snippet icon()}
            <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass} href="/">
          {#snippet icon()}
            <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
          {#snippet subtext()}
            <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Users">
          {#snippet icon()}
            <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign In">
          {#snippet icon()}
            <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Sign Up">
          {#snippet icon()}
            <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
      </SidebarGroup>
    </Sidebar>

    <div class="h-[500px] overflow-auto px-4 md:ml-64">
      <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
        <PlusPlaceholder colnum={3} rownum={1} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
        <PlusPlaceholder />
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">Static positioning</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <div class="h-96 overflow-auto px-4">
    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <div class="flex w-full flex-row pb-4">
        <SidebarButton onclick={staticDemoSidebarUi.toggle} class="mb-2" />
        <Sidebar {activeUrl} backdrop={false} isOpen={isStaticDemoOpen} closeSidebar={closeStaticDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50" position="static" activeClass="p-2" nonActiveClass="p-2">
          <SidebarGroup>
            <SidebarItem label="Dashboard" href="/">
              {#snippet icon()}
                <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              {/snippet}
            </SidebarItem>
            <SidebarItem label="Kanban" {spanClass} href="/">
              {#snippet icon()}
                <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              {/snippet}
              {#snippet subtext()}
                <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
              {/snippet}
            </SidebarItem>
            <SidebarItem label="Inbox" {spanClass} href="/">
              {#snippet icon()}
                <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              {/snippet}
              {#snippet subtext()}
                <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
              {/snippet}
            </SidebarItem>
            <SidebarItem label="Sidebar" href="/components/sidebar">
              {#snippet icon()}
                <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              {/snippet}
            </SidebarItem>
          </SidebarGroup>
        </Sidebar>
        <div class="grow pt-2 pl-4">
          <PlusPlaceholder colnum={2} rownum={2} />
        </div>
      </div>
      <PlusPlaceholder />
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</div>

<h2 class="my-4 text-2xl">onclick handler on SidebarDropdownWrapper</h2>
<div class="my-4 rounded border border-gray-200 p-4 dark:border-gray-600">
  <Sidebar position="static">
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          {#snippet icon()}
            <ChartPieSolid class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          {/snippet}
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce" onclick={handleClick}>
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
</div>
