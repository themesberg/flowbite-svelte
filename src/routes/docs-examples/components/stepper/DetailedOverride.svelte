<script lang="ts">
  import { DetailedStepper, P, Heading } from 'flowbite-svelte';
  import { BellOutline, ClipboardOutline, CogOutline
 } from 'flowbite-svelte-icons';
</script>

<Heading tag="h3" class="text-lg font-semibold mb-2 mt-8">Example 5: With custom status override</Heading>
<P class="text-sm text-gray-600 mb-2">These statuses are hardcoded and ignore the `current` prop</P>
<DetailedStepper 
  steps={[
    { id: 1, label: "Step 1", description: "Done", status: "completed", icon: BellOutline },
    { id: 2, label: "Step 2", description: "In progress", status: "current", icon: ClipboardOutline },
    { id: 3, label: "Step 3", description: "Pending", status: "pending", icon: CogOutline }
  ]}
  clickable={false}
/>
