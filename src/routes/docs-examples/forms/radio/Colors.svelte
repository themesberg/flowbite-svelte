<script lang="ts">
  import { Radio } from "flowbite-svelte";
  let colors = $state("text-purple-500");
</script>

<p class="mb-4 font-semibold {colors}">Select color</p>
<div class="flex gap-4">
  <Radio bind:group={colors} color="danger" value="text-red-500">Red</Radio>
  <Radio bind:group={colors} color="success" value="text-green-500">Green</Radio>
  <Radio bind:group={colors} color="purple" value="text-purple-500">Purple</Radio>
  <Radio bind:group={colors} color="teal" value="text-teal-500">Teal</Radio>
  <Radio bind:group={colors} color="warning" value="text-yellow-500">Yellow</Radio>
  <Radio bind:group={colors} color="warning" value="text-orange-500">Orange</Radio>
</div>
