<script lang="ts">
  import { ProgressStepper, Button, P, Heading, List, Li, Span } from 'flowbite-svelte';
  import { HomeOutline, CartOutline, DollarOutline, TruckOutline } from 'flowbite-svelte-icons';
  
  let current = $state(1);
  
  // Example: Manual status override
  // This is useful when you want specific steps to have certain states
  // regardless of the current position
  const steps = [
    {
      id: 1,
      icon: HomeOutline,
      status: "completed" as const, // Explicitly completed
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    },
    {
      id: 2,
      icon: CartOutline,
      // status will be auto-determined based on current
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    },
    {
      id: 3,
      icon: DollarOutline,
      // status will be auto-determined based on current
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    },
    {
      id: 4,
      icon: TruckOutline,
      status: "pending" as const, // Force pending regardless of current
      iconClass: "h-5 w-5 lg:h-6 lg:w-6"
    }
  ];

  const stepLabels = [
    "Browse Products",
    "Shopping Cart",
    "Payment",
    "Delivery"
  ];
</script>

<Heading tag="h3" class="text-lg font-semibold mb-2">Progress Stepper with Status Override</Heading>

<ProgressStepper 
  {steps}
  bind:current
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
  <Heading tag="h4" class="font-bold mb-2">Current Step</Heading>
  <P><strong>{stepLabels[current]}</strong> (Step {current + 1} of {steps.length})</P>
  
  <Heading tag="h4" class="font-bold mt-4 mb-2">Step Statuses</Heading>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    {#each steps as step, i}
      <Li>
        {stepLabels[i]}: 
        <Span class="font-mono">
          {step.status ?? (i < current ? 'completed' : i === current ? 'current' : 'pending')}
        </Span>
      </Li>
    {/each}
  </List>
</div>
