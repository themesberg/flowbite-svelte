<script lang="ts" module>
  export const testState = $state({ clickCount: 0 });
</script>

<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";

  let isOpen = $state(true);

  function handleItemClick() {
    testState.clickCount++;
  }
</script>

<button type="button">Dropdown</button>
<Dropdown bind:isOpen simple>
  <DropdownItem onclick={handleItemClick}>Item 1</DropdownItem>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>
