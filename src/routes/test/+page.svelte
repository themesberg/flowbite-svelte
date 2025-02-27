<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import Dropdown from '$lib/dropdown/Dropdown.svelte';
  import DropdownGroup from '$lib/dropdown/DropdownGroup.svelte';
  import DropdownHeader from '$lib/dropdown/DropdownHeader.svelte';
  import DropdownItem from '$lib/dropdown/DropdownItem.svelte';
</script>

<Button>Dropdown</Button>
<Dropdown>
  <DropdownHeader>Header</DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Raz</DropdownItem>
    <DropdownItem>Dwa</DropdownItem>
  </DropdownGroup>
</Dropdown>
