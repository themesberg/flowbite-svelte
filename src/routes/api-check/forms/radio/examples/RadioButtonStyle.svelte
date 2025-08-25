<script lang="ts">
  import { ButtonGroup, RadioButton } from "flowbite-svelte";
  let options = $state();
</script>

<ButtonGroup>
  <RadioButton color="amber" outline checkedClass="outline-4 outline-amber-500" name="options" value="Option 1" bind:group={options}>Option 1</RadioButton>
  <RadioButton color="blue" outline checkedClass="outline-4 outline-blue-500" name="options" value="Option 2" bind:group={options}>Option 2</RadioButton>
</ButtonGroup>
