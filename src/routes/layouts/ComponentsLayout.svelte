<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, uiHelpers, SidebarButton, SidebarDropdownWrapper } from "$lib";
  import { getContext, type Snippet } from "svelte";
  import type { Writable } from "svelte/store";
  import Toc from "../utils/Toc.svelte";
  import { extract } from "./component/Anchor.svelte";
  import { capitalizeFirstLetter } from "../builder/utils/helpers";

  interface Props {
    data: any;
    children: Snippet;
    submenu?: "api-check" | "blocks" | "builder" | "illustrations";
  }

  let { data, children, submenu }: Props = $props();
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const posts = $derived<Record<string, any[]>>(data.posts?.posts ?? {});
  const builders = $derived<Array<{ path: string }>>(data.posts?.builders ?? []);
  const blocks = ["quickstart", "application", "marketing", "publisher"];
  const drawerHidden: Writable<boolean> = getContext("drawer");
  let noToc = $derived(["blocks", "builder"].includes(submenu ?? ""));

  const sidebarUi = uiHelpers();
  let isOpen = $state(true);
  const closeSidebar = sidebarUi.close;
  $effect(() => {
    isOpen = sidebarUi.isOpen;
  });

  const names_mapping: Record<string, string> = {
    pages: "Getting Started"
  };

  let mainSidebarUrl = $derived(page.url.pathname);

  // Create state variables for each dropdown
  let dropdownStates: Record<string, boolean> = $state({});

  // Update dropdown states based on current route
  $effect(() => {
    const states: Record<string, boolean> = {};

    // Check each post category
    for (const key in posts) {
      const paths = posts[key].map((item: any) => (key === "icons" || key === "illustrations" ? `/${key}${item.path}` : `/docs/${key}${item.path}`));

      states[key] = paths.some((path: string) => mainSidebarUrl.startsWith(path));
    }

    // Check builders
    if (builders.length) {
      const builderPaths = builders.map((b) => `/builder/${b.path}`);
      states["builders"] = builderPaths.some((path) => mainSidebarUrl.startsWith(path));
    }

    // Check blocks
    states["blocks"] = blocks.some((block) => mainSidebarUrl.startsWith(`/blocks/${block}`));

    dropdownStates = states;
  });

  afterNavigate(() => {
    // this fixes https://github.com/themesberg/flowbite-svelte/issues/364
    document.getElementById("svelte")?.scrollTo({ top: 0 });
    closeSidebar();
  });

  let labelClass = "";
  let mainClass = "fixed inset-0 z-40 lg:z-39 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block bg-white dark:bg-gray-900";
  let nonActiveClass =
    "text-sm transition-colors duration-200 relative font-medium hover:text-gray-900 hover:bg-transparent dark:hover:bg-transparent hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white";
  let activeClass = "text-sm relative font-medium cursor-default bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-primary-700 dark:text-primary-700";
  let triggerClass =
    "my-0 text-sm font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-200 hover:bg-transparent dark:hover:bg-transparent hover:text-primary-700 dark:hover:text-primary-600";
  let contentClass = "overflow-y-auto px-4 pt-20 lg:pt-4 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block lg:me-0 lg:sticky top-20 bg-white dark:bg-gray-900";
  // const blockCls = "px-4 mx-auto max-w-8xl";
  const nonBlockCls = "min-w-0 lg:static lg:container lg:mx-auto lg:max-h-full lg:overflow-visible";
</script>

{#if submenu !== "blocks"}
  <SidebarButton breakpoint="lg" onclick={sidebarUi.toggle} class="fixed top-2 z-40 md:top-4" />
  <Sidebar
    breakpoint="lg"
    backdrop={true}
    isSingle={false}
    {isOpen}
    {closeSidebar}
    classes={{ content: contentClass, nonactive: nonActiveClass, active: activeClass }}
    activeUrl={mainSidebarUrl}
    class={mainClass}
    params={{ x: -50, duration: 50 }}
  >
    <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
    <SidebarGroup>
      {#each Object.entries(posts) as [key, values] (key)}
        <SidebarDropdownWrapper
          label={names_mapping[key] ?? key}
          classes={{ trigger: triggerClass, list: "space-y-0 p-0" }}
          class={dropdownStates[key] ? "text-primary-700 dark:text-primary-700" : "text-gray-700 dark:text-gray-200"}
          bind:isOpen={dropdownStates[key]}
        >
          {#each values as { meta, path }}
            {#if meta?.component_title}
              {@const href = key === "icons" || key === "illustrations" ? `/${key}${path}` : `/docs/${key}${path}`}
              <SidebarItem label={meta.component_title} {href} classes={{ label: labelClass }} />
            {/if}
          {/each}
        </SidebarDropdownWrapper>
      {/each}
      {#if builders.length}
        <SidebarDropdownWrapper
          label="Builders"
          classes={{ trigger: triggerClass, list: "space-y-0 p-0" }}
          class={dropdownStates["builders"] ? "text-primary-700 dark:text-primary-700" : "text-gray-700 dark:text-gray-200"}
          bind:isOpen={dropdownStates["builders"]}
        >
          {#each builders as builder}
            {@const pathWithoutSlash = builder.path.replace(/^\//, "")}
            {@const capitalizedPath = pathWithoutSlash.charAt(0).toUpperCase() + pathWithoutSlash.slice(1)}
            {@const href = `/builder/${builder.path}`}
            <SidebarItem label={capitalizedPath} {href} classes={{ label: labelClass }} />
          {/each}
        </SidebarDropdownWrapper>
      {/if}
      <SidebarDropdownWrapper
        label="Blocks"
        classes={{ trigger: triggerClass, list: "space-y-0 p-0" }}
        class={dropdownStates["blocks"] ? "text-primary-700 dark:text-primary-700" : "text-gray-700 dark:text-gray-200"}
        bind:isOpen={dropdownStates["blocks"]}
      >
        {#each blocks as block}
          <SidebarItem label={capitalizeFirstLetter(block)} href="/blocks/{block}" classes={{ label: labelClass }} />
        {/each}
      </SidebarDropdownWrapper>
      <SidebarItem
        label="Admin Dashboard"
        href="/admin-dashboard"
        classes={{ label: "ms-3 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-700 dark:text-gray-200" }}
      ></SidebarItem>
    </SidebarGroup>
    <!-- /SidebarWrapper -->
  </Sidebar>
{/if}

<div hidden={$drawerHidden} class="static inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60" onclick={closeSidebar} onkeydown={closeSidebar} role="presentation"></div>

{#if noToc}
  <main class="max-w-8xl mx-auto min-w-0 flex-auto pb-40 lg:static lg:max-h-full lg:overflow-visible">
    {@render children()}
  </main>
{:else}
  <main class={nonBlockCls}>
    {@render children()}
  </main>
  <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
{/if}
