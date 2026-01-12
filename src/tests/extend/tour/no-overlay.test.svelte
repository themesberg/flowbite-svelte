<script lang="ts">
  import { Tour, type TourStep } from "$lib";

  const steps: TourStep[] = [
    {
      target: "#step1",
      title: "Step 1",
      description: "First step",
      placement: "bottom"
    },
    {
      target: "#step2",
      description: "Second step without title",
      placement: "top"
    }
  ];

  let active = $state(true);
  let currentStep = $state(0);
</script>

<div>
  <div id="step1" data-testid="target-1">Target 1</div>
  <div id="step2" data-testid="target-2">Target 2</div>

  <Tour bind:active bind:currentStep {steps} showOverlay={false} data-testid="no-overlay-tour" />
</div>
