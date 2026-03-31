<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>("two");
  let multiValues = $state<string[]>(["one", "three"]);
</script>

<h3 class="mb-2 text-lg font-medium text-heading">Single Selection</h3>
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
<p class="mt-2 text-heading">Selected: {singleValue || "None"}</p>

<h3 class="mb-2 text-lg font-medium text-heading">Multi Selection</h3>
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
<p class="mt-2 text-heading">Selected: {multiValues.length ? multiValues.join(", ") : "None"}</p>
