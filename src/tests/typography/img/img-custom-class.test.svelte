<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Custom class image" classes={{ image: "custom-img-class" }} data-testid="img-custom-class" />

<Img
  src={TEST_IMAGE_SVG}
  alt="Custom classes image"
  classes={{
    image: "custom-image-class",
    figure: "custom-figure-class",
    caption: "custom-caption-class"
  }}
  caption="Caption with custom class"
  data-testid="img-custom-classes"
/>
