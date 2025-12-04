<script lang="ts">
  import { StepIndicator, type StepIndicatorProps, Radio, Label } from "flowbite-svelte";

  const colors = ["primary", "secondary", "gray", "red", "yellow", "green", "indigo", "purple", "pink", "blue"];
  let color: StepIndicatorProps["color"] = $state("green");
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  type SimpleRadioColor = "primary" | "secondary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue";
</script>

<div class="my-4">
  <StepIndicator {currentStep} {steps} bind:color />
</div>

<div class="flex flex-wrap space-x-2">
  <Label class="mb-4 w-full font-bold">Color</Label>
  {#each colors as colorOption}
    <Radio class="my-1" classes={{ label: "w-24" }} name="color" bind:group={color} color={colorOption as SimpleRadioColor} value={colorOption as StepIndicatorProps["color"]}>
      {colorOption}
    </Radio>
  {/each}
</div>
