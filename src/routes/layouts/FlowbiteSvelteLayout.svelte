<script lang="ts">
  import { page } from '$app/stores';
  import { DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from '$lib';
  import Tooltip from '$lib/tooltip/Tooltip.svelte';
  import { onMount, setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  
  import DocBadge from '../utils/DocBadge.svelte';
  import Discord from '../utils/icons/Discord.svelte';
  import GitHub from '../utils/icons/GitHub.svelte';
  import YouTube from '../utils/icons/YouTube.svelte';
  import ToolbarLink from '../utils/ToolbarLink.svelte';
  import AlgoliaSearch from '../utils/AlgoliaSearch.svelte';

  let isHomePage: boolean;
  $: isHomePage = $page.route.id === '/';
  const version = __VERSION__;
  $: activeUrl = $page.url.pathname;
  let logo = '/images/flowbite-svelte-icon-logo.svg';
  let divClass = 'w-full ms-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass = 'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4';

  const drawerHiddenStore: Writable<boolean> = writable<boolean>(true);
  setContext('drawer', drawerHiddenStore);
  
  setContext('testC', 'test for textContext')

  const toggleDrawer = () => {
    drawerHiddenStore.update((state) => !state);
  };

  onMount(() => {
    // Workaround until https://github.com/sveltejs/kit/issues/2664 is fixed
    if (typeof window !== 'undefined' && window.location.hash) {
      const deepLinkedElement = document.getElementById(window.location.hash.substring(1));

      if (deepLinkedElement) {
        window.setTimeout(() => deepLinkedElement.scrollIntoView(), 100);
      }
    }
  });
</script>

<header class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
  <Navbar color="default" fluid class="py-1.5 {isHomePage ? 'lg:px-0 max-w-7xl mx-auto' : ''}" let:toggle>
    <span hidden={$page.route.id === '/'}>
      <NavHamburger onClick={toggleDrawer} class="m-0 me-3 md:block lg:hidden" />
    </span>
    <NavBrand href="/">
      <img src={logo} class="me-3 h-8" alt="Flowbite Svelte Logo" />
      <span class="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white"> Flowbite Svelte </span>
    </NavBrand>

    {#if !isHomePage}
      <AlgoliaSearch />
    {:else}
      <div id="home">
        <AlgoliaSearch />
      </div>
    {/if}

    <NavUl {divClass} {ulClass} {activeUrl} on:click={() => setTimeout(toggle, 1)} nonActiveClass="md:!ps-3 md:!py-2 lg:!ps-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent" activeClass="md:!ps-3 md:!py-2 lg:!ps-0 text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:dark:text-primary-700 dark:bg-primary-600 lg:dark:bg-transparent cursor-default">
      <NavLi class="lg:px-2 lg:mb-0" href="/">Home</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/docs/pages/introduction">Docs</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/docs/components/accordion">Components</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/icons/svelte-4">Icons</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/blocks">Blocks</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="/admin-dashboard">Dashboard</NavLi>
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
      <DocBadge large class="ms-2 xl:ms-6 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-800 dark:hover:text-white">
        v{version}
      </DocBadge>
    </a>

    <NavHamburger on:click={toggle} class="ms-3 m-0 md:block lg:hidden {isHomePage ? '' : 'hidden'}" />
  </Navbar>
</header>

<div class="lg:flex w-full dark:bg-gray-900">
  <slot />
</div>
