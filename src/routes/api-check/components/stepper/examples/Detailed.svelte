<script lang="ts">
  import { DetailedStepper } from "flowbite-svelte";
</script>

<DetailedStepper
  steps={[
    {
      id: 1,
      label: "User info",
      description: "Step details here",
      status: "completed"
    },
    {
      id: 2,
      label: "Company info",
      description: "Step details here",
      status: "current"
    },
    {
      id: 3,
      label: "Payment info",
      description: "Step details here",
      status: "pending"
    }
  ]}
/>
