<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";

  let isOpen = $state(true);
</script>

<button type="button" onclick={() => (isOpen = !isOpen)}>Dropdown links</button>
<Dropdown bind:isOpen simple activeUrl="/dashboard">
  <DropdownItem href="/dashboard">Dashboard</DropdownItem>
  <DropdownItem href="/settings">Settings</DropdownItem>
  <DropdownItem href="/earnings">Earnings</DropdownItem>
  <DropdownItem href="/signout">Sign out</DropdownItem>
</Dropdown>
