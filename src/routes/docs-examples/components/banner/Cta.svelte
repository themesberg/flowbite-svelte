<script lang="ts">
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner class="rounded-base border-default bg-neutral-primary-soft absolute top-6 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 border shadow-xs lg:max-w-7xl">
  <a href="https://flowbite-svelte.com/" class="border-default mb-2 flex items-center md:me-4 md:mb-0 md:border-e md:pe-4">
    <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" class="me-2 h-6" alt="Flowbite Logo" />
    <span class="text-heading self-center text-lg font-semibold whitespace-nowrap">Flowbite</span>
  </a>
  <p class="text-body flex items-center text-sm font-normal">Build websites even faster with components on top of Tailwind CSS</p>
</Banner>
