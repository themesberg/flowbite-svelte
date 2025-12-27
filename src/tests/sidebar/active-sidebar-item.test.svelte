<script lang="ts">
  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import SidebarGroup from "$lib/sidebar/SidebarGroup.svelte";
  import SidebarItem from "$lib/sidebar/SidebarItem.svelte";

  function handleClick(e: Event) {
    e.preventDefault();
  }
</script>

<Sidebar disableBreakpoints={true}>
  <SidebarGroup>
    <SidebarItem label="Dashboard" href="https://flowbite-svelte.com/dashboard" active={true} onclick={handleClick} />
    <SidebarItem label="Settings" href="https://flowbite-svelte.com/settings" onclick={handleClick} />
  </SidebarGroup>
</Sidebar>
