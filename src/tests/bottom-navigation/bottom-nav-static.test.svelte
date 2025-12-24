<script lang="ts">
  import { BottomNav, BottomNavItem } from "$lib";
  import { HomeOutline, WalletOutline, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<BottomNav position="static">
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
