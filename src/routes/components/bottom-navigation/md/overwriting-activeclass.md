<div class='relative'>
  <Skeleton divclass="py-4" />
  <ImagePlaceholder divclass="pb-20" />

  <BottomNav position="absolute" div2class="grid-cols-4" activeClass="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">
    <BottomNavItem btnName="Home" href="/">
      <HomeSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Quickstart" href="/pages/quickstart">
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