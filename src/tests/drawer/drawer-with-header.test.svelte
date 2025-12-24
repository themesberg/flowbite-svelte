<script lang="ts">
  import Drawer from "$lib/drawer/Drawer.svelte";
  import Drawerhead from "$lib/drawer/Drawerhead.svelte";

  let open = $state(true);
</script>

<Drawer bind:open>
  <Drawerhead onclick={() => (open = false)}>
    <h5 class="text-base font-semibold text-gray-500 uppercase">Drawer with header</h5>
  </Drawerhead>
  <p>Drawer content with custom header</p>
</Drawer>
