<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<div class="border-default rounded-sm border">
  <Checkbox classes={{ label: "w-full p-4" }}>Default radio</Checkbox>
</div>
<div class="border-default rounded-sm border">
  <Checkbox checked classes={{ label: "w-full p-4" }}>Checked state</Checkbox>
</div>
