<script lang="ts">
  import { Gallery } from "$lib";

    const items = [
      { src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=1", alt: "Image 1" },
      { src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=2", alt: "Image 2" }
    ];
</script>

<div data-testid="gallery-container">
  <Gallery {items} class="custom-gallery-class" classes={{ image: "custom-image-class" }} />
</div>
