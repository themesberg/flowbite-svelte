<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown {activeUrl} simple>
  <DropdownItem href="/">Home</DropdownItem>
  <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
  <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
  <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
</Dropdown>