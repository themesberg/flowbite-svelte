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
