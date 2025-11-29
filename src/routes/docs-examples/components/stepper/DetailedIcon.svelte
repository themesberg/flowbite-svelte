<script lang="ts">
  import { DetailedStepper, Button, P } from 'flowbite-svelte';
  import { BellOutline, ClipboardOutline, CogOutline
 } from 'flowbite-svelte-icons';
  
  let current = $state(0);
  const steps=[
    { id: 1, label: "Account Info", description: "Enter your account details", icon: BellOutline },
    { id: 2, label: "Company Info", description: "Provide company information", icon: ClipboardOutline },
    { id: 3, label: "Review", description: "Review and submit", icon: CogOutline }
  ];

</script>

<h3 class="text-lg font-semibold mb-2 mt-8">Example 3: With icons - Checkmark for completed ✓</h3>
<P class="text-sm text-gray-600 mb-2">When you click step 2 or 3, previous steps show checkmarks (default: showCheckmarkForCompleted=true)</P>
<DetailedStepper 
  {steps}
  bind:current
/>

<h3 class="text-lg font-semibold mb-2 mt-8">Example 4: With icons - Keep icons for completed</h3>
<P class="text-sm text-gray-600 mb-2">All steps keep their icons (showCheckmarkForCompleted=false)</P>
<DetailedStepper 
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

<div class="mt-4 p-4 bg-gray-50 rounded">
  <h4 class="font-bold">Current State</h4>
  <P><strong>current =</strong> {current} (0-based array index)</P>
  <P><strong>Display as:</strong> Step {current + 1} of {steps.length}</P>
  <P><strong>Active Step:</strong> {steps[current].label}</P>
  <P class="text-xs text-gray-500 mt-2">Note: current=0 is the first step, current=1 is the second step, etc.</P>
</div>
