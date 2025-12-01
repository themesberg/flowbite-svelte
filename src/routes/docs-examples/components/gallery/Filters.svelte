<script lang="ts">
  import { Gallery, Button } from "flowbite-svelte";

  const images = [
    { alt: "erbology", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg", category: "Bags" },
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg", category: "Shoes" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg", category: "Bags" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg", category: "Electronics" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg", category: "Electronics" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg", category: "Shoes" },
    { alt: "cream", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg", category: "Bags" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg", category: "Bags" },
    { alt: "lamp", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg", category: "Electronics" },
    { alt: "toiletbag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg", category: "Bags" },
    { alt: "playstation", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg", category: "Gaming" },
    { alt: "bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg", category: "Bags" }
  ];

  let selectedCategory = $state("All");

  const filteredImages = $derived(
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory)
  );
</script>

<div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-2 py-2 md:py-4">
  <Button outline={selectedCategory !== "All"} onclick={() => (selectedCategory = "All")}>All categories</Button>
  <Button color="alternative" outline={selectedCategory !== "Shoes"} onclick={() => (selectedCategory = "Shoes")}>Shoes</Button>
  <Button color="alternative" outline={selectedCategory !== "Bags"} onclick={() => (selectedCategory = "Bags")}>Bags</Button>
  <Button color="alternative" outline={selectedCategory !== "Electronics"} onclick={() => (selectedCategory = "Electronics")}>Electronics</Button>
  <Button color="alternative" outline={selectedCategory !== "Gaming"} onclick={() => (selectedCategory = "Gaming")}>Gaming</Button>
</div>

<Gallery items={filteredImages} class="grid-cols-2 gap-4 md:grid-cols-3" />
