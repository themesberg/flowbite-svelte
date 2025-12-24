<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeOutline, WalletOutline, AdjustmentsVerticalOutline, UserCircleOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ inner: "grid-cols-4", active: "font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletOutline />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleOutline />
  </BottomNavItem>
</BottomNav>
