<script lang="ts">
  import Stepper from "$lib/stepper/Stepper.svelte";
  import type { Step } from "$lib/types";

  const steps: Step[] = [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Step 3" },
    { id: 4, label: "Step 4" }
  ];
</script>

<Stepper data-testid="stepper-current-0" {steps} current={0} />
<Stepper data-testid="stepper-current-1" {steps} current={1} />
<Stepper data-testid="stepper-current-2" {steps} current={2} />
<Stepper data-testid="stepper-current-3" {steps} current={3} />
<Stepper data-testid="stepper-current-4" {steps} current={4} />
