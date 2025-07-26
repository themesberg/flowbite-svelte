<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
  <p class="me-8 flex items-center text-sm font-normal text-gray-500 md:me-0 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a href="https://flowbite.com" class="text-primary-600 dark:text-primary-500 inline font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:decoration-1">Flowbite Library</a>
    </span>
  </p>
</Banner>