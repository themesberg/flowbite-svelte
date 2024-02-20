<div class='relative'>
  <Skeleton divclass="py-4" />
  <ImagePlaceholder divclass="pb-20" />

  <BottomNav position="absolute" div2class="grid-cols-4">
    <BottomNavItem btnName="Home" href="/">
      <HomeSolid />
    </BottomNavItem>
    <BottomNavItem btnName="Quickstart" href="/pages/quickstart" exact={false}>
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