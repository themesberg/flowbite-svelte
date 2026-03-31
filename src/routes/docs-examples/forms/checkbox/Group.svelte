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
<div class="border-default text-body my-2 w-44 rounded-lg border p-2">Group: {group}</div>
<Button onclick={() => (group.length = 0)}>Clear</Button>
