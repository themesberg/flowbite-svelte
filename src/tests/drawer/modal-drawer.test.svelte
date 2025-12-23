<script lang="ts">
  import Drawer from "$lib/drawer/Drawer.svelte";

  let open = $state(true);
</script>

<Drawer bind:open modal placement="top">
  <p>Top modal drawer</p>
</Drawer>
