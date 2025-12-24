<script lang="ts">
  import Drawer from "$lib/drawer/Drawer.svelte";
  import DrawerHandle from "$lib/drawer/DrawerHandle.svelte";

  let open = $state(true);
</script>

<Drawer bind:open offset="60px">
  <DrawerHandle aria-label="Toggle drawer" />
  <p>Drawer with handle and offset</p>
</Drawer>
