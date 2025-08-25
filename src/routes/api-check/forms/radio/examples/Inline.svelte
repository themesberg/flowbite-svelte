<script>
  import { Radio } from "flowbite-svelte";
  let inline1 = $state("second");
</script>

<div class="flex gap-3">
  <Radio bind:group={inline1} value="first">Inline 1</Radio>
  <Radio bind:group={inline1} value="second">Inline 2 checked</Radio>
  <Radio bind:group={inline1} value="third">Inline 3</Radio>
  <Radio bind:group={inline1} value="fourth" disabled>Inline disabled</Radio>
</div>
