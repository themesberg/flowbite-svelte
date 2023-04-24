<script lang="ts">
  import { page } from '$app/stores';
  import { DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from '$lib';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import '../app.css';
  import DocBadge from './utils/DocBadge.svelte';
  import Discord from './utils/icons/Discord.svelte';
  import GitHub from './utils/icons/GitHub.svelte';
  import YouTube from './utils/icons/YouTube.svelte';
  import ToolbarLink from './utils/ToolbarLink.svelte';
  import type { LayoutData } from './$types';
  import NavSidebarHamburger from '$lib/navbar/NavSidebarHamburger.svelte';
  import AlgoliaSearch from './utils/AlgoliaSearch.svelte';

  export let data: LayoutData;

  let isHomePage: boolean;
  $: isHomePage = $page.route.id === '/';

  let version = data.package.version ?? 'N/A';

  $: activeUrl = $page.url.pathname;
  let logo = '/images/flowbite-svelte-icon-logo.svg';
  let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass =
    'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4';

  const drawerHiddenStore: Writable<boolean> = writable<boolean>(true);
  setContext('drawer', drawerHiddenStore);

  const toggleDrawer = () => {
    drawerHiddenStore.update((state) => !state);
  };
</script>

<header
  class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
  <Navbar
    color="default"
    fluid
    navClass="flex items-center justify-between w-full mx-auto py-1.5 px-4 {isHomePage
      ? 'max-w-8xl lg:px-20 px-4'
      : ''}"
    let:hidden
    let:toggle>
    <span hidden={$page.route.id === '/'}>
      <NavSidebarHamburger on:click={toggleDrawer} btnClass="mr-3 m-0 mr-3 lg:hidden" />
    </span>
    <NavBrand href="/">
      <img src={logo} class="mr-3 h-8" alt="Flowbite Svelte Logo" />
      <span class="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white">
        Flowbite Svelte
      </span>
    </NavBrand>

    {#if !isHomePage}
      <AlgoliaSearch />
    {/if}

    <NavUl
      {hidden}
      {divClass}
      {ulClass}
      on:click={() => setTimeout(toggle, 1)}
      nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
      activeClass="md:!pl-3 md:!py-2 lg:!pl-0 text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:dark:text-primary-700 dark:bg-primary-600 lg:dark:bg-transparent cursor-default">
      <NavLi class="lg:px-2 lg:mb-0" active={activeUrl === '/'} href="/">Home</NavLi>
      <NavLi
        class="lg:px-2 lg:mb-0"
        active={activeUrl.startsWith('/docs/pages/introduction')}
        href="/docs/pages/introduction">Docs</NavLi>
      <NavLi
        class="lg:px-2 lg:mb-0"
        active={activeUrl.startsWith('/docs/pages/quickstart')}
        href="/docs/pages/quickstart">Quickstart</NavLi>
      <NavLi
        class="lg:px-2 lg:mb-0"
        active={activeUrl.startsWith('/docs/components/accordion')}
        href="/docs/components/accordion">Components</NavLi>
      <NavLi
        class="lg:px-2 lg:mb-0"
        active={activeUrl.startsWith('/figma')}
        href="https://flowbite.com/figma/">Figma</NavLi>
      <NavLi class="lg:px-2 lg:mb-0" href="https://flowbite-svelte-blocks.vercel.app/">Blocks</NavLi>
    </NavUl>

    <div class="flex items-center ml-auto">
      <ToolbarLink
        class="hidden sm:inline-block dark:hover:text-white hover:text-gray-900"
        name="View on GitHub"
        href="https://github.com/themesberg/flowbite-svelte">
        <GitHub /></ToolbarLink>
      <ToolbarLink
        class="hidden xl:inline-block dark:hover:text-white hover:text-gray-900"
        name="Join community on Discord"
        href="https://discord.gg/4eeurUVvTy"><Discord /></ToolbarLink>
      <ToolbarLink
        class="hidden xl:inline-block dark:hover:text-white hover:text-gray-900"
        name="Subscribe to YouTube channel"
        href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A">
        <YouTube />
      </ToolbarLink>
      <DarkMode size="lg" class="inline-block dark:hover:text-white hover:text-gray-900" />
      <Tooltip class="dark:bg-gray-900" placement="bottom-end">Toggle dark mode</Tooltip>
    </div>
    <a href="https://www.npmjs.com/package/flowbite-svelte" class="hidden sm:block">
      <DocBadge
        large
        class="ml-2 xl:ml-6 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-800 dark:hover:text-white">
        v{version} 
      </DocBadge>
    </a>

    <NavHamburger on:click={toggle} btnClass="ml-3 m-0 lg:hidden {isHomePage ? '' : 'hidden'}" />
  </Navbar>
</header>

<div class="lg:flex">
  <slot />
</div>
