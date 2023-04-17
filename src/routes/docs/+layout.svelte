<script lang="ts">
  import type { PageData } from '../$types';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from '$lib';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import SidebarDropdownWrapper from '$lib/sidebars/SidebarDropdownWrapper.svelte';
  import ChevronRight from '$lib/utils/ChevronRight.svelte';
  import ChevronDown from '$lib/utils/ChevronDown.svelte';
  import { arrow } from '@popperjs/core';
  export let data: PageData;

  const drawerHidden: Writable<boolean> = getContext('drawer');

  const closeDrawer = () => {
    drawerHidden.set(true);
  };

  const names_mapping: Record<string, string> = {
    pages: 'Getting Started'
  };

  afterNavigate(() => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById('svelte')?.scrollTo({ top: 0 });
    closeDrawer();
  });

  $: activeUrl = $page.url.pathname;

  let spanClass = '';
  let aClass =
    'transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white';
  let activeClass =
    'relative flex items-center flex-wrap font-medium cursor-default text-primary-700 dark:text-primary-700';

  let dropdowns = Object.fromEntries(Object.keys(data).map((x) => [x, false]));
</script>

<Sidebar
  class={$drawerHidden && 'hidden'}
  asideClass="fixed inset-0 z-20 flex-none h-full w-64 pt-16 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block">
  <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
  <SidebarWrapper
    divClass="overflow-y-auto z-20 px-4 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:mr-0 lg:sticky top-32">
    <nav class="font-normal text-base lg:text-sm">
      <SidebarGroup ulClass="list-unstyled fw-normal small mb-4">
        {#each Object.entries(data) as [key, values], groupIndex (key)}
          <SidebarDropdownWrapper
            bind:isOpen={dropdowns[key]}
            label={names_mapping[key] ?? key}
            ulClass="space-y-4"
            btnClass="flex items-center justify-between w-full !leading-5 my-4 text-sm font-semibold tracking-wide uppercase lg:text-xs"
            spanClass=""
            class={dropdowns[key]
              ? 'text-primary-700 dark:text-primary-700'
              : 'text-gray-900 dark:text-white'}>
            <ChevronRight size="16" slot="arrowdown" />
            <ChevronDown size="16" slot="arrowup" />
            {#each values as { meta, path }}
              {#if meta}
                <SidebarItem
                  label={meta.component_title}
                  href={`/docs/${key}${path}`}
                  {spanClass}
                  {aClass}
                  {activeClass}
                  active={activeUrl === `/docs/${key}${path}`} />
              {/if}
            {/each}
          </SidebarDropdownWrapper>
        {/each}
      </SidebarGroup>
    </nav>
  </SidebarWrapper>
</Sidebar>

<div
  hidden={$drawerHidden}
  class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60"
  on:click={closeDrawer}
  on:keydown={closeDrawer} />

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  <slot />
</main>
