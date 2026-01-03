<script lang="ts">
  import { Navbar, NavBrand } from "$lib";
  import { TEST_IMAGE_SVG } from "../fixtures/test-images"

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  <NavBrand href="https://flowbite-svelte.com/" data-testid="nav-brand" onclick={preventDefault}>
    <img src={TEST_IMAGE_SVG} alt="Logo" class="h-8" />
    <span class="text-xl">Brand Name</span>
  </NavBrand>
</Navbar>
