<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronUpOutline, ChevronRightOutline, ChevronLeftOutline } from "flowbite-svelte-icons";
</script>

<Dropdown simple placement="top" triggeredBy="#top-dd">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown simple placement="bottom" triggeredBy="#bottom-dd">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown simple placement="right" triggeredBy="#right-dd">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
<Dropdown simple placement="left" triggeredBy="#left-dd">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="placements" class="my-8 flex h-96 flex-col items-center justify-center gap-2">
  <Button id="top-dd">Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="flex space-x-2 rtl:space-x-reverse">
    <Button id="left-dd"><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>
    <Button id="right-dd">Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  </div>
  <Button id="bottom-dd">Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
</div>