<script lang="ts">
  import { TimelineStepper } from "flowbite-svelte";
</script>

<TimelineStepper
  steps={[
    { label: "Personal Info", description: "Step details here", status: "completed" },
    { label: "Account Info", description: "Step details here", status: "current" },
    { label: "Review", description: "Step details here", status: "pending" },
    { label: "Confirmation", description: "Step details here", status: "pending" }
  ]}
/>