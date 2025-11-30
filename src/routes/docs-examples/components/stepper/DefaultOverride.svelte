<script lang="ts">
  import { Stepper, P, Heading } from "flowbite-svelte";
  import { CheckOutline, UserCircleOutline, BadgeCheckOutline } from "flowbite-svelte-icons";
</script>

<Heading tag="h3" class="mb-2 text-lg font-semibold">Example 5: With custom status override</Heading>
<P class="mb-2 text-sm text-gray-600">These statuses are hardcoded and ignore the `current` prop</P>
<Stepper
  steps={[
    { label: "Personal", description: "Info", status: "completed", icon: UserCircleOutline },
    { label: "Account", description: "Info", status: "current", icon: BadgeCheckOutline },
    { label: "Confirmation", status: "pending", icon: CheckOutline }
  ]}
  clickable={false}
/>
