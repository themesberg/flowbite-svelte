<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(false);

  const items: CommandItem[] = [
    {
      id: "custom-1",
      label: "Command One",
      description: "First command",
      onselect: () => {}
    },
    {
      id: "custom-2",
      label: "Command Two",
      description: "Second command",
      onselect: () => {}
    }
  ];
</script>

<CommandPalette bind:open {items} shortcutKey="p" data-testid="custom-shortcut-palette" />
