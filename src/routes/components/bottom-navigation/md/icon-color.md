<div class='relative'>
  <Skeleton divclass="py-4" />
  <ImagePlaceholder divclass="pb-20" />

  <BottomNav position="absolute" div2class="grid-cols-4">
    <BottomNavItem btnName="Home" href="/">
      <HomeSolid class={activeUrl === '/' ? svgActiveClass : svgClass} />
    </BottomNavItem>
    <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">
      <WalletSolid class={activeUrl === '/docs/pages/quickstart' ? svgActiveClass : svgClass} />
    </BottomNavItem>
    <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">
      <AdjustmentsVerticalOutline class={activeUrl === '/docs/components/bottom-navigation' ? svgActiveClass : svgClass} />
    </BottomNavItem>
    <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
      <UserCircleSolid class={activeUrl === '/docs/components/accordion' ? svgActiveClass : svgClass} />
    </BottomNavItem>
  </BottomNav>
</div>