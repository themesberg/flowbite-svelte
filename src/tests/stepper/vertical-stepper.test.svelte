<script lang="ts">
  import VerticalStepper from "$lib/stepper/VerticalStepper.svelte";
  import type { VerticalStep } from "$lib/types";

  const steps: VerticalStep[] = [
    { id: 1, label: "Step One" },
    { id: 2, label: "Step Two" },
    { id: 3, label: "Step Three" }
  ];
</script>

<VerticalStepper data-testid="vertical-stepper" {steps} current={2} />
