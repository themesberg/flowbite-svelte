<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Extra small image" size="xs" data-testid="img-xs" />

<Img src={TEST_IMAGE_SVG} alt="Small image" size="sm" data-testid="img-sm" />

<Img src={TEST_IMAGE_SVG} alt="Medium image" size="md" data-testid="img-md" />

<Img src={TEST_IMAGE_SVG} alt="Large image" size="lg" data-testid="img-lg" />

<Img src={TEST_IMAGE_SVG} alt="Extra large image" size="xl" data-testid="img-xl" />

<Img src={TEST_IMAGE_SVG} alt="2XL image" size="2xl" data-testid="img-2xl" />

<Img src={TEST_IMAGE_SVG} alt="Full image" size="full" data-testid="img-full" />
