<script lang="ts">
  import { Button, Dropdown, Radio } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  let group2 = $state(2);
</script>

<Button>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple class="w-48 space-y-1 p-3">
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group2" bind:group={group2} value={1}>Default radio</Radio>
  </li>
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group2" bind:group={group2} value={2}>Checked state</Radio>
  </li>
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Radio name="group2" bind:group={group2} value={3}>Default radio</Radio>
  </li>
</Dropdown>
