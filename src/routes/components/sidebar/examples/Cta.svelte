<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, SidebarCta, uiHelpers } from '$lib';
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, CloseOutline } from 'flowbite-svelte-icons';
  import PlusPlaceholder from '../../../utils/PlusPlaceholder.svelte';
  const spanClass = 'flex-1 ms-3 whitespace-nowrap';
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
  });
</script>

<SidebarButton onclick={demoSidebarUi.toggle} />
<div class="relative">
  <Sidebar backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-20 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">
    <SidebarGroup>
      <SidebarItem label="Dashboard" href="/">
        {#snippet iconSlot()}
          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        {#snippet iconSlot()}
          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        {#snippet iconSlot()}
          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Sidebar" href="/components/sidebar">
        {#snippet iconSlot()}
          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarCta label="Beta">
        {#snippet icon()}
          <button type="button" class="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg bg-primary-50 p-1 text-primary-900 hover:bg-primary-200 focus:ring-2 focus:ring-primary-400 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <CloseOutline class="h-4 w-4" />
          </button>
        {/snippet}
        <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>
        <a class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" href="/">Turn new navigation off</a>
      </SidebarCta>
    </SidebarGroup>
  </Sidebar>
  <div class="h-96 overflow-scroll px-4 md:ml-64">
    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</div>
