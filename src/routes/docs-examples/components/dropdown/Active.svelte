<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-green-500 dark:text-green-300 hover:text-green-700 dark:hover:text-green-500";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown {activeUrl} class={activeClass} simple>
  <DropdownItem href="/">Home</DropdownItem>
  <DropdownItem href="/docs/components/dropdown">Dropdown</DropdownItem>
  <DropdownItem href="/docs/components/accordion">Accordion</DropdownItem>
  <DropdownItem href="/docs/components/alert">Alert</DropdownItem>
</Dropdown>
