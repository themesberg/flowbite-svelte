<script lang="ts">
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";

  let isOpen = $state(true);

  function handleClick(e: Event) {
    e.preventDefault();
  }
</script>

<button type="button" onclick={() => (isOpen = !isOpen)}>Dropdown links</button>
<Dropdown bind:isOpen simple activeUrl="/dashboard">
  <DropdownItem href="/dashboard" onclick={handleClick}>Dashboard</DropdownItem>
  <DropdownItem href="/settings" onclick={handleClick}>Settings</DropdownItem>
  <DropdownItem href="/earnings" onclick={handleClick}>Earnings</DropdownItem>
  <DropdownItem href="/signout" onclick={handleClick}>Sign out</DropdownItem>
</Dropdown>
