<script>
    import { Gallery } from 'svelte-5-ui-lib';
  const images9 = [
    { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
  ];
</script>

{#snippet figure(item)}
    <div class="ring-4 ring-red-600 dark:ring-red-400 p-1">
        
        <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
    </div>
{/snippet}
    
<Gallery divclass="gap-4 grid-cols-3">
        {#each images9 as item}
       {@render figure(item)}
       {/each}
</Gallery>