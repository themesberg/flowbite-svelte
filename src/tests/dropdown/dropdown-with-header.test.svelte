<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";
  import DropdownHeader from "$lib/dropdown/DropdownHeader.svelte";
  import DropdownDivider from "$lib/dropdown/DropdownDivider.svelte";

  let isOpen = $state(true);
</script>

<button type="button" onclick={() => (isOpen = !isOpen)}>Dropdown menu</button>
<Dropdown bind:isOpen simple>
  <DropdownHeader>
    <span class="block text-sm">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">bonnie@example.com</span>
  </DropdownHeader>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownDivider />
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
