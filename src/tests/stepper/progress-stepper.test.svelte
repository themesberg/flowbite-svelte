<script lang="ts">
  import ProgressStepper from "$lib/stepper/ProgressStepper.svelte";
  import type { ProgressStep } from "$lib/types";

  const steps: ProgressStep[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
</script>

<ProgressStepper data-testid="progress-stepper" {steps} current={2} />
