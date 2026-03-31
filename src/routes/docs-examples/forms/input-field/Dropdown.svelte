<script lang="ts">
  import { Input, ButtonGroup, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
</script>

<ButtonGroup class="w-full">
  <Button color="alternative" class="shrink-0">
    All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <Dropdown simple>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" class="py-3" />
  <Button class="p-2.5!" type="submit">
    <SearchOutline class="h-5 w-5" />
  </Button>
</ButtonGroup>
