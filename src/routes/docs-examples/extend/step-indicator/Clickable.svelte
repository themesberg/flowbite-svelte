<script lang="ts">
  import { StepIndicator, Button } from "flowbite-svelte";

  let currentStep = $state(1);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  function handleStepClick({ current, last }: { current: number; last: number }) {
    console.log(`Navigated from step ${last} to step ${current}`);
  }

  function next() {
    if (currentStep < steps.length) {
      currentStep++;
    }
  }

  function prev() {
    if (currentStep > 1) {
      currentStep--;
    }
  }

  function reset() {
    currentStep = 1;
  }
</script>

<div class="space-y-6">
  <StepIndicator bind:currentStep {steps} onStepClick={handleStepClick} />

  <div class="flex gap-2">
    <Button onclick={prev} disabled={currentStep === 1}>Previous</Button>
    <Button onclick={next} disabled={currentStep === steps.length}>Next</Button>
    <Button onclick={reset} color="alternative">Reset</Button>
  </div>

  <p class="text-sm text-gray-500 dark:text-gray-400">Click on any step indicator to navigate directly to that step.</p>
</div>
