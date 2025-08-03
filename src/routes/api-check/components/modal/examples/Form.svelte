<script lang="ts">
  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
  
  let formModal = $state(false);
  let error = $state("");

  function onaction({ action, data }: { action: string; data: FormData }) {
    error = "";
    // Check the data validity, return false to prevent dialog closing; anything else to proceed
    if (action === "login" && (data.get("password") as string)?.length < 4) {
      error = "Password must have at least 4 characters";
      return false;
    }
  }
</script>

<Button onclick={() => (formModal = true)}>Form modal</Button>

<Modal form bind:open={formModal} size="xs" {onaction}>
  <div class="flex flex-col space-y-6">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    {#if error}
      <Label color="red">{error}</Label>
    {/if}
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="min. 4 characters" required />
    </Label>
    <div class="flex items-start">
      <Checkbox name="remember">Remember me</Checkbox>
      <a href="/" class="text-primary-700 dark:text-primary-500 ms-auto text-sm hover:underline">Lost password?</a>
    </div>
    <Button type="submit" value="login">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 dark:text-primary-500 hover:underline">Create account</a>
    </div>
  </div>
</Modal>