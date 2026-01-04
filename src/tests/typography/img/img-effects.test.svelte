<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Grayscale effect" effect="grayscale" data-testid="img-grayscale" />

<Img src={TEST_IMAGE_SVG} alt="Blur effect" effect="blur" data-testid="img-blur" />

<Img src={TEST_IMAGE_SVG} alt="Invert effect" effect="invert" data-testid="img-invert" />

<Img src={TEST_IMAGE_SVG} alt="Sepia effect" effect="sepia" data-testid="img-sepia" />

<Img src={TEST_IMAGE_SVG} alt="Saturate effect" effect="saturate" data-testid="img-saturate" />

<Img src={TEST_IMAGE_SVG} alt="Hue rotate effect" effect="hue-rotate" data-testid="img-hue-rotate" />
