<script lang="ts">
  import { Gallery, type ImgType } from "$lib"
  
  const images9 = [
    {
      alt: 'shoes',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
    },
    {
      alt: 'small bag',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
    },
    {
      alt: 'plants',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
    },
    {
      alt: 'watch',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
    },
    {
      alt: 'shoe',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
    }
  ];
</script>

{#snippet figure(item: ImgType)}
  <div class="p-1 ring-4 ring-red-600 dark:ring-red-400">
    <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
  </div>
{/snippet}

<Gallery divClass="gap-4 grid-cols-3">
  {#each images9 as item}
    {@render figure(item)}
  {/each}
</Gallery>