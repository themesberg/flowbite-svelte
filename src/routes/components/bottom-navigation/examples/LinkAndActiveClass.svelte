<script lang="ts">
  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from '$lib';
  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" innerClass="grid-cols-4">
    <BottomNavItem btnName="Home" href="/">
      <HomeSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Quickstart" href="/pages/about" target="_blank">
      <WalletSolid />
    </BottomNavItem>
    <BottomNavItem btnName="BottomNav" href="/components/bottom-navigation">
      <AdjustmentsVerticalSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Accordion" href="/components/accordion">
      <UserCircleSolid />
    </BottomNavItem>
  </BottomNav>
</div>