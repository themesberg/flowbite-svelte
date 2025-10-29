<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { Banner, Skeleton, ImagePlaceholder, A } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";

  const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner transition={slide} {params} class="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <A href="https://flowbite.com" class="font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:decoration-1">
        Flowbite Library
      </A>
    </span>
  </p>
</Banner>
