<script lang="ts">
  import { Checkbox, Label } from "flowbite-svelte";
</script>

<div class="flex flex-col gap-4 sm:flex-row">
  <Checkbox checked color="red">Red</Checkbox>
  <Checkbox checked color="green">Green</Checkbox>
  <Checkbox checked color="purple">Purple</Checkbox>
  <Checkbox checked color="teal">Teal</Checkbox>
  <Checkbox checked color="yellow">Yellow</Checkbox>
  <Checkbox checked color="orange">Orange</Checkbox>
  <Label class="flex items-center">
    <Checkbox checked inline class="text-sky-400 focus:ring-pink-500" />
    Your custom color
  </Label>
</div>
