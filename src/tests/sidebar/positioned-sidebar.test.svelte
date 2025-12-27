<script lang="ts">
  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import SidebarGroup from "$lib/sidebar/SidebarGroup.svelte";
  import SidebarItem from "$lib/sidebar/SidebarItem.svelte";
</script>

<Sidebar position="absolute" disableBreakpoints={true}>
  <SidebarGroup>
    <SidebarItem label="Dashboard" href="/dashboard" />
  </SidebarGroup>
</Sidebar>
