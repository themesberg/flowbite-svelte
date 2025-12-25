<script lang="ts">
  import { Gallery } from "$lib";

  const items = [
    { src: "/test-image-1.jpg", alt: "Image 1" },
    { src: "/test-image-2.jpg", alt: "Image 2" },
    { src: "/test-image-3.jpg", alt: "Image 3" }
  ];
</script>

<Gallery {items}>
  {#snippet figure(item)}
    <div>
      <img src={item.src} alt={item.alt} />
      <div data-testid="custom-caption">Caption {item.alt.split(' ')[1]}</div>
    </div>
  {/snippet}
</Gallery>
