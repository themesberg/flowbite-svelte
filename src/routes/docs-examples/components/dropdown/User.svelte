<script lang="ts">
  import { Dropdown, DropdownItem, Avatar, DropdownHeader, DropdownGroup } from "flowbite-svelte";
</script>

<Avatar class="acs" src="/images/people/profile-picture-5.jpg" dot={{ color: "neutral" }} />
<Dropdown triggeredBy=".acs">
  <DropdownHeader>
    <span class="text-heading block text-sm">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </DropdownGroup>
</Dropdown>
