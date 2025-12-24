<script lang="ts">
  import { BottomNav, BottomNavItem } from "$lib";
  import { HomeOutline, WalletOutline, PlusOutline, SearchOutline, UserCircleOutline } from "flowbite-svelte-icons";
</script>

<BottomNav navType="application">
  <BottomNavItem btnName="Home">
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet">
    <WalletOutline />
  </BottomNavItem>
  <BottomNavItem btnName="New" appBtnPosition="middle">
    <PlusOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Search">
    <SearchOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <UserCircleOutline />
  </BottomNavItem>
</BottomNav>
