<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, SidebarCta, uiHelpers } from "flowbite-svelte";
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, CloseOutline } from "flowbite-svelte-icons";
  import PlusPlaceholder from "../../../../utils/PlusPlaceholder.svelte";
  import { page } from "$app/state";
  let activeUrl = $state(page.url.pathname);
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });
</script>

<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
<div class="relative">
  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" classes={{ nonactive: "p-2", active: "p-2" }}>
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet icon()}
          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass} href="/">
        {#snippet icon()}
          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} href="/">
        {#snippet icon()}
          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="bg-primary-200 text-primary-600 dark:bg-primary-900 dark:text-primary-200 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/docs/components/sidebar">
        {#snippet icon()}
          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarCta label="Beta">
        {#snippet icon()}
          <button type="button" class="bg-primary-50 text-primary-900 hover:bg-primary-200 focus:ring-primary-400 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800 -mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg p-1 focus:ring-2" data-collapse-toggle="dropdown-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <CloseOutline class="h-4 w-4" />
          </button>
        {/snippet}
        <p class="text-primary-900 dark:text-primary-400 mb-3 text-sm">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>
        <a class="text-primary-900 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 text-sm underline" href="/">Turn new navigation off</a>
      </SidebarCta>
    </SidebarGroup>
  </Sidebar>
  <div class="h-[450px] overflow-auto px-4 md:ml-64">
    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</div>
