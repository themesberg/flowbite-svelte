<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea, P, A, Checkbox } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";

  let open3 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open3 = true)}>Show contact form</Button>
</div>
<Drawer bind:open={open3}>
  <h5 id="drawer-label" class="mb-6 inline-flex items-center text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Contact us
  </h5>
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
      <Textarea id="message" placeholder="Your message..." rows={4} name="message" class="w-full" />
    </div>
    <Button type="submit" class="w-full">Send message</Button>
  </form>
  <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 dark:text-primary-500 hover:underline">info@company.com</A>
  </P>
  <P class="text-sm text-gray-500 dark:text-gray-400">
    <A href="/" class="text-primary-600 dark:text-primary-500 hover:underline">212-456-7890</A>
  </P>
</Drawer>
