<script lang="ts">
  import { Gallery } from '$lib';

  const images7 = [
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
    }
  ];
</script>

<Gallery divClass="gap-2 grid-cols-2" items={images7} />
