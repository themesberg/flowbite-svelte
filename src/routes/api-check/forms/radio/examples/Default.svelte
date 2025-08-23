<script>
  import { Radio } from "flowbite-svelte";
  let selectedValue = $state("2");
</script>

<Radio name="example1" value="1" bind:group={selectedValue}>Default radio</Radio>
<Radio name="example1" value="2" bind:group={selectedValue}>Checked state</Radio>