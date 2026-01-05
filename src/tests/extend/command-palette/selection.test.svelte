<script lang="ts" module>
  export const testState = $state({
    selectedItem: null as string | null,
    selectCount: 0
  });
</script>

<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(true);

  const items: CommandItem[] = [
    {
      id: "item-1",
      label: "First Option",
      description: "Select first option",
      onselect: () => {
        testState.selectedItem = "item-1";
        testState.selectCount++;
      }
    },
    {
      id: "item-2",
      label: "Second Option",
      description: "Select second option",
      onselect: () => {
        testState.selectedItem = "item-2";
        testState.selectCount++;
      }
    },
    {
      id: "item-3",
      label: "Third Option",
      description: "Select third option",
      onselect: () => {
        testState.selectedItem = "item-3";
        testState.selectCount++;
      }
    }
  ];
</script>

<CommandPalette bind:open {items} data-testid="selection-palette" />
