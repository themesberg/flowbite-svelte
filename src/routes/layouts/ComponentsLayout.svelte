<script lang="ts">
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';
  import { Sidebar, SidebarGroup, SidebarItem, uiHelpers } from '$lib';
  import SidebarDropdownWrapper from '$lib/sidebar/SidebarDropdownWrapper.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { ChevronDownOutline, ChevronUpOutline } from 'flowbite-svelte-icons';
  import SidebarButton from '$lib/sidebar/SidebarButton.svelte';

  let { data, children } = $props();
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const posts: Record<string, any[]> = data.posts || {};
  const drawerHidden: Writable<boolean> = getContext('drawer');

  // const closeDrawer = () => {
  //   drawerHidden.set(true);
  // };

  let activeUrl = $state($page.url.pathname);
  const sidebarUi = uiHelpers();
  let isOpen = $state(false);
  const closeSidebar = sidebarUi.close;
  $effect(() => {
    isOpen = sidebarUi.isOpen;
    activeUrl = $page.url.pathname;
  });

  const names_mapping: Record<string, string> = {
    pages: 'Getting Started'
  };

  const fileDir = (path: string) => path.split('/').slice(0, -1).pop() ?? '';

  let mainSidebarUrl = $derived($page.url.pathname);
  let activeMainSidebar: string;

  afterNavigate((navigation) => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById('svelte')?.scrollTo({ top: 0 });
    closeSidebar();

    activeMainSidebar = navigation.to?.url.pathname ?? '';

    const key = fileDir(activeMainSidebar);
    for (const k in dropdowns) dropdowns[k] = false;
    dropdowns[key] = true;
  });

  let spanClass = '';
  let nonActiveClass = 'transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white';
  let activeClass = 'text-base ms-6 flex items-center flex-wrap font-medium cursor-default text-primary-700 dark:text-primary-700';

  let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<SidebarButton onclick={sidebarUi.toggle} class="mb-2" />
<div class="relative">
  <!-- <Sidebar {nonActiveClass} activeUrl={mainSidebarUrl} asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block bg-white dark:bg-gray-900"> -->
  <Sidebar activeUrl={mainSidebarUrl} {nonActiveClass} backdrop={false} {isOpen} {closeSidebar} params={{ x: -50, duration: 50 }} activeClass="p-2" class="mt-18 z-10 h-full">
    <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
    <!-- SidebarWrapper divClass="overflow-y-auto px-4 pt-20 lg:pt-0 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block lg:me-0 lg:sticky top-20" -->
    <nav class="font-normal text-base lg:text-sm">
      <SidebarGroup>
        {#each Object.entries(posts) as [key, values] (key)}
          <SidebarDropdownWrapper label={names_mapping[key] ?? key} ulClass="space-y-2.5" btnClass="flex items-center justify-between w-full my-4 text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600" spanClass="" class={dropdowns[key] ? 'text-primary-700 dark:text-primary-700' : 'text-gray-900 dark:text-white'}>
            {#each values as { meta, path }}
              {@const href = key === 'icons' ? `/${key}${path}` : `/docs/${key}${path}`}
              {#if meta}
                <SidebarItem label={meta.component_title} {href} {spanClass} {activeClass} />
              {/if}
            {/each}
          </SidebarDropdownWrapper>
        {/each}
        <SidebarItem label="Blocks" href="https://flowbite-svelte-blocks.vercel.app/" spanClass="w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-900 dark:text-white my-4" {activeClass} />
        <SidebarItem label="Admin Dashboard" href="https://flowbite-svelte-admin-dashboard.vercel.app/" spanClass="w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-900 dark:text-white" {activeClass} />
      </SidebarGroup>
    </nav>
    <!-- /SidebarWrapper -->
  </Sidebar>
</div>

<div hidden={$drawerHidden} class="static inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60" onclick={closeSidebar} onkeydown={closeSidebar} role="presentation"></div>

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  {@render children()}
</main>
