<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Custom props image" id="custom-img-id" data-testid="img-custom-props" data-custom="custom-value" title="Custom image title" loading="lazy" width={300} height={200} />
