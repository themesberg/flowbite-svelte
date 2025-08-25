<script lang="ts">
  import { ProgressStepper, Label, Input, Button } from "flowbite-svelte";
</script>

<ProgressStepper steps={[{ status: "completed" }, { status: "current" }, { status: "pending" }]} class="mb-8" />
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
