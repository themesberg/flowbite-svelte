<script lang="ts">
  import type { PageData } from '../$types';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from '$lib';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
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
    'py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white';
  let activeClass =
    'py-2 relative flex items-center flex-wrap font-medium cursor-default text-primary-700 dark:text-primary-700';
</script>

<Sidebar
  class={$drawerHidden && 'hidden'}
  asideClass="fixed inset-0 z-20 flex-none h-full w-64 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block lg:sticky top-24 lg:top-28">
  <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
  <SidebarWrapper
    divClass="overflow-y-auto z-20 h-full p-4 bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:mr-0">
    <nav class="font-normal text-base lg:text-sm">
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
                    {activeClass}
                    active={activeUrl === `/docs/${key}${path}`} />
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
  hidden={$drawerHidden}
  class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60"
  on:click={closeDrawer}
  on:keydown={closeDrawer} />

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  <slot />
</main>
