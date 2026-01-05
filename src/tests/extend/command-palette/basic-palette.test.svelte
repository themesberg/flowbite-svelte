<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(false);

  const items: CommandItem[] = [
    {
      id: "item-1",
      label: "Open Settings",
      description: "Configure your preferences",
      icon: "⚙️",
      keywords: ["config", "preferences", "options"],
      onselect: () => console.log("Settings opened")
    },
    {
      id: "item-2",
      label: "Create New File",
      description: "Start a new document",
      icon: "📄",
      keywords: ["new", "document", "file"],
      onselect: () => console.log("New file created")
    },
    {
      id: "item-3",
      label: "Open Recent",
      description: "View recently opened files",
      icon: "🕐",
      keywords: ["history", "recent", "last"],
      onselect: () => console.log("Recent files opened")
    }
  ];
</script>

<CommandPalette bind:open {items} data-testid="basic-palette" />
