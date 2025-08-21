<script lang="ts">
  import { Button, Checkbox } from "flowbite-svelte";
  let choices = [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
    { value: "3", label: "Three" }
  ];
  let group = ["2", "3"];
</script>

<div class="flex gap-2">
  <Checkbox name="flavours" {choices} bind:group />
</div>
<div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">Group: {group}</div>
<Button onclick={() => (group.length = 0)}>Clear</Button>