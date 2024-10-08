<script lang="ts">
  import { page } from "$app/stores";
  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from "$lib";
  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from "flowbite-svelte-icons";
  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";
  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";
  let activeUrl = $state("");

  $effect(() => {
    activeUrl = $page.url.pathname;
  });
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" innerClass="grid-cols-4">
    <BottomNavItem btnName="Home" href="/">
      <HomeSolid class={activeUrl === "/" ? svgActiveClass : svgClass} />
    </BottomNavItem>
    <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
      <WalletSolid class={activeUrl === "/docs/pages/quickstart" ? svgActiveClass : svgClass} />
    </BottomNavItem>
    <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
      <AdjustmentsVerticalSolid class={activeUrl === "/docs/components/bottom-navigation" ? svgActiveClass : svgClass} />
    </BottomNavItem>
    <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
      <UserCircleSolid class={activeUrl === "/docs/components/accordion" ? svgActiveClass : svgClass} />
    </BottomNavItem>
  </BottomNav>
</div>
