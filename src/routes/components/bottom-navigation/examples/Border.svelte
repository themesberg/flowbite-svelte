<script lang="ts">
  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from '$lib';
  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="border" innerClass="grid-cols-4">
    <BottomNavItem btnName="Home">
      <HomeSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Wallet">
      <WalletSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Settings">
      <AdjustmentsVerticalSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Profile">
      <UserCircleSolid />
    </BottomNavItem>
  </BottomNav>
</div>
