<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";
  import DropdownGroup from "$lib/dropdown/DropdownGroup.svelte";

  let isOpen = $state(true);
</script>

<button type="button" onclick={() => (isOpen = !isOpen)}>Dropdown groups</button>
<Dropdown bind:isOpen>
  <DropdownGroup>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
  </DropdownGroup>
  <DropdownGroup>
    <DropdownItem>Messages</DropdownItem>
    <DropdownItem>Downloads</DropdownItem>
  </DropdownGroup>
</Dropdown>
