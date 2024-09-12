<script lang="ts">
  import { Gallery } from "$lib"
  
  const image5 = {
    alt: 'erbology',
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'
  };
  const images6 = [
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

<Gallery divClass="gap-4">
  <img src={image5.src} alt={image5.alt} class="h-auto max-w-full rounded-lg" />
  <!-- Safari needs gap -->
  <Gallery divClass="grid-cols-5 gap-4" items={images6} />
</Gallery>