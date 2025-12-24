<script lang="ts">
  import { Button, Dropdown, DropdownItem, DropdownGroup, Avatar } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
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
  <a href="/" class="text-primary-600 dark:text-primary-500 -mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:hover:bg-gray-600">
    <ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />Add new user
  </a>
</Dropdown>
