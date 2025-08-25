<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<ButtonToggleGroup color="secondary" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="gray" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="red" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="orange" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="amber" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="yellow" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="lime" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="green" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="emerald" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="teal" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="cyan" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="sky" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="blue" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="indigo" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="violet" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="purple" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="fuchsia" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="pink" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>

<ButtonToggleGroup color="rose" onSelect={handleSingleSelect}>
  <ButtonToggle value="one" selected={singleValue === "one"}>One</ButtonToggle>
  <ButtonToggle value="two" selected={singleValue === "two"}>Two</ButtonToggle>
  <ButtonToggle value="three" selected={singleValue === "three"}>Three</ButtonToggle>
</ButtonToggleGroup>
