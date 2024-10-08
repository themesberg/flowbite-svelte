<script>
  import { Button, Modal, Label, Input, Checkbox, uiHelpers } from "$lib";
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
  let formModal = $state(false);
</script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Pop-up modal</Button>
</div>

<Modal {modalStatus} {closeModal} size="xs" class="w-full">
  <form class="flex flex-col space-y-6" action="#">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
      <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost password?</a>
    </div>
    <Button type="submit" class="w-full1">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
    </div>
  </form>
</Modal>
