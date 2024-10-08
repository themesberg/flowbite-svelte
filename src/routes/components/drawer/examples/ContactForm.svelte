<script lang="ts">
  import { Button, Drawer, uiHelpers, Drawerhead, Label, Input, Textarea, P, A } from "$lib";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  const drawer = uiHelpers();
  let drawerStatus = $state(false);
  const closeDrawer = drawer.close;
  $effect(() => {
    drawerStatus = drawer.isOpen;
  });
  let hidden = true;
</script>

<div class="text-center">
  <Button onclick={drawer.toggle}>Show navigation</Button>
</div>
<Drawer {drawerStatus} {closeDrawer}>
  <Drawerhead onclick={closeDrawer} class="mb-4">
    <h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-5 w-5" />Contact us
    </h5>
  </Drawerhead>
  <form action="#" class="mb-6">
    <div class="mb-6">
      <Label for="email" class="mb-2 block">Your email</Label>
      <Input id="email" name="email" required placeholder="name@company.com" />
    </div>
    <div class="mb-6">
      <Label for="subject" class="mb-2 block">Subject</Label>
      <Input id="subject" name="subject" required placeholder="Let us know how we can help you" />
    </div>
    <div class="mb-6">
      <Label for="message" class="mb-2">Your message</Label>
      <Textarea id="message" placeholder="Your message..." rows={4} name="message" />
    </div>
    <Button type="submit" class="w-full">Send message</Button>
  </form>
  <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">info@company.com</A>
  </P>
  <P class="text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">212-456-7890</A>
  </P>
</Drawer>
