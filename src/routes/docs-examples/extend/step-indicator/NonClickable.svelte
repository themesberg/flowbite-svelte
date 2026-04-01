<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";

  let currentStep = $state(3);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="space-y-4">
  <StepIndicator bind:currentStep {steps} clickable={false} />

  <p class="text-body text-sm">
    Step indicators are non-clickable when <code class="text-xs">clickable={"{false}"}</code>
    is set.
  </p>
</div>
