<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, Input, Label, Button } from "$lib";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner classes={{ insideDiv: "w-full sm:w-auto" }}>
  <form action="/" class="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-4">
    <Label for="email" class="shrink-0 text-gray-500 dark:text-gray-400">Sign up for our newsletter</Label>
    <Input type="email" id="email" placeholder="Enter your email" class="bg-white md:w-64 dark:border-gray-500 dark:bg-gray-600" required />
    <Button type="submit" class="w-full sm:w-auto">Subscribe</Button>
  </form>
</Banner>
