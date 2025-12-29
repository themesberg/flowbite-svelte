<script lang="ts">
  import { RadioButton } from "$lib";
  
  let selected = $state("option2");
</script>

<div>
  <RadioButton name="group1" value="option1" bind:group={selected}>Option 1</RadioButton>
  <RadioButton name="group1" value="option2" bind:group={selected}>Option 2</RadioButton>
  <RadioButton name="group1" value="option3" bind:group={selected}>Option 3</RadioButton>
</div>

<div data-testid="selected-value">{selected}</div>
