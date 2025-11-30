<script lang="ts">
  import { ProgressStepper, Button, P, Heading } from 'flowbite-svelte';
  
  let current = $state(0);
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

<Heading tag="h3" class="text-lg font-semibold mb-2">Example 1: Basic clickable progress stepper with numbers</Heading>

<ProgressStepper 
  {steps}
  bind:current 
  onStepClick={handleStepChange}
/>

<Heading tag="h3" class="text-lg font-semibold mb-2 mt-8">Example 2: Non-clickable stepper</Heading>
<ProgressStepper 
  {steps} 
  bind:current 
  clickable={false}
/>

<Heading tag="h3" class="text-lg font-semibold mb-2 mt-8">Example 3: Without checkmarks (shows numbers for all steps)</Heading>
<ProgressStepper 
  {steps}
  bind:current 
  showCheckmarkForCompleted={false}
/>

<div class="flex gap-4 mt-8">
  <Button 
    onclick={() => current = Math.max(0, current - 1)}
    disabled={current === 0}
    class="px-4 py-2 bg-gray-500 rounded disabled:opacity-50"
  >
    Previous
  </Button>
  
  <Button 
    onclick={() => current = Math.min(steps.length - 1, current + 1)}
    disabled={current === steps.length - 1}
    class="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
  >
    Next
  </Button>
</div>

<div class="mt-4 p-4 bg-gray-50 rounded dark:bg-gray-800">
  <Heading tag="h4" class="font-bold">Current State</Heading>
  <P><strong>current =</strong> {current} (0-based array index)</P>
  <P><strong>Display as:</strong> Step {current + 1} of {steps.length}</P>
  <P class="text-xs text-gray-500 mt-2 dark:text-gray-400">Note: current=0 is the first step, current=1 is the second step, etc.</P>
</div>
