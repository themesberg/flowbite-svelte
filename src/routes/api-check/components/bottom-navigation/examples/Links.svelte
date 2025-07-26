<script>
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav {activeUrl} position="absolute" classes={{ inner: "grid-cols-4" }}>
  <BottomNavItem btnName="Home" href="/">
    <HomeSolid />
  </BottomNavItem>
  <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>