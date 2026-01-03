<script lang="ts">
  import SidebarBrand from "$lib/sidebar/SidebarBrand.svelte";
  import { TEST_IMAGE_SVG } from "../fixtures/test-images"

  const site = {
    name: "Flowbite",
    href: "/",
    img: TEST_IMAGE_SVG
  };

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<SidebarBrand {site} onclick={preventDefault} />
