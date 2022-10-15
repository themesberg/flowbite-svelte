<script lang="ts">
  import { page } from '$app/stores';
  import { experimental } from './moduleItems/+server.js';
  import Toc from './Toc/+page.svelte';
  import '../app.css';
  import {
    DarkMode,
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownWrapper,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Drawer,
    CloseButton
  } from '$lib';
  import { sineIn } from 'svelte/easing';
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  export let data: PageData;
  let breakPoint: number = 1024;
  let width: number;
  let backdrop: boolean = false;
  let activateClickOutside = true;
  let drawerHidden: boolean = false;
  $: if (width >= breakPoint) {
    drawerHidden = false;
    activateClickOutside = false;
  } else {
    drawerHidden = true;
    activateClickOutside = true;
  }
  onMount(() => {
    if (width >= breakPoint) {
      drawerHidden = false;
      activateClickOutside = false;
    } else {
      drawerHidden = true;
      activateClickOutside = true;
    }
  });
  const toggleSide = () => {
    if (width < breakPoint) {
      drawerHidden = !drawerHidden;
    }
  };
  const toggleDrawer = () => {
    drawerHidden = false;
  };
  $: activeUrl = $page.url.pathname;
  $: containPath = () => {
    // add your logic here
    false;
  };

  let logo = '/images/flowbite-svelte-icon-logo.svg';
  let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
  let darkmodebtn =
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';
  let divClass = 'w-full md:block md:w-auto pr-8';
  let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
</script>

<svelte:window bind:innerWidth={width} />

<div class="mx-auto">
  <Navbar navClass="px-2 py-0.5 fixed w-full mx-auto z-20 top-0 left-0 border-b" let:hidden let:toggle>
    <NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite-Svelte Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite-Svelte
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} {divClass} {ulClass}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/pages/about">About</NavLi>
      <NavLi href="https://github.com/themesberg/flowbite-svelte">GitHub</NavLi>
    </NavUl>
  </Navbar>
  <Drawer
    transitionType="fly"
    {backdrop}
    {transitionParams}
    bind:hidden={drawerHidden}
    bind:activateClickOutside
    leftOffset="lg:top-16 h-screen lg:left-0"
    id="sidebar"
    width="w-64"
    class="overflow-scroll pb-32">
    <div class="flex items-center">
      <CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
    </div>
    <Sidebar asideClass="w-54">
      <SidebarWrapper>
        <SidebarGroup>
          {#each data.pages as { meta, path }}
            <SidebarItem
              label={meta.title}
              href={`/pages${path}`}
              {spanClass}
              on:click={toggleSide}
              active={activeUrl === `/pages${path}`} />
          {/each}
        </SidebarGroup>
        <SidebarGroup class="pt-4">
          <SidebarDropdownWrapper label="COMPONENTS" isOpen={activeUrl.includes('components')}>
            {#each data.components as { meta, path }}
              <SidebarItem
                label={meta.breadcrumb_title}
                href={`/components${path}`}
                {spanClass}
                on:click={toggleSide}
                active={activeUrl === `/components${path}`} />
            {/each}
          </SidebarDropdownWrapper>
        </SidebarGroup>
        <SidebarGroup class="pt-4">
          <SidebarDropdownWrapper label="FORMS" isOpen={activeUrl.includes('forms')}>
            {#each data.forms as { meta, path }}
              <SidebarItem
                label={meta.breadcrumb_title}
                href={`/forms${path}`}
                {spanClass}
                on:click={toggleSide}
                active={activeUrl === `/forms${path}`} />
            {/each}
          </SidebarDropdownWrapper>
        </SidebarGroup>
        <SidebarGroup class="pt-4">
          <SidebarDropdownWrapper label="TYPTOGRAPHY" isOpen={activeUrl.includes('typography')}>
            {#each data.typography as { meta, path }}
              <SidebarItem
                label={meta.breadcrumb_title}
                href={`/typography${path}`}
                {spanClass}
                on:click={toggleSide}
                active={activeUrl === `/typography${path}`} />
            {/each}
          </SidebarDropdownWrapper>
        </SidebarGroup>
        <SidebarGroup class="pt-4">
          <SidebarDropdownWrapper label="EXTEND" isOpen={activeUrl.includes('extend')}>
            {#each data.extend as { meta, path }}
              <SidebarItem
                label={meta.breadcrumb_title}
                href={`/extend${path}`}
                {spanClass}
                on:click={toggleSide}
                active={activeUrl === `/extend${path}`} />
            {/each}
          </SidebarDropdownWrapper>
        </SidebarGroup>
        <SidebarGroup class="pt-4">
          <SidebarDropdownWrapper label="UTILS" isOpen={activeUrl.includes('utilities')}>
            {#each data.utils as { meta, path }}
              <SidebarItem
                label={meta.breadcrumb_title}
                href={`/utilities${path}`}
                {spanClass}
                on:click={toggleSide}
                active={activeUrl === `/utilities${path}`} />
            {/each}
          </SidebarDropdownWrapper>
        </SidebarGroup>
        <SidebarGroup class="pt-4">
          <SidebarDropdownWrapper label="EXPERIMENTAL" isOpen={activeUrl.includes('datepicker')}>
            {#each experimental as { href, name, rel }}
              <SidebarItem
                label={name}
                {href}
                {spanClass}
                on:click={toggleSide}
                active={activeUrl === `${href}`} />
            {/each}
          </SidebarDropdownWrapper>
        </SidebarGroup>
      </SidebarWrapper>
    </Sidebar>
  </Drawer>
  <DarkMode btnClass={darkmodebtn} />

  <div class="flex px-4 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto">
      <slot />
    </main>
    <Toc />
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
              <FooterLink
                liClass="mb-4"
                href="https://github.com/themesberg/flowbite-svelte/blob/main/LICENSE">License</FooterLink>
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
</div>
