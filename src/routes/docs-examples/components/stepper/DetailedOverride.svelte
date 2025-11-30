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
