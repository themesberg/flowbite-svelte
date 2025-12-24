<script lang="ts">
  import { BottomNav, BottomNavItem } from "$lib";
  import { HomeOutline, WalletOutline } from "flowbite-svelte-icons";
</script>

<BottomNav>
  <BottomNavItem btnName="Home" active={true}>
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Wallet" active={false}>
    <WalletOutline />
  </BottomNavItem>
</BottomNav>
