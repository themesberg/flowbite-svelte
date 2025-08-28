<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { DotsHorizontalOutline, DotsVerticalOutline } from "flowbite-svelte-icons";
</script>

<DotsHorizontalOutline class="dots-menu dark:text-white" />
<DotsVerticalOutline class="dots-menu dark:text-white" />
<Dropdown simple triggeredBy=".dots-menu">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
