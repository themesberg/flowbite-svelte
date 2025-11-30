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

<ProgressStepper bind:current {steps} class="mb-8" clickable={false}/>
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
