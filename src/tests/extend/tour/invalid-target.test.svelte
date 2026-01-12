<script lang="ts">
  import { Tour, type TourStep } from "$lib";

  const steps: TourStep[] = [
    {
      target: "#nonexistent",
      title: "Step 1",
      description: "This is the first step",
      placement: "bottom"
    },
    {
      target: "#step2",
      title: "Step 2",
      description: "This is the second step",
      placement: "top"
    }
  ];

  let active = $state(true);
  let currentStep = $state(0);
</script>

<div>
  <div id="step1" data-testid="target-1">Target 1</div>
  <div id="step2" data-testid="target-2">Target 2</div>

  <Tour bind:active bind:currentStep {steps} data-testid="basic-tour" />
</div>
