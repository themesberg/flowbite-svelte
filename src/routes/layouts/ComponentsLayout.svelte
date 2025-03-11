<script lang="ts">
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";
  import { Sidebar, SidebarGroup, SidebarItem, uiHelpers } from "$lib";
  import SidebarDropdownWrapper from "$lib/sidebar/SidebarDropdownWrapper.svelte";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { ChevronDownOutline, ChevronUpOutline } from "flowbite-svelte-icons";
  import SidebarButton from "$lib/sidebar/SidebarButton.svelte";
  import Toc from "../utils/Toc.svelte";
  import { extract } from "./component/Anchor.svelte";

  let { data, children } = $props();
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const posts: Record<string, any[]> = data.posts || {};
  const drawerHidden: Writable<boolean> = getContext("drawer");

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
    pages: "Getting Started"
  };

  const fileDir = (path: string) => path.split("/").slice(0, -1).pop() ?? "";

  let mainSidebarUrl = $derived($page.url.pathname);
  let activeMainSidebar: string;

  afterNavigate((navigation) => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById("svelte")?.scrollTo({ top: 0 });
    closeSidebar();

    activeMainSidebar = navigation.to?.url.pathname ?? "";

    const key = fileDir(activeMainSidebar);
    for (const k in dropdowns) dropdowns[k] = false;
    dropdowns[key] = true;
  });

  let spanClass = "";
  let mainClass = "ms-auto relative fixed inset-0 z-30 h-full w-64 flex-none border1-e border-gray-200 bg-white lg:static lg:block lg:h-auto lg:pt-0 dark:border-gray-600 dark:bg-gray-900";
  let nonActiveClass = "text-sm transition-colors duration-200 relative font-medium hover:text-gray-900 hover:bg-transparent dark:hover:bg-transparent hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white";
  let activeClass = "text-sm relative font-medium cursor-default bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-primary-700 dark:text-primary-700";
  let btnClass = "my-0 text-sm font-semibold tracking-wide uppercase hover:bg-transparent dark:hover:bg-transparent hover:text-primary-700 dark:hover:text-primary-600";
  let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
  let divClass = "overflow-y-auto px-4 pt-20 lg:pt-0 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-6rem)] lg:block lg:me-0 lg:sticky top-20 bg-white dark:bg-gray-900";
</script>

<SidebarButton onclick={sidebarUi.toggle} class="mb-2" />

<Sidebar {nonActiveClass} {activeClass} activeUrl={mainSidebarUrl} {divClass} class={mainClass}>
  <!-- <Sidebar activeUrl={mainSidebarUrl} {activeClass} {nonActiveClass} backdrop={false} {isOpen} {closeSidebar} params={{ x: -50, duration: 50 }} class="z-10 mt-0 h-full overflow-y-scroll"> -->
  <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
  <!-- SidebarWrapper divClass="overflow-y-auto px-4 pt-20 lg:pt-0 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block lg:me-0 lg:sticky top-20" -->

  <SidebarGroup>
    {#each Object.entries(posts) as [key, values] (key)}
      <SidebarDropdownWrapper label={names_mapping[key] ?? key} ulClass="space-y-0 p-0" {btnClass} class={dropdowns[key] ? "text-primary-700 dark:text-primary-700" : "text-gray-900 dark:text-white"}>
        {#each values as { meta, path }}
          {@const href = key === "icons" ? `/${key}${path}` : `/docs/${key}${path}`}
          {#if meta}
            <SidebarItem label={meta.component_title} {href} {spanClass} />
          {/if}
        {/each}
      </SidebarDropdownWrapper>
    {/each}
    <SidebarItem label="Blocks" href="https://flowbite-svelte-blocks.vercel.app/" spanClass="mt-4 ms-4 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-900 dark:text-white" {activeClass} />
    <SidebarItem label="Admin Dashboard" href="https://flowbite-svelte-admin-dashboard.vercel.app/" spanClass="ms-4 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-900 dark:text-white" {activeClass} />
  </SidebarGroup>

  <!-- /SidebarWrapper -->
</Sidebar>

<div hidden={$drawerHidden} class="static inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60" onclick={closeSidebar} onkeydown={closeSidebar} role="presentation"></div>

<main class="flex1-auto lg:mx1-auto w1-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  {@render children()}
</main>
<Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
