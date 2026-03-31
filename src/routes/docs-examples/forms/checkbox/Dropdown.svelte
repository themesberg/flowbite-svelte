<script lang="ts">
  import { Dropdown, DropdownItem, DropdownGroup, Checkbox, Button, Search } from "flowbite-svelte";
  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";
</script>

<Button>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white" /></Button>
<Dropdown>
  <div class="p-3">
    <Search size="md" />
  </div>
  <DropdownGroup class="h-48 overflow-y-auto">
    <DropdownItem>
      <Checkbox>Robert Gouth</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Jese Leos</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox checked>Bonnie Green</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Jese Leos</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Robert Gouth</Checkbox>
    </DropdownItem>
    <DropdownItem>
      <Checkbox>Bonnie Green</Checkbox>
    </DropdownItem>
  </DropdownGroup>
  <a href="/" class="bg-neutral-primary-soft text-fg-danger hover:bg-neutral-primary-medium -mb-1 flex items-center p-3 text-sm font-medium hover:underline">
    <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
  </a>
</Dropdown>
