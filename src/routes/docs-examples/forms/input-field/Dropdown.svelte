<script lang="ts">
  import { Input, ButtonGroup, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
</script>

<ButtonGroup class="w-full">
  <Button
    color={undefined}
    class="shrink-0 border border-default-medium bg-neutral-secondary-medium text-heading hover:bg-neutral-tertiary-medium focus:ring-neutral-tertiary"
  >
    All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <Dropdown simple>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button class="p-2.5!" type="submit">
    <SearchOutline class="h-5 w-5" />
  </Button>
</ButtonGroup>
