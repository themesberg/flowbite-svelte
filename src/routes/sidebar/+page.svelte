<script>
    import { Sidebar, SidebarGroup, SidebarItem } from '$lib'
    import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
</script>

<Sidebar>
    <SidebarGroup>
    <SidebarItem label="Dashboard">
        {#snippet icon()}
        <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        {/snippet}
    </SidebarItem>
    <SidebarItem label="Kanban" {spanClass}>
        {#snippet icon()}
        <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
        <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        {/snippet}
    </SidebarItem>
    <SidebarItem label="Inbox" {spanClass}>
        {#snippet icon()}
        <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        {/snippet}
        {#snippet subtext()}
        <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        {/snippet}
    </SidebarItem>
    <SidebarItem label="Sidebar">
        {#snippet icon()}
        <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        {/snippet}
    </SidebarItem>
    </SidebarGroup>
</Sidebar>