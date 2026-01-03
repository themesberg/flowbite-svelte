<script lang="ts">
  import { Checkbox, Label } from "flowbite-svelte";
</script>

<div class="flex flex-col gap-4 sm:flex-row">
  <Checkbox checked>Brand</Checkbox>
  <Checkbox checked color="success">Success</Checkbox>
  <Checkbox checked color="warning">Warning</Checkbox>
  <Checkbox checked color="danger">Danger</Checkbox>
  <Label class="flex items-center">
    <Checkbox checked inline class="text-sky-400 focus:ring-pink-500" />
    Your custom color
  </Label>
</div>
