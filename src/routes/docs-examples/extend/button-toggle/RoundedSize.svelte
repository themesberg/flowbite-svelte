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

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: sm</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="sm">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: md</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="md">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: lg</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="lg">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: xl</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="xl">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>

<div>
  <h3 class="mb-2 text-lg font-medium dark:text-white">Rounded size: full</h3>
  <ButtonToggleGroup onSelect={handleSingleSelect} roundedSize="full">
    <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
    <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
    <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
  </ButtonToggleGroup>
</div>
