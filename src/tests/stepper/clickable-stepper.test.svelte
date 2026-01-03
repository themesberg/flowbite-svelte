<script lang="ts" module>
  export const stepperState = {
    currentStep: 1,
    lastStep: 0,
    clickedStep: 0
  };
</script>

<script lang="ts">
  import Stepper from "$lib/stepper/Stepper.svelte";
  import type { Step } from "$lib/types";

  const steps: Step[] = [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Step 3" }
  ];

  let current = $state(1);

  $effect(() => {
    stepperState.currentStep = current;
  });

  function handleStepClick(event: { current: number; last: number }) {
    stepperState.lastStep = event.last;
    stepperState.clickedStep = event.current;
  }
</script>

<Stepper data-testid="clickable-stepper" {steps} bind:current clickable={true} onStepClick={handleStepClick} />
