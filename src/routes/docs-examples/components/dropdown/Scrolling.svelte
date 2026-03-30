<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownGroup, Avatar } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white" /></Button>
<Dropdown class="h-48 w-48 overflow-y-auto py-1">
  <DropdownGroup>
    <DropdownItem class="flex items-center gap-2 text-base font-semibold">
      <Avatar src="/images/people/profile-picture-1.jpg" size="xs" />Jese Leos
    </DropdownItem>
    <DropdownItem class="flex items-center gap-2 text-base font-semibold">
      <Avatar src="/images/people/profile-picture-2.jpg" size="xs" />Robert Gouth
    </DropdownItem>
    <DropdownItem class="flex items-center gap-2 text-base font-semibold">
      <Avatar src="/images/people/profile-picture-5.jpg" size="xs" />Bonnie Green
    </DropdownItem>
    <DropdownItem class="flex items-center gap-2 text-base font-semibold">
      <Avatar src="/images/people/profile-picture-1.jpg" size="xs" />Robert Wall
    </DropdownItem>
    <DropdownItem class="flex items-center gap-2 text-base font-semibold">
      <Avatar src="/images/people/profile-picture-2.jpg" size="xs" />Joseph Mcfall
    </DropdownItem>
    <DropdownItem class="flex items-center gap-2 text-base font-semibold">
      <Avatar src="/images/people/profile-picture-5.jpg" size="xs" />Leslie Livingston
    </DropdownItem>
  </DropdownGroup>
  <a href="/" class="text-fg-brand bg-neutral-tertiary hover:bg-neutral-tertiary-medium -mb-1 flex items-center px-3 py-2 text-sm font-medium hover:underline">
    <ChevronDownOutline class="ms-2 h-6 w-6" />Add new user
  </a>
</Dropdown>
