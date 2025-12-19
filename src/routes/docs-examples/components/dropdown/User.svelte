<script lang="ts">
  import { Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

<Avatar class="acs" src="/images/profile-picture-3.webp" dot={{ color: "neutral" }} />
<Dropdown triggeredBy=".acs">
  <DropdownHeader>
    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </DropdownGroup>
</Dropdown>
