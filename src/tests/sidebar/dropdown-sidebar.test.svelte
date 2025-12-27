<script lang="ts">
  import Sidebar from "$lib/sidebar/Sidebar.svelte";
  import SidebarGroup from "$lib/sidebar/SidebarGroup.svelte";
  import SidebarDropdownWrapper from "$lib/sidebar/SidebarDropdownWrapper.svelte";
  import SidebarItem from "$lib/sidebar/SidebarItem.svelte";

  let dropdownOpen = $state(true);

  function handleClick(e: Event) {
    e.preventDefault();
  }
</script>

<Sidebar disableBreakpoints={true}>
  <SidebarGroup>
    <SidebarDropdownWrapper label="Products" bind:isOpen={dropdownOpen}>
      <SidebarItem label="Product 1" href="/products/1" onclick={handleClick} />
      <SidebarItem label="Product 2" href="/products/2" onclick={handleClick} />
    </SidebarDropdownWrapper>
  </SidebarGroup>
</Sidebar>
