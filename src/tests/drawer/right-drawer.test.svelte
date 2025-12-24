<script lang="ts">
  import Drawer from "$lib/drawer/Drawer.svelte";

  let open = $state(true);
</script>

<Drawer bind:open placement="right">
  <p>Right drawer content</p>
</Drawer>
