<script>
  import { Radio } from "flowbite-svelte";
  let selectedValue3 = $state("2");
</script>

<div class="grid grid-cols-2 gap-6">
  <div class="rounded-sm border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" value="1" bind:group={selectedValue3} classes={{ label: "w-full p-4" }}>Default radio</Radio>
  </div>
  <div class="rounded-sm border border-gray-200 dark:border-gray-700">
    <Radio name="bordered" value="2" bind:group={selectedValue3} classes={{ label: "w-full p-4" }}>Checked state</Radio>
  </div>
</div>