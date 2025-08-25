<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<div class="rounded-sm border border-gray-200 dark:border-gray-700">
  <Checkbox classes={{ div: "w-full p-4" }}>Default radio</Checkbox>
</div>
<div class="rounded-sm border border-gray-200 dark:border-gray-700">
  <Checkbox checked classes={{ div: "w-full p-4" }}>Checked state</Checkbox>
</div>
