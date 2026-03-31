<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null | string[]) {
    if (typeof value === "string" || value === null) {
      singleValue = value;
      console.log("Single selection:", value);
    }
  }
</script>

<h3 class="text-heading mb-2 text-lg font-medium">Single Selection</h3>
<ButtonToggleGroup onSelect={handleSingleSelect}>
  <ButtonToggle disabled value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
<p class="text-heading mt-2">Selected: {singleValue || "None"}</p>
