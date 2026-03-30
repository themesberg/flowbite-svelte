<script lang="ts">
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { DotsHorizontalOutline, DotsVerticalOutline } from "flowbite-svelte-icons";
</script>

<DotsHorizontalOutline class="dots-menu text-body" />
<DotsVerticalOutline class="dots-menu text-body" />
<Dropdown simple triggeredBy=".dots-menu">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
