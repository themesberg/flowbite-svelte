<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img src={TEST_IMAGE_SVG} alt="Test image" data-testid="basic-img" />
