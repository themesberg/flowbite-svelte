<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import type { PageData } from './$types';

  import {
    DarkMode,
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper
  } from '$lib';

  import '../app.css';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';
  import GitHub from './utils/icons/GitHub.svelte';
  import ToolbarLink from './utils/ToolbarLink.svelte';
  import Discord from './utils/icons/Discord.svelte';
  import YouTube from './utils/icons/YouTube.svelte';
  import DocBadge from './utils/DocBadge.svelte';

  export let data: PageData;

  let drawerHidden: boolean = true;

  const toggleDrawer = () => {
    drawerHidden = !drawerHidden;
  };

  afterNavigate(() => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById('svelte')?.scrollTo({ top: 0 });
    drawerHidden = true;
  });

  $: activeUrl = $page.url.pathname;
  let logo = '/images/flowbite-svelte-icon-logo.svg';
  let spanClass = '';
  let aClass =
    'py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white ';
  let divClass = 'w-full ml-auto md:block md:w-auto order-1 md:order-none';
  let ulClass =
    'flex flex-col p-3 mt-4 md:flex-row md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300';

  const names_mapping: Record<string, string> = {
    pages: 'Getting Started'
  };
  console.log($page.route.id === '/');
</script>

<header
  class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
  <div
    id="banner"
    tabindex="-1"
    class="z-50 flex justify-center w-full px-4 py-3 border border-b border-gray-200 bg-gray-50 dark:border-gray-600 md:py-4 dark:bg-gray-700">
    <div class="items-center md:flex">
      <p class="text-sm font-medium text-gray-900 md:my-0 dark:text-white items-center flex">
        <DocBadge border class="mr-3">New</DocBadge>
        We have launched Flowbite Svelte Blocks!<a
          class="inline-flex items-center ml-2 text-sm font-medium text-primary-700 md:ml-2 dark:text-primary-700 hover:underline"
          href="https://flowbite-svelte-blocks.vercel.app/"
          target="_blank"
          rel="noreferrer"
          >Check it out<svg
            class="w-4 h-4 ml-1 text-primary-700 dark:text-primary-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" /></svg
          ></a>
      </p>
    </div>
  </div>
  <Navbar
    color="default"
    fluid
    navClass="flex items-center justify-between w-full z-40 px-3 py-3 mx-auto"
    let:hidden
    let:toggle>
    <span hidden={$page.route.id === '/'}
      ><NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" /></span>
    <NavBrand href="/">
      <img src={logo} class="mr-3 h-8" alt="Flowbite Svelte Logo" />
      <span class="self-center whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white">
        Flowbite Svelte
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl
      {hidden}
      {divClass}
      {ulClass}
      nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <NavLi class="mb-3 md:px-2 xl:px-2 md:mb-0" href="/">Home</NavLi>
      <NavLi class="mb-3 md:px-2 xl:px-2 md:mb-0" href="/pages/about">About</NavLi>
      <NavLi class="mb-3 md:px-2 xl:px-2 md:mb-0" href="https://flowbite-svelte-blocks.vercel.app/"
        >Blocks</NavLi>
    </NavUl>

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
    <Tooltip class="dark:bg-gray-900">Toggle dark mode</Tooltip>
  </Navbar>
</header>

<div>
  <div class="lg:flex">
    <div hidden={$page.route.id === '/'}>
      <Sidebar
        class={drawerHidden && 'hidden'}
        asideClass="fixed inset-0 z-20 flex-none h-full w-72 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:w-64 lg:block lg:sticky top-24 lg:top-28">
        <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
        <SidebarWrapper
          divClass="overflow-y-auto z-20 h-full p-4 bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:mr-0">
          <nav
            class="font-normal text-base lg:text-sm">
            <ul class="list-unstyled">
              {#each Object.entries(data) as [key, values]}
                <li class="mt-8">
                  <h5
                    class="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                    {names_mapping[key] ?? key}
                  </h5>
                  <SidebarGroup ulClass="py-1 list-unstyled fw-normal small">
                    {#each values as { meta, path }}
                      {#if meta}
                        <SidebarItem
                          label={meta.component_title}
                          href={`/docs/${key}${path}`}
                          {spanClass}
                          {aClass}
                          activeClass={aClass}
                          active={activeUrl === `/pages${path}`} />
                      {/if}
                    {/each}
                  </SidebarGroup>
                </li>
              {/each}
            </ul>
          </nav>
        </SidebarWrapper>
      </Sidebar>
    </div>
    <div
      class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60"
      id="sidebarBackdrop"
      hidden={drawerHidden}
      on:click={toggleDrawer}
      on:keydown={toggleDrawer} />
    <main
      class="flex-auto {$page.route.id === '/'
        ? 'mx-auto max-w-8xl'
        : 'w-full'} min-w-0 lg:static lg:max-h-full lg:overflow-visible">
      <slot />
    </main>
  </div>
</div>
