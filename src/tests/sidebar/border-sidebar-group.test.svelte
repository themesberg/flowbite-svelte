<script lang="ts">
  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import SidebarGroup from "$lib/sidebar/SidebarGroup.svelte";
  import SidebarItem from "$lib/sidebar/SidebarItem.svelte";
</script>

<Sidebar disableBreakpoints={true}>
  <SidebarGroup border={true}>
    <SidebarItem label="Dashboard" href="/dashboard" />
    <SidebarItem label="Settings" href="/settings" />
  </SidebarGroup>
  <SidebarGroup>
    <SidebarItem label="Profile" href="/profile" />
  </SidebarGroup>
</Sidebar>
