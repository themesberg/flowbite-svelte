<script lang="ts">
  import { Radio } from "flowbite-svelte";
  let colors = $state("bg-brand");
</script>

<p class="mb-4 p-2 font-semibold text-white {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color="brand" value="fg-brand">Brand</Radio>
  <Radio bind:group={colors} color="success" value="fg-success">Success</Radio>
  <Radio bind:group={colors} color="warning" value="fg-warning">Warning</Radio>
  <Radio bind:group={colors} color="danger" value="fg-danger">Danger</Radio>
</div>
