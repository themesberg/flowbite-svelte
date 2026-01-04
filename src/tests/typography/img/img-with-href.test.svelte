<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Linked image" href="https://example.com" data-testid="img-with-href" />

<Img src={TEST_IMAGE_SVG} alt="Linked image with caption" href="https://example.com" caption="Clickable image with caption" data-testid="img-href-caption" />
