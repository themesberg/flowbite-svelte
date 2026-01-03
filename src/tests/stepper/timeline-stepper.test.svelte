<script lang="ts">
  import TimelineStepper from "$lib/stepper/TimelineStepper.svelte";
  import type { TimelineStep } from "$lib/types";

  const steps: TimelineStep[] = [
    { id: 1, label: "Event 1", description: "First event" },
    { id: 2, label: "Event 2", description: "Second event" },
    { id: 3, label: "Event 3", description: "Third event" }
  ];
</script>

<TimelineStepper data-testid="timeline-stepper" {steps} current={2} />
