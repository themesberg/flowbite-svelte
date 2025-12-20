<script lang="ts">
  import { BottomNav, BottomNavItem } from "$lib";
  import { HomeOutline, WalletOutline, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<BottomNav activeUrl="/">
  <BottomNavItem btnName="Home" href="/">
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet" href="/wallet">
    <WalletOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Profile" href="/profile">
    <UserCircleOutline />
  </BottomNavItem>
</BottomNav>
