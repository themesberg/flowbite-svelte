<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="absolute">
  <p class="text-body me-8 flex items-center text-sm font-normal md:me-0">
    <span class="bg-neutral-quaternary me-3 inline-flex rounded-full p-1">
      <BullhornSolid class="text-body h-3 w-3" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a
        href="https://flowbite.com"
        class="text-fg-brand inline font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline"
      >
        Flowbite Library
      </a>
    </span>
  </p>
</Banner>
