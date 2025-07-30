<script>
  import { Button, Dropdown, DropdownItem, Radio, Helper } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let group3 = $state(2);
</script>

<Button>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple class="w-60 space-y-1 p-3">
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>
    <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>
    <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>
    <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
  </li>
</Dropdown>
