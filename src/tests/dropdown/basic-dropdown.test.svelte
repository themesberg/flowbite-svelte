<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";

  let isOpen = $state(true);
</script>

<button type="button" onclick={() => (isOpen = !isOpen)}>Dropdown button</button>
<Dropdown bind:isOpen simple>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
