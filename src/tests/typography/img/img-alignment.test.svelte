<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Left aligned image" align="left" data-testid="img-left" />

<Img src={TEST_IMAGE_SVG} alt="Center aligned image" align="center" data-testid="img-center" />

<Img src={TEST_IMAGE_SVG} alt="Right aligned image" align="right" data-testid="img-right" />
