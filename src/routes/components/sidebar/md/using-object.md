<Sidebar aclass="p-2" asideclass="absolute top-6 left-6 z-40">
  <SidebarGroup>
    {#each sidebarEx1 as { label, href, iconName, subContent }}
      <SidebarItem {label} {href} {spanclass}>
        {#snippet iconSlot()}
          <svelte:component this={iconName} class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
        {/snippet}
        {#snippet subtext()}
          <span
            class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          >
            {subContent}
          </span>
        {/snippet}
      </SidebarItem>
    {/each}
  </SidebarGroup>
</Sidebar>
<div class="h-96 overflow-scroll px-4 sm:ml-64">
  <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
    <PlusPlaceholder colnum={3} rownum={1} />
    <PlusPlaceholder />
    <PlusPlaceholder colnum={2} rownum={2} />
    <PlusPlaceholder />
    <PlusPlaceholder colnum={2} rownum={2} />
  </div>
</div>