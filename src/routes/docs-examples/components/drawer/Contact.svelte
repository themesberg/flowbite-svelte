<script lang="ts">
  import { Drawer, CardPlaceholder, Button, Label, Input, Textarea, P, A } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";

  let open3 = $state(false);
</script>

<div class="text-center">
  <Button onclick={() => (open3 = true)}>Show contact form</Button>
  <CardPlaceholder size="2xl" class="mt-6" />
</div>
<Drawer bind:open={open3}>
  <h5 class="text-body mb-6 inline-flex items-center text-base font-semibold uppercase">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Contact us
  </h5>
  <form method="dialog" class="mb-6">
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
  <P class="text-body mb-2 text-sm">
    <A href="mailto:info@company.com" class="text-fg-brand hover:underline">info@company.com</A>
  </P>
  <P class="text-body text-sm">
    <A href="tel:+12124567890" class="text-fg-brand hover:underline">212-456-7890</A>
  </P>
</Drawer>
