<script lang="ts">
  import Drawer from "$lib/drawer/Drawer.svelte";

  let open = $state(false);
</script>

<button type="button" onclick={() => (open = true)}>Open Drawer</button>
<Drawer bind:open>
  <p>Basic drawer content</p>
</Drawer>
