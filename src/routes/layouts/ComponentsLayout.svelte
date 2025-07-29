<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, uiHelpers, Label } from "$lib";
  import SidebarButton from "$lib/sidebar/SidebarButton.svelte";
  import SidebarDropdownWrapper from "$lib/sidebar/SidebarDropdownWrapper.svelte";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import Toc from "../utils/Toc.svelte";
  import ExternalLink from "../utils/icons/ExternalLink.svelte";
  import { extract } from "./component/Anchor.svelte";

  let { data, children, showapicheck = false } = $props();
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const posts: Record<string, any[]> = data.posts.posts || {};
  const builders: Array<{ path: string }> = data.posts.builders || [];
  const apicheck: Record<string, any[]> = data.posts.apicheck || [];
  const drawerHidden: Writable<boolean> = getContext("drawer");

  let activeUrl = $state(page.url.pathname);
  const hasPath = (key: string) => activeUrl.includes(key);
  let isBuilderPage = $derived(hasPath("builder"));

  const sidebarUi = uiHelpers();
  let isOpen = $state(true);
  const closeSidebar = sidebarUi.close;
  $effect(() => {
    isOpen = sidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });

  const names_mapping: Record<string, string> = {
    pages: "Getting Started"
  };

  const fileDir = (path: string) => path.split("/").slice(0, -1).pop() ?? "";

  let mainSidebarUrl = $derived(page.url.pathname);
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
  let mainClass = "fixed inset-0 z-40 lg:z-39 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block bg-white dark:bg-gray-900";
  let nonActiveClass = "text-sm transition-colors duration-200 relative font-medium hover:text-gray-900 hover:bg-transparent dark:hover:bg-transparent hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white";
  let activeClass = "text-sm relative font-medium cursor-default bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-primary-700 dark:text-primary-700";
  let btnClass = "my-0 text-sm font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-200 hover:bg-transparent dark:hover:bg-transparent hover:text-primary-700 dark:hover:text-primary-600";
  let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
  let divClass = "overflow-y-auto px-4 pt-20 lg:pt-4 h-full scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block lg:me-0 lg:sticky top-20 bg-white dark:bg-gray-900";
  //   function convertString(input: string) {
  //   // Remove the leading slash
  //   let result = input.replace("/", "");

  //   // Capitalize the first letter
  //   result = result.charAt(0).toUpperCase() + result.substring(1);

  //   return result;
  // }
  function convertString(path: string): string {
    return path.replace(/^\/(\w)(\w*)/, (match, firstChar, restOfString) => {
      return firstChar.toUpperCase() + restOfString;
    });
  }
</script>

<SidebarButton breakpoint="lg" onclick={sidebarUi.toggle} class="fixed top-4 z-40 mb-2 sm:top-4 md:top-7" />
<Sidebar breakpoint="lg" backdrop={true} {isOpen} {closeSidebar} classes={{ div: divClass, nonactive: nonActiveClass, active: activeClass }} activeUrl={mainSidebarUrl} class={mainClass} params={{ x: -50, duration: 50 }}>
  <h4 id="sidebar-label" class="sr-only">Browse docs</h4>
  {#if showapicheck}
    <SidebarGroup>
      <Label class="pl-4 text-xl">API Check</Label>
      {#each Object.entries(apicheck) as [key, values] (key)}
        <SidebarDropdownWrapper label={names_mapping[key] ?? key} classes={{ btn: btnClass, ul: "space-y-0 p-0" }} class={dropdowns[key] ? "text-primary-700 dark:text-primary-700" : "text-gray-700 dark:text-gray-200"}>
          {#each values as { path }}
            {@const href = `/api-check/${key}${path}`}
            {@const linkLabel = convertString(path)}
            <SidebarItem label={linkLabel} {href} {spanClass} />
          {/each}
        </SidebarDropdownWrapper>
      {/each}
    </SidebarGroup>
  {:else}
    <SidebarGroup>
      {#each Object.entries(posts) as [key, values] (key)}
        {#if key !== "builders"}
          <SidebarDropdownWrapper label={names_mapping[key] ?? key} classes={{ btn: btnClass, ul: "space-y-0 p-0" }} class={dropdowns[key] ? "text-primary-700 dark:text-primary-700" : "text-gray-700 dark:text-gray-200"}>
            {#each values as { meta, path }}
              {@const href = key === "icons" ? `/${key}${path}` : `/docs/${key}${path}`}
              {#if meta}
                <SidebarItem label={meta.component_title} {href} {spanClass} />
              {/if}
            {/each}
          </SidebarDropdownWrapper>
        {:else}
          <SidebarDropdownWrapper label="Builders" classes={{ btn: btnClass, ul: "space-y-0 p-0" }} class={"text-primary-700 dark:text-primary-700"}>
            {#each values.filter((builder) => builder.path !== "" && builder.path !== "layout") as builder}
              {@const pathWithoutSlash = builder.path.replace(/^\//, "")}
              {@const capitalizedPath = pathWithoutSlash.charAt(0).toUpperCase() + pathWithoutSlash.slice(1)}
              {@const href = `/builder/${builder.path}`}
              <SidebarItem label={capitalizedPath} {href} {spanClass} />
            {/each}
          </SidebarDropdownWrapper>
        {/if}
      {/each}
      <SidebarItem label="Blocks" href="https://flowbite-svelte-blocks.vercel.app/" spanClass="ms-4 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-700 dark:text-gray-200" {activeClass} target="_blank">
        {#snippet subtext()}
          <ExternalLink />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Admin Dashboard" href="https://flowbite-svelte-admin-dashboard-next.vercel.app/" spanClass="ms-4 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-700 dark:text-gray-200" {activeClass} target="_blank">
        {#snippet subtext()}
          <ExternalLink />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Icons" href="https://flowbite-svelte-icons.codewithshin.com/" spanClass="ms-4 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-700 dark:text-gray-200" {activeClass} target="_blank">
        {#snippet subtext()}
          <ExternalLink />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Illustration" href="https://flowbite-svelte-illustrations.codewithshin.com/" spanClass="ms-4 w-full text-sm font-semibold tracking-wide uppercase hover:text-primary-700 dark:hover:text-primary-600 text-gray-700 dark:text-gray-200" {activeClass} target="_blank">
        {#snippet subtext()}
          <ExternalLink />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>
  {/if}
  <!-- /SidebarWrapper -->
</Sidebar>

<div hidden={$drawerHidden} class="static inset-0 z-20 bg-gray-900/50 dark:bg-gray-900/60" onclick={closeSidebar} onkeydown={closeSidebar} role="presentation"></div>

{#if isBuilderPage}
  <main class="mx-auto max-w-7xl min-w-0 flex-auto px-8 pb-40 lg:static lg:max-h-full lg:overflow-visible">
    {@render children()}
  </main>
{:else}
  <main class="min-w-0 lg:static lg:container lg:mx-auto lg:max-h-full lg:overflow-visible">
    {@render children()}
  </main>
  <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
{/if}
