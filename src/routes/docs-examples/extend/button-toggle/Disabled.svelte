<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<h3 class="mb-2 text-lg font-medium dark:text-white">Single Selection</h3>
<ButtonToggleGroup onSelect={handleSingleSelect} >
  <ButtonToggle disabled value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>
