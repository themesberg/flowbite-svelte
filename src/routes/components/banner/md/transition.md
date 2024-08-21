<script>
  import { slide } from 'svelte/transition';
  import { linear } from 'svelte/easing';
  import { Banner, Skeleton, ImagePlaceholder } from '$lib';
</script>
<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" position="absolute" transition={slide} params={{ duration: 1000, easing: linear, x: -150 }}>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a href="https://flowbite.com" class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500"> Flowbite Library </a>
    </span>
  </p>
</Banner>
