<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>("two");
  let multiValues = $state<string[]>(["one", "three"]);
</script>

<h3 class="text-heading mb-2 text-lg font-medium">Single Selection</h3>
<ButtonToggleGroup
  value={singleValue}
  onSelect={(v) => {
    if (typeof v === "string" || v === null) {
      singleValue = v;
    }
  }}
>
  <ButtonToggle value="one">One</ButtonToggle>
  <ButtonToggle value="two">Two</ButtonToggle>
  <ButtonToggle value="three">Three</ButtonToggle>
</ButtonToggleGroup>
<p class="text-heading mt-2">Selected: {singleValue || "None"}</p>

<h3 class="text-heading mb-2 text-lg font-medium">Multi Selection</h3>
<ButtonToggleGroup
  multiSelect={true}
  value={multiValues}
  onSelect={(v) => {
    if (Array.isArray(v)) {
      multiValues = v;
    }
  }}
>
  <ButtonToggle value="one">One</ButtonToggle>
  <ButtonToggle value="two">Two</ButtonToggle>
  <ButtonToggle value="three">Three</ButtonToggle>
</ButtonToggleGroup>
<p class="text-heading mt-2">Selected: {multiValues.length ? multiValues.join(", ") : "None"}</p>
