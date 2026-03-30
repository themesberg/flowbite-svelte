<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, Input, Label, Button } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner classes={{ content: "w-full sm:w-auto" }} class="absolute">
  <form action="/" class="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-4">
    <Label for="email" class="text-body shrink-0">Sign up for our newsletter</Label>
    <Input type="email" id="email" placeholder="Enter your email" class="bg-neutral-primary border-default md:w-64" required />
    <Button type="submit" class="w-full sm:w-auto">Subscribe</Button>
  </form>
</Banner>
