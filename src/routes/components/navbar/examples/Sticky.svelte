<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, Skeleton, ImagePlaceholder, TextPlaceholder, uiHelpers } from '$lib';
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  $effect(() => {
    navStatus = nav.isOpen;
  });
</script>

<div class="relative">
  <Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md" navClass="absolute w-full z-20 top-0 start-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
    {#snippet brand()}
      <NavBrand siteName="Svelte 5">
        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
      </NavBrand>
    {/snippet}

    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/components/navbar">Navbar</NavLi>
      <NavLi href="/components/footer">Footer</NavLi>
    </NavUl>
  </Navbar>
  <div style="height:300px;" class="overflow-scroll px-8 py-24">
    <Skeleton class="mb-8 mt-16" />
    <ImagePlaceholder class="my-8" />
    <TextPlaceholder class="my-8" />
  </div>
</div>