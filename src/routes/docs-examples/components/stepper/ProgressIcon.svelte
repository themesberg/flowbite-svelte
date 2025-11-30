<script lang="ts">
  import { ProgressStepper, Button, P, Heading } from 'flowbite-svelte';
  import { UserCircleOutline, BadgeCheckOutline, ArrowRightAltOutline, AwardOutline } from 'flowbite-svelte-icons';
  
  let current = $state(0);
  const steps = [
    {
      id: 1,
      icon: UserCircleOutline,
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    },
    {
      id: 2,
      icon: BadgeCheckOutline,
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    },
    {
      id: 3,
      icon: ArrowRightAltOutline,
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    },
    {
      id: 4,
      icon: AwardOutline,
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    }
  ];

  const stepLabels = [
    "Personal Info",
    "Experience",
    "Review",
    "Complete"
  ];
</script>

<Heading tag="h3" class="text-lg font-semibold mb-2">Progress Stepper with Custom Icons</Heading>
<ProgressStepper 
  {steps}
  bind:current
/>

<Heading tag="h3" class="text-lg font-semibold mb-2 mt-8">With icons, no checkmarks (keeps icons for completed steps)</Heading>
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
  <Heading tag="h4" class="font-bold">Current Step</Heading>
  <P><strong>{stepLabels[current]}</strong> (Step {current + 1} of {steps.length})</P>
</div>
