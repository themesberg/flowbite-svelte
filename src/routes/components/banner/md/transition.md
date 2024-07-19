<script>
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { Banner, Skeleton, ImagePlaceholder } from '$lib';
  import { BullhornSolid } from 'flowbite-svelte-icons';
</script>

<CodeWrapper class="flex flex-col relative">
<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" position="absolute" transition={slide} {params}>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600">
      <BullhornSolid class="w-3 h-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-primary-600 underline dark:text-primary-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"> Flowbite Library </a>
    </span>
  </p>
</Banner>
