<script lang="ts">
  import { Button, Dropdown, DropdownItem, Checkbox } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  const handleClick = (e: Event) => {
    e.preventDefault();
    alert("Clicked on: " + e.target);
  };
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple>
  <DropdownItem href="/link" onclick={handleClick}>Rendered as link</DropdownItem>
  <DropdownItem onclick={handleClick}>Rendered as button</DropdownItem>
</Dropdown>