<script lang="ts">
  import Stepper from "$lib/stepper/Stepper.svelte";
  import type { Step } from "$lib/types";

  const steps: Step[] = [
    { id: 1, label: "Personal Info", description: "Enter your name and contact details" },
    { id: 2, label: "Account Details", description: "Choose username and password" },
    { id: 3, label: "Confirmation", description: "Review and confirm your information" }
  ];
</script>

<Stepper data-testid="stepper-description" {steps} current={2} />
