<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">xs</div>
  <StepIndicator {currentStep} {steps} size="xs" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">sm</div>
  <StepIndicator {currentStep} {steps} size="sm" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Default</div>
  <StepIndicator {currentStep} {steps} size="md" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium dark:text-white">lg</div>
  <StepIndicator {currentStep} {steps} size="lg" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium dark:text-white">xl</div>
  <StepIndicator {currentStep} {steps} size="xl" />
</div>
