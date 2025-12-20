<script lang="ts">
  import { BottomNav, BottomNavItem, BottomNavHeader, BottomNavHeaderItem } from "$lib";
  import { HomeOutline, WalletOutline, UserCircleOutline } from "flowbite-svelte-icons";

  let activeHeader = $state(0);
</script>

<BottomNav>
  {#snippet header()}
    <BottomNavHeader>
      <BottomNavHeaderItem itemName="Recent" active={activeHeader === 0} onclick={() => (activeHeader = 0)} />
      <BottomNavHeaderItem itemName="Popular" active={activeHeader === 1} onclick={() => (activeHeader = 1)} />
      <BottomNavHeaderItem itemName="Featured" active={activeHeader === 2} onclick={() => (activeHeader = 2)} />
    </BottomNavHeader>
  {/snippet}

  <BottomNavItem btnName="Home">
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleOutline />
  </BottomNavItem>
</BottomNav>
