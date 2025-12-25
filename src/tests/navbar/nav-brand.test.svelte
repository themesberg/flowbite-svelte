<script lang="ts">
  import { Navbar, NavBrand } from "$lib";
</script>

<Navbar>
  {#snippet children()}
    <NavBrand href="/" data-testid="nav-brand">
      <img src="/logo.svg" alt="Logo" class="h-8" />
      <span class="text-xl">Brand Name</span>
    </NavBrand>
  {/snippet}
</Navbar>
