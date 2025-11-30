<script lang="ts">
  import { ProgressStepper, Button, P, Heading } from "flowbite-svelte";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      status: undefined // Will be auto-determined
    },
    {
      id: 2,
      status: undefined
    },
    {
      id: 3,
      status: undefined
    },
    {
      id: 4,
      status: undefined
    }
  ];

  // Optional: Handle step changes
  function handleStepChange(event: { current: number; last: number }) {
    console.log(`Moved from step ${event.last} to step ${event.current}`);
    // You can add validation here
  }
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 1: Basic clickable progress stepper with numbers</Heading>

<ProgressStepper {steps} bind:current onStepClick={handleStepChange} />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 2: Non-clickable stepper</Heading>
<ProgressStepper {steps} bind:current clickable={false} />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 3: Without checkmarks (shows numbers for all steps)</Heading>
<ProgressStepper {steps} bind:current showCheckmarkForCompleted={false} />

<div class="mt-8 flex gap-4">
  <Button onclick={() => (current = Math.max(0, current - 1))} disabled={current === 0} class="rounded bg-gray-500 px-4 py-2 disabled:opacity-50">Previous</Button>

  <Button onclick={() => (current = Math.min(steps.length, current + 1))} disabled={current === steps.length} class="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">Next</Button>
</div>

<div class="mt-4 rounded bg-gray-50 p-4 dark:bg-gray-800">
  <Heading tag="h4" class="font-bold">Current State</Heading>
  <P>
    <strong>current =</strong>
    {current}
  </P>
  <P>
    <strong>Display as:</strong>
    Step {current} of {steps.length}
  </P>
  <P class="mt-2 text-xs text-gray-500 dark:text-gray-400">Note: current=0 means no step is active, current=1 is the first step, current=2 is the second step, etc.</P>
</div>
