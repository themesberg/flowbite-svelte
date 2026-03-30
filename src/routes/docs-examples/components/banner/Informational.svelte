<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, Button } from "flowbite-svelte";
  import { BookOpenOutline, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
  <div class="mb-4 md:me-4 md:mb-0">
    <h2 class="text-heading mb-1 text-base font-semibold">Integration is the key</h2>
    <p class="text-body flex items-center text-sm font-normal">You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind CSS.</p>
  </div>
  <div class="flex shrink-0 items-center gap-3">
    <Button href="/" size="sm" color="alternative">
      <BookOpenOutline class="me-2 h-3 w-3" /> Learn more
    </Button>
    <Button href="/" size="sm">
      Get started <ArrowRightOutline class="ms-2 h-3 w-3" />
    </Button>
  </div>
</Banner>
