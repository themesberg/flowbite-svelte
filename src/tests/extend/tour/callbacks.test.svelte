<script lang="ts" module>
  export const testState = $state({
    completed: false,
    skipped: false
  });
</script>

<script lang="ts">
  import { Tour, type TourStep } from "$lib";

  const steps: TourStep[] = [
    {
      target: "#step1",
      title: "Step 1",
      description: "First step",
      placement: "bottom"
    }
  ];

  let active = $state(true);
  let currentStep = $state(0);

  function handleComplete() {
    testState.completed = true;
  }

  function handleSkip() {
    testState.skipped = true;
  }
</script>

<div>
  <div id="step1" data-testid="target-1">Target 1</div>

  <Tour bind:active bind:currentStep {steps} oncomplete={handleComplete} onskip={handleSkip} data-testid="callback-tour" />
</div>
