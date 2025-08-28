<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder, Button } from "flowbite-svelte";
  import { BookOpenOutline, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
  <div class="mb-4 md:me-4 md:mb-0">
    <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools to make your work even more efficient and lightning fast based on Tailwind CSS.</p>
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
