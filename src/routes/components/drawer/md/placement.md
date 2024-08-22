<Drawer placement="top" width="full" drawerStatus={drawerStatusFly} closeDrawer={closeDrawerFly} transition={fly} params={flyParams}>
  <Drawerhead onclick={closeFlyDrawer}>
    <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-4 w-4" />Drawer
    </h5>
  </Drawerhead>
  Content
</Drawer>