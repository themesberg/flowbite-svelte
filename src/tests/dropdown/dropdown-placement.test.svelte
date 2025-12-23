<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";

  let isOpen = $state(true);
</script>

<button type="button">Top placement</button>
<Dropdown bind:isOpen simple placement="top">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
</Dropdown>
