<script lang="ts">
  import { Stepper } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";
</script>

<Stepper
  steps={[
    {
      id: 1,
      label: "Personal",
      description: "Info",
      status: "completed"
    },
    {
      id: 2,
      label: "Account",
      description: "Info",
      status: "current"
    },
    {
      id: 3,
      label: "Confirmation",
      status: "pending"
    }
  ]}
/>

<Stepper
  steps={[
    {
      label: "Personal",
      description: "Info",
      status: "completed",
      icon: CheckOutline
    },
    {
      label: "Account",
      description: "Info",
      status: "current"
    },
    {
      label: "Confirmation",
      status: "pending"
    }
  ]}
/>
