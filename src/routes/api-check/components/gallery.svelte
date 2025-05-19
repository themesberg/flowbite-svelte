<script>
  import { Gallery, Button } from "$lib";

  // Default gallery images
  const images = [
    { alt: "erbology", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { alt: "cream", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
    { alt: "lamp", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" },
    { alt: "toiletbag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
    { alt: "playstation", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
    { alt: "bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" }
  ];

  // Masonry grid images
  const images1 = [
    { alt: "erbology", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" }
  ];
  const images2 = [
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" }
  ];
  const images3 = [
    { alt: "cream", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
    { alt: "lamp", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" }
  ];
  const images4 = [
    { alt: "toiletbag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
    { alt: "playstation", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
    { alt: "bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" }
  ];

  // Featured image
  const image1 = {
    alt: "erbology",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  };
  const featuredImages = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" }
  ];

  // Quad gallery images
  const quadImages = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" }
  ];

  // Custom image rendering
  const customImages = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" }
  ];
</script>

<h1 class="my-4 text-3xl">Gallery</h1>
<h2 class="my-4 text-2xl">Default gallery</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3" />
</div>

<h2 class="my-4 text-2xl">Masonry grid</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Gallery class="grid-cols-2 gap-4 md:grid-cols-4">
    <Gallery items={images1} />
    <Gallery items={images2} />
    <Gallery items={images3} />
    <Gallery items={images4} />
  </Gallery>
</div>

<h2 class="my-4 text-2xl">Featured image</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Gallery class="gap-4">
    <img src={image1.src} alt={image1.alt} class="h-auto max-w-full rounded-lg" />
    <Gallery class="grid-cols-5" items={featuredImages} />
  </Gallery>
</div>

<h2 class="my-4 text-2xl">Quad gallery</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Gallery class="grid-cols-2 gap-2" items={quadImages} />
</div>

<h2 class="my-4 text-2xl">Gallery with tag filters</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8">
    <Button pill size="xl" outline>All categories</Button>
    <Button pill size="xl" color="alternative">Shoes</Button>
    <Button pill size="xl" color="alternative">Bags</Button>
    <Button pill size="xl" color="alternative">Electronics</Button>
    <Button pill size="xl" color="alternative">Gaming</Button>
  </div>
  <Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3" />
</div>

<h2 class="my-4 text-2xl">Heterogeneous gallery</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Gallery class="grid-cols-2 gap-4">
    <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="max-w- h-auto rounded-lg" />
    <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold">Sale</div>
    <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold">Sale</div>
    <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="max-w- h-auto rounded-lg" />
  </Gallery>
</div>

<h2 class="my-4 text-2xl">Custom image rendering</h2>
<div class="my-4 rounded border border-gray-200 dark:border-gray-600 p-4">
  <Gallery class="grid-cols-3 gap-4" items={customImages}>
    {#snippet figure(item)}
      <div class="p-1 ring-4 ring-red-600 dark:ring-red-400">
        <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
      </div>
    {/snippet}
  </Gallery>
</div>
