<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from '$lib';
  import SidebarDropdownWrapper from '$lib/sidebars/SidebarDropdownWrapper.svelte';
  import ChevronDown from '$lib/utils/ChevronDown.svelte';
  import ChevronRight from '$lib/utils/ChevronRight.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { PageData } from '../$types';

  export let data: PageData;

  const posts: Record<string, any[]> = data.posts;
  const drawerHidden: Writable<boolean> = getContext('drawer');

  const closeDrawer = () => {
    drawerHidden.set(true);
  };

  const names_mapping: Record<string, string> = {
    pages: 'Getting Started'
  };

  const fileDir = (path: string) => path.split('/').slice(0, -1).pop() ?? '';

  let activeUrl: string;

  afterNavigate((navigation) => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById('svelte')?.scrollTo({ top: 0 });
    closeDrawer();

    activeUrl = navigation.to?.url.pathname ?? '';

    const key = fileDir(activeUrl);
    for (const k in dropdowns) dropdowns[k] = false;
    dropdowns[key] = true;
  });

  let spanClass = '';
  let aClass =
    'transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white';
  let activeClass =
    'relative flex items-center flex-wrap font-medium cursor-default text-primary-700 dark:text-primary-700';

  let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<Sidebar
  class={$drawerHidden && 'hidden'}
  asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block">
  <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
  <SidebarWrapper
    divClass="overflow-y-auto px-4 pt-20 lg:pt-0 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:mr-0 lg:sticky top-20">
    <nav class="font-normal text-base lg:text-sm">
      <SidebarGroup ulClass="list-unstyled fw-normal small mb-4">
        {#each Object.entries(posts) as [key, values] (key)}
          <SidebarDropdownWrapper
            bind:isOpen={dropdowns[key]}
            label={names_mapping[key] ?? key}
            ulClass="space-y-2.5"
            btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600"
            spanClass=""
            class={dropdowns[key]
              ? 'text-primary-700 dark:text-primary-700'
              : 'text-gray-900 dark:text-white'}>
            <ChevronRight size="24" slot="arrowdown" variation="solid" />
            <ChevronDown size="24" slot="arrowup" variation="solid" />
            {#each values as { meta, path }}
              {@const href = `/docs/${key}${path}`}
              {#if meta}
                <SidebarItem
                  label={meta.component_title}
                  {href}
                  {spanClass}
                  {aClass}
                  {activeClass}
                  active={activeUrl === href} />
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
  class="fixed inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60"
  on:click={closeDrawer}
  on:keydown={closeDrawer} />

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  <slot />
</main>
