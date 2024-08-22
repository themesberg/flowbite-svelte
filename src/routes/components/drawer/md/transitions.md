<script lang="ts">
  ...
  import { blur, fly, slide, scale, fade } from 'svelte/transition';
  const params = { duration: 500, easing: linear }
</script>

<div class="text-center">
  <Button onclick={drawerTransition.toggle}>Drawer</Button>
</div>
<Drawer drawerStatus={drawerStatusTransition} closeDrawer={closeDrawerTransition} transition={blur} {params}>
  <Drawerhead onclick={closeDrawerTransition}>
    <h5 id="drawer-label" class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400">
      <InfoCircleSolid class="me-2.5 h-4 w-4" />Drawer
    </h5>
  </Drawerhead>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Content</p>
</Drawer>