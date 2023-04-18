<script lang="ts">
  import { page } from '$app/stores';
  import { DarkMode, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from '$lib';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import ChevronDown from '$lib/utils/ChevronDown.svelte';
  import { setContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import '../app.css';
  import DocBadge from './utils/DocBadge.svelte';
  import Discord from './utils/icons/Discord.svelte';
  import GitHub from './utils/icons/GitHub.svelte';
  import YouTube from './utils/icons/YouTube.svelte';
  import ToolbarLink from './utils/ToolbarLink.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  let version = data.package.version ?? 'N/A';

  $: activeUrl = $page.url.pathname;
  let logo = '/images/flowbite-svelte-icon-logo.svg';
  let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
  let ulClass =
    'flex flex-col p-3 mt-4 lg:flex-row md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300 gap-4';

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
    navClass="flex items-center justify-between w-full z-40 mx-auto py-3 px-4"
    let:hidden
    let:toggle>
    <span hidden={$page.route.id === '/'}>
      <NavHamburger on:click={toggleDrawer} btnClass="mr-3 lg:hidden" />
    </span>
    <NavBrand href="/">
      <img src={logo} class="mr-3 h-8" alt="Flowbite Svelte Logo" />
      <span class="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white">
        Flowbite Svelte
      </span>
    </NavBrand>

    <NavUl
      {hidden}
      {divClass}
      {ulClass}
      nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:text-white md:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      activeClass="text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-primary-700 dark:bg-primary-600 md:dark:bg-transparent cursor-default">
      <NavLi class="mb-3 md:px-2 xl:px-2 md:mb-0" active={activeUrl === '/'} href="/">Home</NavLi>
      <NavLi
        class="mb-3 md:px-2 xl:px-2 md:mb-0"
        active={activeUrl.startsWith('/docs/pages/introduction')}
        href="/docs/pages/introduction">Docs</NavLi>
      <NavLi
        class="mb-3 md:px-2 xl:px-2 md:mb-0"
        active={activeUrl.startsWith('/docs/pages/getting-started')}
        href="/docs/pages/getting-started">Quickstart</NavLi>
      <NavLi
        class="mb-3 md:px-2 xl:px-2 md:mb-0"
        active={activeUrl.startsWith('/figma')}
        href="https://flowbite.com/figma/">Figma</NavLi>
      <NavLi class="mb-3 md:px-2 xl:px-2 md:mb-0" href="https://flowbite-svelte-blocks.vercel.app/"
        >Blocks</NavLi>
    </NavUl>

    <div class="flex items-center ml-auto">
      <ToolbarLink
        class="hidden sm:inline-block"
        name="View on GitHub"
        href="https://github.com/themesberg/flowbite-svelte">
        <GitHub /></ToolbarLink>
      <ToolbarLink
        class="hidden sm:inline-block"
        name="Join community on Discord"
        href="https://discord.gg/4eeurUVvTy"><Discord /></ToolbarLink>
      <ToolbarLink
        class="hidden sm:inline-block"
        name="Subscribe to YouTube channel"
        href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A">
        <YouTube />
      </ToolbarLink>
      <DarkMode size="lg" class="hidden sm:inline-block" />
      <Tooltip class="dark:bg-gray-900" placement="bottom-end">Toggle dark mode</Tooltip>
    </div>
    <a href="https://www.npmjs.com/package/flowbite-svelte">
      <DocBadge large class="gap-1 ml-4 lg:ml-6 px-3">
        {version} <!-- ChevronDown class="w-4 h-4" variation="solid" / --></DocBadge>
    </a>

    <NavHamburger on:click={toggle} btnClass="ml-3 hidden sm:visible lg:hidden" />
  </Navbar>
</header>

<div class="lg:flex">
  <slot />
</div>
