<script lang="ts">
  import BreadcrumbStepper from "$lib/stepper/BreadcrumbStepper.svelte";
  import type { BreadcrumbStep } from "$lib/types";

  const steps: BreadcrumbStep[] = [
    { id: 1, label: "Home" },
    { id: 2, label: "Projects", shortLabel: "Proj" },
    { id: 3, label: "Settings", shortLabel: "Set" }
  ];
</script>

<BreadcrumbStepper data-testid="breadcrumb-stepper" {steps} current={2} />
