<script lang="ts">
  import { Tour, type TourStep } from "$lib";

  const steps: TourStep[] = [
    {
      target: "#step1",
      title: "Custom styled",
      description: "Custom color and size",
      placement: "bottom"
    }
  ];

  let active = $state(true);
  let currentStep = $state(0);
</script>

<div>
  <div id="step1" data-testid="target-1">Target 1</div>

  <Tour bind:active bind:currentStep {steps} color="primary" size="lg" data-testid="custom-tour" />
</div>
