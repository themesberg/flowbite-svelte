<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(true);

  const items: CommandItem[] = [
    {
      id: "nav-1",
      label: "First Item",
      description: "First item description",
      onselect: () => {}
    },
    {
      id: "nav-2",
      label: "Second Item",
      description: "Second item description",
      onselect: () => {}
    },
    {
      id: "nav-3",
      label: "Third Item",
      description: "Third item description",
      onselect: () => {}
    },
    {
      id: "nav-4",
      label: "Fourth Item",
      description: "Fourth item description",
      onselect: () => {}
    }
  ];
</script>

<CommandPalette bind:open {items} data-testid="keyboard-navigation-palette" />
