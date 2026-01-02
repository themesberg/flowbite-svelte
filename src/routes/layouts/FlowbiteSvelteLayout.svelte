<script lang="ts">
  import { page } from "$app/state";
  import { DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl, Badge, ThemeSelector } from "$lib";
  import Tooltip from "$lib/tooltip/Tooltip.svelte";
  import { onMount } from "svelte";
  import Discord from "../utils/icons/Discord.svelte";
  import GitHub from "../utils/icons/GitHub.svelte";
  import ToolbarLink from "../utils/ToolbarLink.svelte";
  import AlgoliaSearch from "../utils/AlgoliaSearch.svelte";

  let { children } = $props();

  let isHomePage: boolean = $derived(page.route.id === "/");
  /*eslint no-undef: "off"*/
  const version = __VERSION__;

  let logo = "/images/flowbite-svelte-icon-logo.svg";
  // let divClass = 'w-full ms-auto lg:block lg:w-auto order-1 lg:order-none';

  let activeUrl = $derived(page.url.pathname);

  // const drawerHiddenStore: Writable<boolean> = writable<boolean>(true);
  // setContext("drawer", drawerHiddenStore);

  // setContext("testC", "test for textContext");

  // const toggleDrawer = () => {
  //   drawerHiddenStore.update((state) => !state);
  // };
  // const toggle = () => {};

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

<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white py-2 md:py-0 dark:border-gray-600 dark:bg-gray-900">
  <Navbar color="default" fluid class="mx-auto flex w-full items-center justify-between" classes={{ content: "py-0" }}>
    <NavBrand href="/" class="pl-8 lg:pl-0">
      <img src={logo} class="me-3 h-8" alt="Flowbite Svelte Logo" />
      <span class="hidden self-center text-2xl font-semibold whitespace-nowrap text-gray-900 lg:block dark:text-white">Flowbite Svelte</span>
    </NavBrand>

    {#if !isHomePage}
      <AlgoliaSearch />
    {:else}
      <div id="home">
        <AlgoliaSearch />
      </div>
    {/if}

    <NavUl
      {activeUrl}
      class="order-1 ml-auto w-full lg:order-none lg:block lg:w-auto"
      classes={{ list: "flex flex-col lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-1 p-3", item: "ps-0 pe-0 lg:ps-2 lg:pe-2" }}
    >
      <NavLi href="/docs/pages/introduction">Docs</NavLi>
      <NavLi href="/docs/components/accordion">Components</NavLi>
      <NavLi href="/blocks">Blocks</NavLi>
      <NavLi href="/admin-dashboard">Dashboard</NavLi>
      <NavLi href="/icons/quickstart">Icons</NavLi>
      <NavLi href="/illustrations/illustrations">Illustrations</NavLi>
    </NavUl>

    <div class="order-1 ml-auto flex items-center lg:order-2">
      <ToolbarLink class="hidden rounded-sm p-1.5 hover:text-gray-900 xl:inline-block dark:hover:text-white" name="View on GitHub" href="https://github.com/themesberg/flowbite-svelte">
        <GitHub size="md" />
      </ToolbarLink>
      <ToolbarLink class="hidden rounded-sm p-1.5 hover:text-gray-900 xl:inline-block dark:hover:text-white" name="Join community on Discord" href="https://discord.gg/4eeurUVvTy">
        <Discord />
      </ToolbarLink>
      <DarkMode size="md" class="inline-block p-1.5 hover:text-gray-900 focus:ring-gray-100 dark:hover:text-white dark:focus:ring-gray-700" />
      <Tooltip class="dark:bg-gray-900" placement="bottom-end">Toggle dark mode</Tooltip>
      <ThemeSelector />
    </div>
    <a href="https://www.npmjs.com/package/flowbite-svelte" class="order-4 hidden 2xl:block">
      <Badge large class="hover:bg-primary-600 dark:hover:bg-primary-800 ms-1 rounded-sm hover:text-white xl:ms-4 dark:hover:text-white">
        v{version}
      </Badge>
    </a>
    <NavHamburger class="order-3 m-0 ml-3 lg:hidden" />
  </Navbar>
</header>

<div class="md:mx-auto lg:flex">
  {@render children()}
</div>
