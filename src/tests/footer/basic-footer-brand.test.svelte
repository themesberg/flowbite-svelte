<script lang="ts">
  import FooterBrand from "$lib/footer/FooterBrand.svelte";
  import { TEST_IMAGE_SVG } from "../fixtures/test-images"
</script>

<FooterBrand href="https://flowbite.com" src={TEST_IMAGE_SVG} alt="Flowbite Logo" name="Flowbite" data-testid="footer-brand" />
