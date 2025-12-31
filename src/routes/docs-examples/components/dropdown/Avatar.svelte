<script lang="ts">
  import { Button, Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

<Button pill id="avatar_with_name" class="p-1!">
  <Avatar src="/images/people/profile-picture-5.jpg" class="me-2" />
  Bonnie Green
</Button>
<Dropdown triggeredBy="#avatar_with_name">
  <DropdownHeader>
    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
  </DropdownGroup>
  <DropdownHeader>Sign out</DropdownHeader>
</Dropdown>
