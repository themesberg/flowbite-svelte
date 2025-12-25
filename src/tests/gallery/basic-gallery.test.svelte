<script lang="ts">
  import { Gallery } from "$lib";

  const items = [
    { src: "/test-image-1.jpg", alt: "Image 1" },
    { src: "/test-image-2.jpg", alt: "Image 2" },
    { src: "/test-image-3.jpg", alt: "Image 3" }
  ];
</script>

<div data-testid="gallery-container">
  <Gallery {items} />
</div>
