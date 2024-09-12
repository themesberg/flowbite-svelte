<script lang="ts">
  import { Gallery } from '$lib';
  const images = [
    {
      alt: 'erbology',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
    },
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
    },
    {
      alt: 'cream',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
    },
    {
      alt: 'small bag',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
    },
    {
      alt: 'lamp',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
    },
    {
      alt: 'toiletbag',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'
    },
    {
      alt: 'playstation',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
    },
    {
      alt: 'bag',
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'
    }
  ];
</script>

<Gallery items={images} divClass="gap-4 grid-cols-2 md:grid-cols-3" />
