<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownGroup } from "flowbite-svelte";
</script>

<Avatar id="user-drop" src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: "green" }} />
<Dropdown triggeredBy="#user-drop">
  <DropdownHeader>
    <span class="block text-sm">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
  </DropdownGroup>
  <DropdownGroup>
    <DropdownItem>Sign out</DropdownItem>
  </DropdownGroup>
</Dropdown>
