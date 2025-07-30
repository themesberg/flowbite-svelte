<script>
  import { Button, Dropdown, DropdownItem, Radio } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let group1 = $state(2);
</script>

<Button>
  Dropdown radio {group1}<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
</Button>
<Dropdown simple class="w-44 space-y-3 p-3 text-sm">
  <li>
    <Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>
  </li>
  <li>
    <Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>
  </li>
  <li>
    <Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>
  </li>
</Dropdown>
