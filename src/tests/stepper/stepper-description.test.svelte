<script lang="ts">
  import Stepper from "$lib/stepper/Stepper.svelte";
  import type { Step } from "$lib/types";

  const steps: Step[] = [
    { id: 1, label: "Personal Info", description: "Step description" },
    { id: 2, label: "Account Details", description: "Step description" },
    { id: 3, label: "Confirmation", description: "Step description" }
  ];
</script>

<Stepper data-testid="stepper-description" {steps} current={2} />
