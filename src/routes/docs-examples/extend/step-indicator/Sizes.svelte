<script lang="ts">
  import { StepIndicator, type StepIndicatorProps, Radio, Label } from "flowbite-svelte";
  const sizes = ["xs", "sm", "md", "lg", "xl"];
  let size: StepIndicatorProps["size"] = $state("xs");
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <StepIndicator {currentStep} {steps} bind:size />
</div>

<div class="flex flex-wrap space-x-2">
  <Label class="mb-4 w-full font-bold">Size</Label>
  {#each sizes as sizeOption}
    <Radio class="my-1" classes={{ label: "w-24" }} name="size" bind:group={size} value={sizeOption}>
      {sizeOption}
    </Radio>
  {/each}
</div>
