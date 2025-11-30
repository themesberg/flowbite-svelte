<script lang="ts">
  import { ProgressStepper, Button, P, Heading, List, Li, Span } from "flowbite-svelte";
  import { HomeOutline, CartOutline, DollarOutline, TruckOutline } from "flowbite-svelte-icons";

  let current = $state(1); // 1-based: 0=none, 1=first step, 2=second step, etc.

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

  const stepLabels = ["Browse Products", "Shopping Cart", "Payment", "Delivery"];
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Progress Stepper with Status Override</Heading>

<ProgressStepper {steps} bind:current />

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
</div>
