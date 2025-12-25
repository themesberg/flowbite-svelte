<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";
</script>

<Navbar closeOnClickOutside={false}>
  {#snippet children({ hidden, toggle })}
    <NavBrand href="/">Flowbite</NavBrand>
    <NavHamburger onclick={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
