<script lang="ts">
  import { VirtualMasonry, Heading, P } from "$lib";
  import { Spinner } from "flowbite-svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  // Track if images are loaded (for client-side navigation)
  let imagesLoaded = $state(false);

  $effect(() => {
    if (data.images.length > 0) {
      imagesLoaded = true;
    }
  });

  function getImageHeight(image: (typeof data.images)[0], _index: number) {
    const estimatedColumnWidth = 300;
    // Add extra height for padding
    const imageHeight = (image.height / image.width) * estimatedColumnWidth;
    return imageHeight + 16; // Add 16px for padding (p-2 = 8px top + 8px bottom)
  }
</script>

<div class="container mx-auto max-w-5xl px-4 py-8">
  <Heading tag="h1" class="mb-6 text-3xl font-bold">Virtual Masonry Image Gallery (50 images)</Heading>
  <P>
    A virtualized Svelte component rendering an efficient masonry/Pinterest layout. It calculates item positions and uses windowing (overscan) to display only visible items from a large dataset,
    optimizing performance.
  </P>

  {#if !imagesLoaded || data.images.length === 0}
    <div class="flex h-96 items-center justify-center">
      <Spinner size="12" />
    </div>
  {:else}
    <VirtualMasonry items={data.images} columns={2} gap={16} height={800} overscan={200} getItemHeight={getImageHeight} classes={{ item: "p-2" }}>
      {#snippet children(image, _index)}
        <div class="group relative h-full">
          <img src={image.url} alt={image.alt} class="h-full w-full object-cover transition-opacity duration-500" loading="lazy" decoding="async" />
          <div class="absolute right-0 bottom-0 left-0 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent p-3 text-white opacity-0 transition-opacity group-hover:opacity-100">
            <p class="truncate text-sm font-medium">Photo by {image.author}</p>
          </div>
        </div>
      {/snippet}
    </VirtualMasonry>
  {/if}
</div>
