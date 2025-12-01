<script lang="ts">
  import { Gallery } from "flowbite-svelte";
  import type { ImgType } from "flowbite-svelte";

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

   let main = $state<ImgType>({
    alt: image1.alt,
    src: image1.src
  });
</script>

<Gallery class="gap-4">
  <!-- MAIN IMAGE -->
  <img
    src={main.src}
    alt={main.alt}
    class="h-auto max-w-full rounded-lg"
  />

  <!-- THUMBNAILS -->
  <Gallery
    class="grid-cols-5"
    items={images2}
    {figure} />

{#snippet figure(item)}
  <button
    type="button"
    class="rounded-lg p-0 border-0 bg-transparent cursor-pointer hover:opacity-80"
    onclick={() => (main = item)}
  >
    <img src={item.src} alt={item.alt} class="rounded-lg" />
  </button>
{/snippet}

</Gallery>
