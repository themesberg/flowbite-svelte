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
  import ToolbarButton from '$lib/toolbar/ToolbarButton.svelte';
  import GitHub from './utils/icons/GitHub.svelte';
  import GitHubSource from './utils/GitHubSource.svelte';
  import ToolbarLink from './utils/ToolbarLink.svelte';
  import Discord from './utils/icons/Discord.svelte';
  import YouTube from './utils/icons/YouTube.svelte';

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
    'py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ';
  let darkModeClass = 'text-lg';
  let divClass = 'w-full ml-auto md:block md:w-auto order-1 md:order-none';
  let ulClass =
    'flex flex-col p-3 mt-4 md:flex-row md:mt-0 text-sm font-medium text-gray-900 dark:text-gray-300';
</script>

<header
  class="sticky top-0 z-40 flex-none w-full mx-auto bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
  <div
    id="banner"
    tabindex="-1"
    class="z-50 flex justify-center w-full px-4 py-3 border border-b border-gray-200 bg-gray-50 dark:border-gray-600 lg:py-4 dark:bg-gray-700">
    <div class="items-center md:flex">
      <p class="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline"
          >New</span
        >We have launched Flowbite Svelte Blocks!<a
          class="inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline"
          href="https://flowbite-svelte-blocks.vercel.app/"
          target="_blank"
          rel="noreferrer"
          >Check it out<svg
            class="w-4 h-4 ml-1 text-blue-600 dark:text-blue-500"
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
    navClass="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4"
    let:hidden
    let:toggle>
    <NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
    <NavBrand href="/">
      <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite-Svelte Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold text-gray-600 dark:text-white">
        Flowbite-Svelte
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} {divClass} {ulClass}>
      <NavLi class="mb-3 lg:px-2 xl:px-2 lg:mb-0" href="/">Home</NavLi>
      <NavLi class="mb-3 lg:px-2 xl:px-2 lg:mb-0" href="/pages/about">About</NavLi>
      <NavLi class="mb-3 lg:px-2 xl:px-2 lg:mb-0" href="https://flowbite-svelte-blocks.vercel.app/"
        >Blocks</NavLi>
    </NavUl>

    <ToolbarLink name="View on GitHub" href="https://github.com/themesberg/flowbite-svelte"
      ><GitHub /></ToolbarLink>
    <ToolbarLink name="Join community on Discord" href="https://discord.gg/4eeurUVvTy"
      ><Discord /></ToolbarLink>
    <ToolbarLink
      name="Subscribe to YouTube channel"
      href="https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A">
      <YouTube />
    </ToolbarLink>
    <DarkMode class={darkModeClass} />
    <Tooltip class="dark:bg-gray-900">Toggle dark mode</Tooltip>
  </Navbar>
</header>

<div class="w-full px-4 mx-auto max-w-8xl">
  <div class="lg:flex">
    <Sidebar
      class={drawerHidden && 'hidden'}
      asideClass="fixed inset-0 z-20 flex-none h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block">
      <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
      <SidebarWrapper
        divClass="overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 dark:bg-gray-900 lg:mr-0">
        <nav
          class="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)">
          <ul class="list-unstyled">
            {#each Object.entries(data) as [key, values]}
              <li class="mt-8">
                <h5
                  class="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                  {key}
                </h5>
                <SidebarGroup ulClass="py-1 list-unstyled fw-normal small">
                  {#each values as { meta, path }}
                    {#if meta}
                      <SidebarItem
                        label={meta.breadcrumb_title}
                        href={`/${key}${path}`}
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
    <div
      class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60"
      id="sidebarBackdrop"
      hidden={drawerHidden}
      on:click={toggleDrawer}
      on:keydown={toggleDrawer} />
    <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
      <slot />
    </main>
  </div>
</div>

<div class="mx-auto mb-4 pt-4 lg:pl-64">
  <Footer footerType="custom" customClass="py-6 px-16 bg-white dark:bg-gray-900">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <FooterBrand
          href="https://flowbite-svelte.com"
          src={logo}
          alt="Flowbite-Svelte Logo"
          name="Flowbite-Svelte" />
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://flowbite.com/">Flowbite</FooterLink>
            <FooterLink liClass="mb-4" href="https://tailwindcss.com/">Tailwind CSS</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte"
              >GitHub</FooterLink>
            <FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE"
              >License</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Flowbite™" />
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <FooterIcon
          href="https://github.com/themesberg/flowbite-svelte"
          class="text-gray-400 hover:text-gray-900">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
            ><path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd" /></svg>
        </FooterIcon>
      </div>
    </div>
  </Footer>
</div>
