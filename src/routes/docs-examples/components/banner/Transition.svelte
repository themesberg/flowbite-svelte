<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { Banner, Skeleton, ImagePlaceholder, A } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";

  const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner transition={slide} transitionParams={params} class="absolute">
  <p class="text-body flex items-center text-sm font-normal">
    <span class="bg-neutral-quaternary me-3 inline-flex rounded-full p-1">
      <BullhornSolid class="text-body h-3 w-3" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <A href="https://flowbite.com" class="font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline">Flowbite Library</A>
    </span>
  </p>
</Banner>
