<script lang="ts">
  import { VerticalStepper } from "flowbite-svelte";
</script>

<VerticalStepper
  steps={[
    {
      id: 1,
      label: "User info",
      status: "completed"
    },
    {
      id: 2,
      label: "Account info",
      status: "completed"
    },
    {
      id: 3,
      label: "Social accounts",
      status: "current"
    },
    {
      id: 4,
      label: "Review",
      status: "pending"
    },
    {
      id: 5,
      label: "Confirmation",
      status: "pending"
    }
  ]}
/>
