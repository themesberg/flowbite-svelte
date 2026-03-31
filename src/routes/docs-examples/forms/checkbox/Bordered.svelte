<script lang="ts">
  import { Checkbox } from "flowbite-svelte";
</script>

<div class="rounded-sm border border-default">
  <Checkbox classes={{ label: "w-full p-4" }}>Default radio</Checkbox>
</div>
<div class="rounded-sm border border-default">
  <Checkbox checked classes={{ label: "w-full p-4" }}>Checked state</Checkbox>
</div>
