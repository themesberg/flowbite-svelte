<script lang="ts">
  import { TimelineStepper, Button, P, Heading, List, Li, Span } from "flowbite-svelte";
  import { HomeOutline, CartOutline, DollarOutline, TruckOutline } from "flowbite-svelte-icons";

  let current = $state(1);

  // Example: Manual status override
  const steps = [
    {
      id: 1,
      label: "Browse",
      description: "Browse our products",
      icon: HomeOutline,
      status: "completed" as const, // Explicitly completed
      iconClass: "h-3.5 w-3.5"
    },
    {
      id: 2,
      label: "Cart",
      description: "Review your cart",
      icon: CartOutline,
      // status will be auto-determined based on current
      iconClass: "h-3.5 w-3.5"
    },
    {
      id: 3,
      label: "Payment",
      description: "Complete payment",
      icon: DollarOutline,
      // status will be auto-determined based on current
      iconClass: "h-3.5 w-3.5"
    },
    {
      id: 4,
      label: "Delivery",
      description: "Track your order",
      icon: TruckOutline,
      status: "pending" as const, // Force pending regardless of current
      iconClass: "h-3.5 w-3.5"
    }
  ];

  const stepLabels = steps.map((s) => s.label);
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Timeline Stepper with Status Override</Heading>

<TimelineStepper {steps} bind:current />

<div class="mt-8 flex gap-4">
  <Button onclick={() => (current = Math.max(0, current - 1))} disabled={current === 0} class="rounded bg-gray-500 px-4 py-2 disabled:opacity-50">Previous</Button>

  <Button onclick={() => (current = Math.min(steps.length, current + 1))} disabled={current === steps.length} class="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">Next</Button>
</div>

<div class="mt-4 rounded bg-gray-50 p-4 dark:bg-gray-800">
  <Heading tag="h4" class="mb-2 font-bold">Current Step</Heading>
  <P>
    <strong>{current === 0 ? "None (all pending)" : stepLabels[current - 1]}</strong>
    (Step {current} of {steps.length})
  </P>

  <Heading tag="h4" class="mt-4 mb-2 font-bold">Step Statuses</Heading>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    {#each steps as step, i}
      <Li>
        {stepLabels[i]}:
        <Span class="font-mono">
          {step.status ?? (i + 1 < current ? "completed" : i + 1 === current ? "current" : "pending")}
        </Span>
      </Li>
    {/each}
  </List>

  <P class="mt-4 text-sm text-gray-600 dark:text-gray-400">Note: Step 1 is forced to "completed" and Step 4 is forced to "pending" regardless of the current value.</P>
</div>
