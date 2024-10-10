<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";
  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";
  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const sidebarEx1 = [
    {
      label: "Dashboard",
      href: "/",
      icon: ChartOutline
    },
    {
      label: "Kanban",
      href: "/",
      icon: GridSolid,
      subContent: "Pro"
    },
    {
      label: "Inbox",
      href: "/",
      icon: MailBoxSolid,
      subContent: "3"
    },
    {
      label: "Sidebar",
      href: "/components/sidebar",
      icon: UserSolid
    }
  ];
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
  });
</script>

<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
<div class="relative">
  <Sidebar backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" class="z-50 h-full">
    <SidebarGroup>
      {#each sidebarEx1 as { label, href, icon, subContent }}
        <SidebarItem {label} {href} {spanClass}>
          {#snippet iconSlot()}
            <icon class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></icon>
          {/snippet}
          {#snippet subtext()}
            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
              {subContent}
            </span>
          {/snippet}
        </SidebarItem>
      {/each}
    </SidebarGroup>
  </Sidebar>
  <div class="h-96 overflow-auto px-4 md:ml-64">
    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
      <PlusPlaceholder colnum={3} rownum={1} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
      <PlusPlaceholder />
      <PlusPlaceholder colnum={2} rownum={2} />
    </div>
  </div>
</div>
