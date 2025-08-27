<script lang="ts">
  import { ButtonToggleGroup, ButtonToggle } from "flowbite-svelte";

  let singleValue = $state<string | null>(null);
  let multiValues = $state<string[]>([]);

  function handleSingleSelect(value: string | null) {
    singleValue = value;
    console.log("Single selection:", value);
  }
</script>

<p class="mt-2 dark:text-white">Selected: {singleValue || "None"}</p>
<ButtonToggleGroup onSelect={handleSingleSelect}>
  <ButtonToggle color="red" value="red" selected={singleValue === "red"}>Red</ButtonToggle>
  <ButtonToggle color="green" value="green" selected={singleValue === "green"}>Green</ButtonToggle>
  <ButtonToggle color="blue" value="blue" selected={singleValue === "blue"}>Blue</ButtonToggle>
  <ButtonToggle color="gray" value="gray" selected={singleValue === "gray"}>Gray</ButtonToggle>
  <ButtonToggle color="lime" value="lime" selected={singleValue === "lime"}>Lime</ButtonToggle>
  <ButtonToggle color="purple" value="purple" selected={singleValue === "purple"}>Purple</ButtonToggle>
</ButtonToggleGroup>
