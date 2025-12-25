<script lang="ts">
  import { Gallery } from "$lib";

    const items = [
      { src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=1", alt: "Image 1" },
      { src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=2", alt: "Image 2" },
      { src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=3", alt: "Image 3" },
    ];
</script>

<Gallery {items}>
  {#snippet figure(item)}
    <div>
      <img src={item.src} alt={item.alt} />
      <div data-testid="custom-caption">Caption {item.alt?.split(" ")[1] ?? ""}</div>
    </div>
  {/snippet}
</Gallery>
