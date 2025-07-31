<script>
  import { Gallery } from "flowbite-svelte";
  const image1 = {
    alt: "erbology",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  };
  const images2 = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" }
  ];
</script>

<Gallery class="gap-4">
  <img src={image1.src} alt={image1.alt} class="h-auto max-w-full rounded-lg" />
  <Gallery class="grid-cols-5" items={images2} />
</Gallery>
