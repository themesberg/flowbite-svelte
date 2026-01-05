<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(true);

  const items: CommandItem[] = [];
</script>

<CommandPalette bind:open {items} emptyMessage="No commands found. Try a different search." data-testid="empty-state-palette" />
