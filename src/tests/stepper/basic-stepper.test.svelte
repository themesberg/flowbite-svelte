<script lang="ts">
  import Stepper from "$lib/stepper/Stepper.svelte";
  import type { Step } from "$lib/types";

  const steps: Step[] = [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Step 3" }
  ];
</script>

<Stepper data-testid="basic-stepper" {steps} current={1} />
