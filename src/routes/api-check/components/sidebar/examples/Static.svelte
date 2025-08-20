<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "flowbite-svelte";
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";
  import PlusPlaceholder from "../../../../utils/PlusPlaceholder.svelte";
  import { page } from "$app/state";
  let activeUrl = $state(page.url.pathname);
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(true);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });
</script>

<div class="h-96 overflow-auto px-4">
  <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
    <div class="flex w-full flex-row pb-4">
      <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
      <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50" position="static" classes={{ nonactive: "p-2", active: "p-2" }}>
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
          <SidebarItem label="Sidebar" href="/components/sidebar">
            {#snippet icon()}
              <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            {/snippet}
          </SidebarItem>
        </SidebarGroup>
      </Sidebar>
      <div class="grow pt-2 pl-4">
        <PlusPlaceholder colnum={2} rownum={2} />
      </div>
    </div>
    <PlusPlaceholder />
    <PlusPlaceholder colnum={3} rownum={1} />
    <PlusPlaceholder />
    <PlusPlaceholder colnum={2} rownum={2} />
  </div>
</div>