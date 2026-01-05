<script lang="ts">
  import { CommandPalette } from "$lib";

  let open = $state(true);

  export function close() {
    open = false;
  }
</script>

<CommandPalette bind:open />
