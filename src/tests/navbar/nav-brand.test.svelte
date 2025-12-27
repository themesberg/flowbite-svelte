<script lang="ts">
  import { Navbar, NavBrand } from "$lib";

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  <NavBrand href="/" data-testid="nav-brand" onclick={preventDefault}>
    <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" alt="Logo" class="h-8" />
    <span class="text-xl">Brand Name</span>
  </NavBrand>
</Navbar>
