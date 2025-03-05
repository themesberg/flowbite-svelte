<script lang="ts">
  import { page } from "$app/stores";
  import { DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl, uiHelpers } from "$lib";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import { onMount, setContext } from "svelte";
  import { writable, type Writable } from "svelte/store";

  import Discord from "../utils/icons/Discord.svelte";
  import GitHub from "../utils/icons/GitHub.svelte";
  import YouTube from "../utils/icons/YouTube.svelte";
  import ToolbarLink from "../utils/ToolbarLink.svelte";
  import AlgoliaSearch from "../utils/AlgoliaSearch.svelte";
  import Badge from "$lib/badge/Badge.svelte";

  let { children } = $props();

  let isHomePage: boolean = $derived($page.route.id === "/");
  /*eslint no-undef: "off"*/
  const version = __VERSION__;

  let logo = "/images/flowbite-svelte-icon-logo.svg";
  // let divClass = 'w-full ms-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass = "flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4";

  let activeUrl = $state($page.url.pathname);
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  $effect(() => {
    navStatus = nav.isOpen;
    activeUrl = $page.url.pathname;
  });

  const drawerHiddenStore: Writable<boolean> = writable<boolean>(true);
  setContext("drawer", drawerHiddenStore);

  setContext("testC", "test for textContext");

  const toggleDrawer = () => {
    drawerHiddenStore.update((state) => !state);
  };
  const toggle = () => {};

  onMount(() => {
    // Workaround until https://github.com/sveltejs/kit/issues/2664 is fixed
    if (typeof window !== "undefined" && window.location.hash) {
      const deepLinkedElement = document.getElementById(window.location.hash.substring(1));

      if (deepLinkedElement) {
        window.setTimeout(() => deepLinkedElement.scrollIntoView(), 100);
      }
    }
  });
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
  <Navbar color="default" {toggleNav} {closeNav} {navStatus} breakPoint="xxl" fluid class="py-1.5 {isHomePage ? 'lg:px-0 max-w-7xl mx-auto' : ''}">
    <NavBrand href="/">
      <img src={logo} class="me-3 h-8" alt="Flowbite Svelte Logo" />
      <span class="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white">Flowbite Svelte</span>
    </NavBrand>

    {#if !isHomePage}
      <AlgoliaSearch />
    {:else}
      <div id="home">
        <AlgoliaSearch />
      </div>
    {/if}

    <NavUl {activeUrl} onclick={() => setTimeout(toggle, 1)}>
      <NavLi class="lg:px-2 lg:mb-0" href="/">Home</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/docs/pages/introduction">Docs</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/docs/components/accordion">Components</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/icons/svelte-4">Icons</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="https://flowbite-svelte-blocks.vercel.app/">Blocks</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="https://flowbite-svelte-admin-dashboard.vercel.app/">Dashboard</NavLi>
    </NavUl>

    <div class="flex items-center ms-auto">
      <ToolbarLink class="hidden sm:inline-block dark:hover:text-white hover:text-gray-900 focus:ring-0" name="View on GitHub" href="https://github.com/themesberg/flowbite-svelte">
        <GitHub />
      </ToolbarLink>
      <ToolbarLink class="hidden xl:inline-block dark:hover:text-white hover:text-gray-900 focus:ring-0" name="Join community on Discord" href="https://discord.gg/4eeurUVvTy">
        <Discord />
      </ToolbarLink>
      <ToolbarLink class="hidden xl:inline-block dark:hover:text-white hover:text-gray-900 focus:ring-0" name="Subscribe to YouTube channel" href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A">
        <YouTube />
      </ToolbarLink>
      <DarkMode size="lg" class="inline-block dark:hover:text-white hover:text-gray-900" />
      <Tooltip class="dark:bg-gray-900" placement="bottom-end">Toggle dark mode</Tooltip>
    </div>
    <a href="https://www.npmjs.com/package/flowbite-svelte" class="hidden sm:block">
      <Badge large class="ms-2 xl:ms-6 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-800 dark:hover:text-white">
        v{version}
      </Badge>
    </a>

    <!-- <NavHamburger on:click={toggle} class="ms-3 m-0 md:block lg:hidden {isHomePage ? '' : 'hidden'}" /> -->
  </Navbar>
</header>

<div class="lg:flex w-full">
  {@render children()}
</div>
