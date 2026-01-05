<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(true);

  const items: CommandItem[] = [
    {
      id: "vim-1",
      label: "First Command",
      description: "First command description",
      onselect: () => {}
    },
    {
      id: "vim-2",
      label: "Second Command",
      description: "Second command description",
      onselect: () => {}
    },
    {
      id: "vim-3",
      label: "Third Command",
      description: "Third command description",
      onselect: () => {}
    }
  ];
</script>

<CommandPalette bind:open {items} vim={true} data-testid="vim-mode-palette" />
