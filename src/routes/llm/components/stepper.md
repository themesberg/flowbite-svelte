# Svelte Stepper - Flowbite


The stepper component can be used to show a numbered list of steps next to a form component to indicate the progress and number of steps that are required to complete and submit the form data.

There are multiple examples that you can use including horizontal or vertical aligned stepper components, different sizes, styles, and showing icons or numbers all coded with the utility classes from Tailwind CSS.

## Setup

```svelte
<script lang="ts">
  import { BreadcrumbStepper, DetailedStepper, ProgressStepper, Stepper, TimelineStepper, VerticalStepper } from "flowbite-svelte";
</script>
```

## Default Active Step

- Stepper, BreadcrumbStepper, VerticalStepper: Default current = 1 (first step active)
- ProgressStepper, DetailedStepper: Default current = 0 (no step active)

Set current = 0 on any component to start with all steps pending.

## Default stepper

Use this example to show a list of form steps with a number and title of the step in a horizontal alignment.

```svelte
<script lang="ts">
  import { Stepper, Button, P, Heading } from "flowbite-svelte";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "Personal",
      description: "Info"
    },
    {
      id: 2,
      label: "Account",
      description: "Info"
    },
    {
      id: 3,
      label: "Confirmation"
    },
    {
      id: 4,
      label: "Complete"
    }
  ];

  // Optional: Handle step changes
  function handleStepChange(event: { current: number; last: number }) {
    console.log(`Moved from step ${event.last} to step ${event.current}`);
    // You can add validation here
  }
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 1: Basic usage - Clickable stepper</Heading>
<Stepper {steps} bind:current onStepClick={handleStepChange} />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 2: Non-clickable stepper</Heading>
<Stepper {steps} bind:current clickable={false} />

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
  <P>
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500">Note: current=0 means no step is active, current=1 is the first step, current=2 is the second step, etc.</P>
</div>
```

```svelte
<script lang="ts">
  import { Stepper, Button, P, Heading } from "flowbite-svelte";
  import { CheckOutline, UserCircleOutline, BadgeCheckOutline } from "flowbite-svelte-icons";

  let current = $state(1);
  const steps = [
    {
      label: "Personal",
      description: "Info",
      icon: UserCircleOutline
    },
    {
      label: "Account",
      description: "Info",
      icon: BadgeCheckOutline
    },
    {
      label: "Confirmation",
      icon: CheckOutline
    }
  ];
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 3: With icons - Checkmark for completed ✓</Heading>
<P class="mb-2 text-sm text-gray-600">When you click step 2 or 3, previous steps show checkmarks (default: showCheckmarkForCompleted=true)</P>
<Stepper {steps} bind:current />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 4: With icons - Keep icons for completed</Heading>
<P class="mb-2 text-sm text-gray-600">All steps keep their icons (showCheckmarkForCompleted=false)</P>
<Stepper {steps} bind:current showCheckmarkForCompleted={false} />

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
  <P>
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500">Note: current=0 means no step is active, current=1 is the first step, current=2 is the second step, etc.</P>
</div>
```

```svelte
<script lang="ts">
  import { Stepper, P, Heading } from "flowbite-svelte";
  import { CheckOutline, UserCircleOutline, BadgeCheckOutline } from "flowbite-svelte-icons";
  let current = $state(1);
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 5: With custom status override</Heading>
<P class="mb-2 text-sm text-gray-600">These statuses are hardcoded and ignore the `current` prop</P>
<Stepper
  steps={[
    { label: "Personal", description: "Info", status: "completed", icon: UserCircleOutline },
    { label: "Account", description: "Info", status: "current", icon: BadgeCheckOutline },
    { label: "Confirmation", status: "pending", icon: CheckOutline }
  ]}
  bind:current
  clickable={false}
/>
```

## ProgressStepper

This example can be used to show the progress of the stepper component based on numbers or icons and showing a checkmark when the step has been finished.

Steps show numbers by default. Completed steps show checkmarks.

```svelte
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
```

When icons are provided, they replace the default numbers. Completed steps still show checkmarks by default.

```svelte
<script lang="ts">
  import { ProgressStepper, Button, P, Heading } from "flowbite-svelte";
  import { UserCircleOutline, BadgeCheckOutline, ArrowRightAltOutline, AwardOutline } from "flowbite-svelte-icons";

  let current = $state(1);
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

  const stepLabels = ["Personal Info", "Experience", "Review", "Complete"];
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Progress Stepper with Custom Icons</Heading>
<ProgressStepper {steps} bind:current />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">With icons, no checkmarks (keeps icons for completed steps)</Heading>
<ProgressStepper {steps} bind:current showCheckmarkForCompleted={false} />

<div class="mt-8 flex gap-4">
  <Button onclick={() => (current = Math.max(0, current - 1))} disabled={current === 0} class="rounded bg-gray-500 px-4 py-2 disabled:opacity-50">Previous</Button>

  <Button onclick={() => (current = Math.min(steps.length, current + 1))} disabled={current === steps.length} class="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">Next</Button>
</div>

<div class="mt-4 rounded bg-gray-50 p-4 dark:bg-gray-800">
  <Heading tag="h4" class="font-bold">Current Step</Heading>
  <P>
    <strong>{current === 0 ? "None (all pending)" : stepLabels[current - 1]}</strong>
    (Step {current} of {steps.length})
  </P>
</div>
```

This example shows how you can manually override the status of specific steps. The first step is forced to `completed` and the last step is forced to `pending`.

```svelte
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
```

## DetailedStepper

Use this example to show an extra subtitle next to the number and the title of the stepper component based on an ordered list element.


- `onStepClick` prop can be used for an event handler.
- `clickable` prop allows clicking steps to navigate (default: true)

```svelte
<script lang="ts">
  import { DetailedStepper, Button, P, Heading } from "flowbite-svelte";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "Account Info",
      description: "Enter your account details"
    },
    {
      id: 2,
      label: "Company Info",
      description: "Provide company information"
    },
    {
      id: 3,
      label: "Review",
      description: "Review and submit"
    },
    {
      id: 4,
      label: "Review 2",
      description: "Review and submit 2"
    },
    {
      id: 5,
      label: "Review 3",
      description: "Review and submit 3"
    }
  ];

  // Optional: Handle step changes
  function handleStepChange(event: { current: number; last: number }) {
    console.log(`Moved from step ${event.last} to step ${event.current}`);
    // You can add validation here
  }
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 1: Basic usage (no icons)</Heading>
<DetailedStepper {steps} bind:current onStepClick={handleStepChange} />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 2: Non-clickable stepper</Heading>
<DetailedStepper {steps} bind:current clickable={false} />

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
  <P>
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500">Note: current=0 means no step is active, current=1 is the first step, current=2 is the second step, etc.</P>
</div>
```

`showCheckmarkForCompleted` shows checkmark for completed steps instead of icons (default: true).

```svelte
<script lang="ts">
  import { DetailedStepper, Button, P, Heading } from "flowbite-svelte";
  import { BellOutline, ClipboardOutline, CogOutline } from "flowbite-svelte-icons";

  let current = $state(1);
  const steps = [
    { id: 1, label: "Account Info", description: "Enter your account details", icon: BellOutline },
    { id: 2, label: "Company Info", description: "Provide company information", icon: ClipboardOutline },
    { id: 3, label: "Review", description: "Review and submit", icon: CogOutline }
  ];
</script>

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 3: With icons - Checkmark for completed ✓</Heading>
<P class="mb-2 text-sm text-gray-600">When you click step 2 or 3, previous steps show checkmarks (default: showCheckmarkForCompleted=true)</P>
<DetailedStepper {steps} bind:current />

<Heading tag="h3" class="mt-8 mb-2 text-lg font-semibold">Example 4: With icons - Keep icons for completed</Heading>
<P class="mb-2 text-sm text-gray-600">All steps keep their icons (showCheckmarkForCompleted=false)</P>
<DetailedStepper {steps} bind:current showCheckmarkForCompleted={false} />

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
  <P>
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500">Note: current=0 means no step is active, current=1 is the first step, current=2 is the second step, etc.</P>
</div>
```

Following example shows how to override `current` prop using custom status.

- Use `status: "completed" | "current" | "pending"` to override.
- Use `false` for `clickable`.

```svelte
<script lang="ts">
  import { DetailedStepper, P, Heading } from "flowbite-svelte";
  import { BellOutline, ClipboardOutline, CogOutline } from "flowbite-svelte-icons";
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 5: With custom status override</Heading>
<P class="mb-2 text-sm text-gray-600">These statuses are hardcoded and ignore the `current` prop</P>
<DetailedStepper
  steps={[
    { id: 1, label: "Step 1", description: "Done", status: "completed", icon: BellOutline },
    { id: 2, label: "Step 2", description: "In progress", status: "current", icon: ClipboardOutline },
    { id: 3, label: "Step 3", description: "Pending", status: "pending", icon: CogOutline }
  ]}
  clickable={false}
/>
```

## VerticalStepper

This example can be used to show a list of steps aligned vertically where you can indicate the completed, currently active, and the unexplored steps.

```svelte
<script lang="ts">
  import { VerticalStepper, Button, P, Heading } from "flowbite-svelte";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "User Info"
    },
    {
      id: 2,
      label: "Account Info"
    },
    {
      id: 3,
      label: "Social Accounts"
    },
    {
      id: 4,
      label: "Review"
    },
    {
      id: 5,
      label: "Confirmation"
    }
  ];

  // Optional: Handle step changes
  function handleStepChange(event: { current: number; last: number }) {
    console.log(`Moved from step ${event.last} to step ${event.current}`);
  }
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Example 1: Basic clickable vertical stepper</Heading>

<VerticalStepper {steps} bind:current onStepClick={handleStepChange} />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">Example 2: Non-clickable vertical stepper</Heading>
<VerticalStepper {steps} bind:current clickable={false} />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">Example 3: Without checkmarks (no icon for completed steps)</Heading>
<VerticalStepper {steps} bind:current showCheckmarkForCompleted={false} />

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
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500 dark:text-gray-400">Note: current=0 means no step is active, current=1 is the first step, etc.</P>
</div>
```
This example shows how to use custom icons:

```svelte
<script lang="ts">
  import { VerticalStepper, Button, P, Heading } from "flowbite-svelte";
  import { UserCircleOutline, ApiKeyOutline, ShareNodesOutline, EyeOutline, CheckCircleOutline } from "flowbite-svelte-icons";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "User Info",
      icon: UserCircleOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 2,
      label: "Account Info",
      icon: ApiKeyOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 3,
      label: "Social Accounts",
      icon: ShareNodesOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 4,
      label: "Review",
      icon: EyeOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 5,
      label: "Confirmation",
      icon: CheckCircleOutline,
      iconClass: "h-5 w-5"
    }
  ];
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Vertical Stepper with Custom Icons</Heading>
<VerticalStepper {steps} bind:current />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">With icons, no checkmarks (keeps custom icons for completed steps)</Heading>
<VerticalStepper {steps} bind:current showCheckmarkForCompleted={false} />

<div class="mt-8 flex gap-4">
  <Button onclick={() => (current = Math.max(0, current - 1))} disabled={current === 0} class="rounded bg-gray-500 px-4 py-2 disabled:opacity-50">Previous</Button>

  <Button onclick={() => (current = Math.min(steps.length, current + 1))} disabled={current === steps.length} class="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">Next</Button>
</div>

<div class="mt-4 rounded bg-gray-50 p-4 dark:bg-gray-800">
  <Heading tag="h4" class="font-bold">Current Step</Heading>
  <P>
    <strong>{current === 0 ? "None (all pending)" : steps[current - 1].label}</strong>
    (Step {current} of {steps.length})
  </P>
</div>
```

This example shows how to override using custom status:

```svelte
<script lang="ts">
  import { VerticalStepper, Button, P, Heading, List, Li, Span } from "flowbite-svelte";
  import { UserCircleOutline, ApiKeyOutline, ShareNodesOutline, EyeOutline, CheckCircleOutline } from "flowbite-svelte-icons";

  let current = $state(1);

  // Example: Manual status override
  const steps = [
    {
      id: 1,
      label: "User Info",
      icon: UserCircleOutline,
      status: "completed" as const, // Explicitly completed
      iconClass: "h-4 w-4"
    },
    {
      id: 2,
      label: "Account Info",
      icon: ApiKeyOutline,
      // status will be auto-determined based on current
      iconClass: "h-4 w-4"
    },
    {
      id: 3,
      label: "Social Accounts",
      icon: ShareNodesOutline,
      // status will be auto-determined based on current
      iconClass: "h-4 w-4"
    },
    {
      id: 4,
      label: "Review",
      icon: EyeOutline,
      // status will be auto-determined based on current
      iconClass: "h-4 w-4"
    },
    {
      id: 5,
      label: "Confirmation",
      icon: CheckCircleOutline,
      status: "pending" as const, // Force pending regardless of current
      iconClass: "h-4 w-4"
    }
  ];

  const stepLabels = steps.map((s) => s.label);
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Vertical Stepper with Status Override</Heading>

<VerticalStepper {steps} bind:current />

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

  <P class="mt-4 text-sm text-gray-600 dark:text-gray-400">Note: Step 1 is forced to "completed" and Step 5 is forced to "pending" regardless of the current value.</P>
</div>
```

## BreadcrumbStepper

This example can be used to show the number of steps similar to how a breadcrumb component looks like by using double chevron icons between the items.

```svelte
<script lang="ts">
  import { BreadcrumbStepper, Button, P, Heading } from "flowbite-svelte";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "Personal",
      shortLabel: "Info"
    },
    {
      id: 2,
      label: "Account",
      shortLabel: "Setup"
    },
    {
      id: 3,
      label: "Review"
    },
    {
      id: 4,
      label: "Complete"
    }
  ];

  // Optional: Handle step changes
  function handleStepChange(event: { current: number; last: number }) {
    console.log(`Moved from step ${event.last} to step ${event.current}`);
  }
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Example 1: Basic clickable breadcrumb stepper</Heading>

<BreadcrumbStepper {steps} bind:current onStepClick={handleStepChange} />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">Example 2: Non-clickable breadcrumb stepper</Heading>
<BreadcrumbStepper {steps} bind:current clickable={false} />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">Example 3: Without checkmarks (no icon for completed steps)</Heading>
<BreadcrumbStepper {steps} bind:current showCheckmarkForCompleted={false} />

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
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500 dark:text-gray-400">Note: current=0 means no step is active, current=1 is the first step, etc.</P>
</div>
```

This example shows how to use custom icons:

```svelte
<script lang="ts">
  import { BreadcrumbStepper, Button, P, Heading } from "flowbite-svelte";
  import { UserCircleOutline, CogOutline, EyeOutline, CheckCircleOutline } from "flowbite-svelte-icons";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "Personal",
      shortLabel: "Info",
      icon: UserCircleOutline,
      iconClass: "h-3 w-3"
    },
    {
      id: 2,
      label: "Settings",
      shortLabel: "Config",
      icon: CogOutline,
      iconClass: "h-3 w-3"
    },
    {
      id: 3,
      label: "Review",
      icon: EyeOutline,
      iconClass: "h-3 w-3"
    },
    {
      id: 4,
      label: "Complete",
      icon: CheckCircleOutline,
      iconClass: "h-3 w-3"
    }
  ];
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Breadcrumb Stepper with Custom Icons</Heading>
<BreadcrumbStepper {steps} bind:current />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">With icons, no checkmarks (keeps custom icons for completed steps)</Heading>
<BreadcrumbStepper {steps} bind:current showCheckmarkForCompleted={false} />

<div class="mt-8 flex gap-4">
  <Button onclick={() => (current = Math.max(0, current - 1))} disabled={current === 0} class="rounded bg-gray-500 px-4 py-2 disabled:opacity-50">Previous</Button>

  <Button onclick={() => (current = Math.min(steps.length, current + 1))} disabled={current === steps.length} class="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">Next</Button>
</div>

<div class="mt-4 rounded bg-gray-50 p-4 dark:bg-gray-800">
  <Heading tag="h4" class="font-bold">Current Step</Heading>
  <P>
    <strong>{current === 0 ? "None (all pending)" : steps[current - 1].label}</strong>
    (Step {current} of {steps.length})
  </P>
</div>
```

This example shows how to override using custom status:

```svelte
<script lang="ts">
  import { BreadcrumbStepper, Button, P, Heading, List, Li, Span } from "flowbite-svelte";
  import { HomeOutline, CartOutline, DollarOutline, TruckOutline } from "flowbite-svelte-icons";

  let current = $state(1);

  // Example: Manual status override
  const steps = [
    {
      id: 1,
      label: "Browse",
      shortLabel: "Shop",
      icon: HomeOutline,
      status: "completed" as const, // Explicitly completed
      iconClass: "h-3 w-3"
    },
    {
      id: 2,
      label: "Cart",
      shortLabel: "Items",
      icon: CartOutline,
      // status will be auto-determined based on current
      iconClass: "h-3 w-3"
    },
    {
      id: 3,
      label: "Payment",
      icon: DollarOutline,
      // status will be auto-determined based on current
      iconClass: "h-3 w-3"
    },
    {
      id: 4,
      label: "Delivery",
      icon: TruckOutline,
      status: "pending" as const, // Force pending regardless of current
      iconClass: "h-3 w-3"
    }
  ];

  const stepLabels = steps.map((s) => s.label);
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Breadcrumb Stepper with Status Override</Heading>

<BreadcrumbStepper {steps} bind:current />

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
```

## TimelineStepper

Use this example to show the number of steps inside a timeline component using icons, title, and subtitle for each step.

```svelte
<script lang="ts">
  import { TimelineStepper, Button, P, Heading } from "flowbite-svelte";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "Personal Info",
      description: "Provide your basic information"
    },
    {
      id: 2,
      label: "Account Setup",
      description: "Create your account credentials"
    },
    {
      id: 3,
      label: "Preferences",
      description: "Set your preferences"
    },
    {
      id: 4,
      label: "Complete",
      description: "Finish setup"
    }
  ];

  // Optional: Handle step changes
  function handleStepChange(event: { current: number; last: number }) {
    console.log(`Moved from step ${event.last} to step ${event.current}`);
  }
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Example 1: Basic clickable timeline stepper</Heading>

<TimelineStepper {steps} bind:current onStepClick={handleStepChange} />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">Example 2: Non-clickable timeline stepper</Heading>
<TimelineStepper {steps} bind:current clickable={false} />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">Example 3: Without checkmarks (no icon for completed steps)</Heading>
<TimelineStepper {steps} bind:current showCheckmarkForCompleted={false} />

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
    <strong>Active Step:</strong>
    {current === 0 ? "None (all pending)" : steps[current - 1].label}
  </P>
  <P class="mt-2 text-xs text-gray-500 dark:text-gray-400">Note: current=0 means no step is active, current=1 is the first step, etc.</P>
</div>
```

This example shows how to use custom icons:

```svelte
<script lang="ts">
  import { TimelineStepper, Button, P, Heading } from "flowbite-svelte";
  import { UserCircleOutline, CogOutline, EyeOutline, CheckCircleOutline } from "flowbite-svelte-icons";

  let current = $state(1);
  const steps = [
    {
      id: 1,
      label: "Profile",
      description: "Setup your profile",
      icon: UserCircleOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 2,
      label: "Settings",
      description: "Configure your settings",
      icon: CogOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 3,
      label: "Review",
      description: "Review your information",
      icon: EyeOutline,
      iconClass: "h-5 w-5"
    },
    {
      id: 4,
      label: "Complete",
      description: "All done!",
      icon: CheckCircleOutline,
      iconClass: "h-5 w-5"
    }
  ];
</script>

<Heading tag="h3" class="mb-4 text-lg font-semibold">Timeline Stepper with Custom Icons</Heading>
<TimelineStepper {steps} bind:current />

<Heading tag="h3" class="mt-8 mb-4 text-lg font-semibold">With icons, no checkmarks (keeps custom icons for completed steps)</Heading>
<TimelineStepper {steps} bind:current showCheckmarkForCompleted={false} />

<div class="mt-8 flex gap-4">
  <Button onclick={() => (current = Math.max(0, current - 1))} disabled={current === 0} class="rounded bg-gray-500 px-4 py-2 disabled:opacity-50">Previous</Button>

  <Button onclick={() => (current = Math.min(steps.length, current + 1))} disabled={current === steps.length} class="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50">Next</Button>
</div>

<div class="mt-4 rounded bg-gray-50 p-4 dark:bg-gray-800">
  <Heading tag="h4" class="font-bold">Current Step</Heading>
  <P>
    <strong>{current === 0 ? "None (all pending)" : steps[current - 1].label}</strong>
    (Step {current} of {steps.length})
  </P>
</div>
```

This example shows how to override using custom status:

```svelte
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
      iconClass: "h-5 w-5"
    },
    {
      id: 2,
      label: "Cart",
      description: "Review your cart",
      icon: CartOutline,
      // status will be auto-determined based on current
      iconClass: "h-5 w-5"
    },
    {
      id: 3,
      label: "Payment",
      description: "Complete payment",
      icon: DollarOutline,
      // status will be auto-determined based on current
      iconClass: "h-5 w-5"
    },
    {
      id: 4,
      label: "Delivery",
      description: "Track your order",
      icon: TruckOutline,
      status: "pending" as const, // Force pending regardless of current
      iconClass: "h-5 w-5"
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
```

## Stepper with form

Use this example to show the stepper component next to a form layout and change the content based on which currently step your are completing.

```svelte
<script lang="ts">
  import { ProgressStepper, Label, Input, Button } from "flowbite-svelte";
  import { HomeOutline, CartOutline, DollarOutline, TruckOutline } from "flowbite-svelte-icons";

  let current = $state(2);
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
</script>

<ProgressStepper bind:current {steps} class="mb-8" clickable={false} />
<form action="#">
  <h3 class="mb-4 text-lg leading-none font-medium text-gray-900 dark:text-white">Invoice details</h3>
  <div class="mb-4 grid gap-4 sm:grid-cols-2">
    <div>
      <Label for="username" class="mb-2">Username</Label>
      <Input type="text" name="username" id="username" placeholder="username.example" required />
    </div>
    <div>
      <Label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email</Label>
      <Input type="email" name="email" id="email" placeholder="name@company.com" required />
    </div>
    <div>
      <Label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</Label>
      <Input type="password" name="password" id="password" placeholder="•••••••••" required />
    </div>
    <div>
      <Label for="confirm-password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Confirm password</Label>
      <Input type="password" name="confirm-password" id="confirm-password" placeholder="•••••••••" required />
    </div>
  </div>
  <Button type="submit">Next Step: Payment Info</Button>
</form>
```

## Component data

### BreadcrumbStepper

#### Types

[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1587)

#### Props

- steps: []
- class: className
- classes
- current: $bindable(1)
- clickable: true
- showCheckmarkForCompleted: true
- onStepClick

### CheckmarkIcon

#### Types

[Props](null)

#### Props

- class: className
- variant: "default"

### DetailedStepper

#### Types

[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1550)

#### Props

- steps: []
- contentClass
- class: className
- classes
- current: $bindable(0)
- clickable: true
- showCheckmarkForCompleted: true
- onStepClick

### DoubleArrowIcon

#### Types

[Props](null)

#### Props

- class: className

### ProfileCardIcon

#### Types

[Props](null)

#### Props

- class: className

### ProgressStepper

#### Types

[ProgressStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1532)

#### Props

- steps: []
- class: className
- classes
- current: $bindable(0)
- clickable: true
- showCheckmarkForCompleted: true
- onStepClick

### Stepper

#### Types

[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1516)

#### Props

- steps: []
- class: className
- classes
- current: $bindable(1)
- clickable: true
- showCheckmarkForCompleted: true
- onStepClick

### TimelineStepper

#### Types

[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1605)

#### Props

- steps: []
- class: className
- classes
- contentClass
- current: $bindable(1)
- clickable: true
- showCheckmarkForCompleted: true
- onStepClick

### VerticalStepper

#### Types

[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1568)

#### Props

- steps: []
- liClass
- class: className
- classes
- current: $bindable(1)
- clickable: true
- showCheckmarkForCompleted: true
- onStepClick


## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/stepper)
