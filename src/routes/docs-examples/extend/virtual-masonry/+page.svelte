<script lang="ts">
  import { VirtualMasonry, Heading, P } from '$lib';
  import { Spinner } from 'flowbite-svelte';
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
  
  // Track if images are loaded (for client-side navigation)
  let imagesLoaded = $state(false);
  
  $effect(() => {
    if (data.images.length > 0) {
      imagesLoaded = true;
    }
  });
  
  function getImageHeight(image: typeof data.images[0], _index: number) {
    const estimatedColumnWidth = 300;
    // Add extra height for padding
    const imageHeight = (image.height / image.width) * estimatedColumnWidth;
    return imageHeight + 16; // Add 16px for padding (p-2 = 8px top + 8px bottom)
  }
</script>

<div class="container mx-auto max-w-5xl px-4 py-8">
  <Heading tag="h1" class="text-3xl font-bold mb-6">Virtual Masonry Image Gallery (50 images)</Heading>
  <P>A virtualized Svelte component rendering an efficient masonry/Pinterest layout. It calculates item positions and uses windowing (overscan) to display only visible items from a large dataset, optimizing performance.</P>
  
  {#if !imagesLoaded || data.images.length === 0}
    <div class="flex items-center justify-center h-96">
      <Spinner size="12" />
    </div>
  {:else}
    <VirtualMasonry
      items={data.images}
      columns={2}
      gap={16}
      height={800}
      overscan={200}
      getItemHeight={getImageHeight}
      classes={{ item: 'p-2' }}
    >
      {#snippet children(image, _index)}
        <div class="relative group h-full">
          <img
            src={image.url}
            alt={image.alt}
            class="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <p class="text-sm font-medium truncate">Photo by {image.author}</p>
          </div>
        </div>
      {/snippet}
    </VirtualMasonry>
  {/if}
</div>