<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<StepIndicator {currentStep} {steps} hideLabel />
