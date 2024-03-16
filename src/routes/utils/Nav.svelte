<script>
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavUl,
    uiHelpers,
    Darkmode,
    Drawer,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarDropdownWrapper
  } from '$lib';
  import GitHub from './GitHub.svelte';
  import { sineIn } from 'svelte/easing';

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  const navDrawer = uiHelpers();
  let navDrawerStatus = $state(false);
  const closeNavDrawer = navDrawer.close;

  let nav = uiHelpers();

  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;

  $effect(() => {
    navDrawerStatus = navDrawer.isOpen;
    navStatus = nav.isOpen;
  });
  const activeClass =
    'flex items-center p-2 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
</script>

<header
  class="sticky top-0 z-50 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-950 lg:pl-4"
>
  <Navbar {toggleNav} {closeNav} {navStatus} fluid div2class="ml-auto w-full">
    {#snippet brand()}
      <button
        onclick={navDrawer.toggle}
        type="button"
        class="z-50 mr-4 mt-1 lg:hidden"
        aria-controls="navbar-default"
      >
        <span class="sr-only">Open drawer menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <NavBrand siteName="Svelte 5 UI lib">
        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
      </NavBrand>

      <div class="ml-auto flex items-center md:order-1">
        <a href="https://ko-fi.com/Z8Z2CHALG" target="_blank"
          ><img
            height="36"
            style="border:0px;height:36px;"
            src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
          /></a
        >
        <a
          class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block"
          href="https://github.com/shinokada/svelte-5-ui-lib"
        >
          <GitHub />
        </a>
        <Darkmode />
      </div>
    {/snippet}

    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="https://flowbite-svelte.com/">Flowbite Svelte</NavLi>
      <NavLi href="/pages/about">About</NavLi>
    </NavUl>
  </Navbar>
</header>

<Drawer
  width="64"
  drawerStatus={navDrawerStatus}
  closeDrawer={closeNavDrawer}
  {transitionParams}
>
  <div class="flex items-center pb-4">
    <h5
      id="drawer-label"
      class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"
    >
      Svelte 5 UI Lib
    </h5>
    <button
      type="button"
      onclick={closeNavDrawer}
      class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
      data-modal-hide="default-modal"
    >
      <svg
        class="h-3 w-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close drawer</span>
    </button>
  </div>
  <Sidebar
    {activeClass}
    asideclass="w-48 p-0"
    divclass="bg-transparent p-0"
    aclass="p-1 pl-4"
  >
    <SidebarGroup>
      <SidebarDropdownWrapper label="Components" svgclass="me-4" btnclass="p-1">
        <SidebarItem
          onclick={closeNavDrawer}
          label="Alert"
          href="/components/alert"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Avatar"
          href="/components/avatar"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Badge"
          href="/components/badge"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Banner"
          href="/components/banner"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Bottom navigation"
          href="/components/bottom-navigation"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Breadcrumb"
          href="/components/breadcrumb"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Button"
          href="/components/button"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Button group"
          href="/components/button-group"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Card"
          href="/components/card"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Drawer"
          href="/components/drawer"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Darkmode"
          href="/componentsdarkmode"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Device mockup"
          href="/components/device-mockup"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Dropdown"
          href="/components/dropdown"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Footer"
          href="/components/footer"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Gallery"
          href="/components/gallery"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Indicator"
          href="/components/indicator"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Kbd"
          href="/components/kbd"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="List group"
          href="/components/list-group"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Navbar"
          href="/components/navbar"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Progress"
          href="/components/progress"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Rating"
          href="/components/rating"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Sidebar"
          href="/components/sidebar"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Skeleton"
          href="/components/skeleton"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Spinner"
          href="/components/spinner"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Toast"
          href="/components/toast"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Video"
          href="/components/video"
        />
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Forms" svgclass="me-4" btnclass="p-1">
        <SidebarItem
          onclick={closeNavDrawer}
          label="Checkbox"
          href="/forms/checkbox"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Floating label"
          href="/forms/floating-label"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Radio"
          href="/forms/radio"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Range"
          href="/forms/range"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Select"
          href="/forms/select"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Toggle"
          href="/forms/toggle"
        />
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Typography" svgclass="me-4" btnclass="p-1">
        <SidebarItem
          onclick={closeNavDrawer}
          label="Blockquote"
          href="/typography/blockquote"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Heading/Span/Mark"
          href="/typography/heading"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="HR"
          href="/typography/hr"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Link"
          href="/typography/link"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="List"
          href="/typography/list"
        />
        <SidebarItem
          onclick={closeNavDrawer}
          label="Paragraph"
          href="/typography/paragraph"
        />
      </SidebarDropdownWrapper>
      <SidebarDropdownWrapper label="Plugins" svgclass="me-4" btnclass="p-1">
        <SidebarItem
          onclick={closeNavDrawer}
          label="Chart"
          href="/plugins/chart"
        />
      </SidebarDropdownWrapper>
    </SidebarGroup>
  </Sidebar>
</Drawer>
