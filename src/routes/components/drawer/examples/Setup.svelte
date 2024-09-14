<script>
  import { Drawer, Drawerhead, Button, uiHelpers } from '$lib';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
  const drawer = uiHelpers();
  let drawerStatus = $state(false);
  const closeDrawer = drawer.close;
  $effect(() => {
    drawerStatus = drawer.isOpen;
  });
</script>
