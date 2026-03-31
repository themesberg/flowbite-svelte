<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);
  let multiValues = $state<string[]>([]);

  function handleSingleSelect(value: string | null | string[]) {
    if (typeof value === "string" || value === null) {
      singleValue = value;
      console.log("Single selection:", value);
    }
  }

  function handleMultiSelect(values: string | null | string[]) {
    if (Array.isArray(values)) {
      multiValues = values;
      console.log("Multi selection:", values);
    }
  }
</script>

<h3 class="mb-2 text-lg font-medium text-heading">Single Selection</h3>
<ButtonToggleGroup onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 text-heading">Selected: {singleValue || "None"}</p>

<h3 class="mb-2 text-lg font-medium text-heading">Multi Selection</h3>
<ButtonToggleGroup multiSelect={true} onSelect={handleMultiSelect}>
  <ButtonToggle value="one" selected={multiValues.includes("one")}>One</ButtonToggle>
  <ButtonToggle value="two" selected={multiValues.includes("two")}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={multiValues.includes("three")}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="mt-2 text-heading">Selected: {multiValues.length ? multiValues.join(", ") : "None"}</p>
