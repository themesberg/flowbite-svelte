<script lang="ts" module>
  export const testState = $state({ closeCount: 0 });
</script>

<script lang="ts">
  import Drawer from "$lib/drawer/Drawer.svelte";
  import Drawerhead from "$lib/drawer/Drawerhead.svelte";

  let open = $state(true);

  function handleClose() {
    testState.closeCount++;
    open = false;
  }
</script>

<Drawer bind:open>
  <Drawerhead onclick={handleClose}>
    <h5>Drawer Title</h5>
  </Drawerhead>
  <p>Content</p>
</Drawer>
