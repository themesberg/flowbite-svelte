<script>
  import { Drawer, Drawerhead, Button, uiHelpers } from '$lib';
  const drawerA = uiHelpers();
  let drawerStatusA = $state(false);
  const closeDrawerA = drawerA.close;
  $effect(() => {
    drawerStatusA = drawerA.isOpen;
  });
</script>
