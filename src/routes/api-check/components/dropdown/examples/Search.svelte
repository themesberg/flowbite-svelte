<script>
  import { Button, Dropdown, DropdownItem, DropdownHeader, DropdownGroup, Checkbox, Search } from "flowbite-svelte";
  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";
  let searchTerm = $state("");
  const people = [
    { name: "Robert Gouth", checked: false },
    { name: "Jese Leos", checked: false },
    { name: "Bonnie Green", checked: true }
  ];
  let filteredItems = $derived(people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1));
</script>

<Button>Dropdown search<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown>
  <div class="p-3">
    <Search size="md" bind:value={searchTerm} />
  </div>
  <DropdownGroup class="h-24 overflow-y-auto">
    {#each filteredItems as person (person.name)}
      <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
      </li>
    {/each}
  </DropdownGroup>
  <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
    <UserRemoveSolid class="text-primary-700 dark:text-primary-700 me-2 h-4 w-4" />Delete user
  </a>
</Dropdown>
