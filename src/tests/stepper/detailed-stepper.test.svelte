<script lang="ts">
  import DetailedStepper from "$lib/stepper/DetailedStepper.svelte";
  import type { DetailedStep } from "$lib/types";

  const steps: DetailedStep[] = [
    { id: 1, label: "Personal Information", description: "Enter your details" },
    { id: 2, label: "Account Setup", description: "Create your account" },
    { id: 3, label: "Review", description: "Confirm your information" }
  ];
</script>

<DetailedStepper data-testid="detailed-stepper" {steps} current={2} />
