<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute top-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg border border-gray-100 bg-white shadow-xs lg:max-w-7xl dark:border-gray-600 dark:bg-gray-700">
  <a href="https://flowbite-svelte.com/" class="mb-2 flex items-center border-gray-200 md:me-4 md:mb-0 md:border-e md:pe-4 dark:border-gray-600">
    <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" class="me-2 h-6" alt="Flowbite Logo" />
    <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
</Banner>