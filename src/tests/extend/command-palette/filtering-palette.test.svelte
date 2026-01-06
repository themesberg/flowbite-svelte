<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(true);

  const items: CommandItem[] = [
    {
      id: "filter-1",
      label: "Open Settings",
      description: "Configure user preferences",
      icon: "⚙️",
      keywords: ["config", "configuration", "preferences"],
      onselect: () => {}
    },
    {
      id: "filter-2",
      label: "Create Document",
      description: "Start a new document",
      icon: "📄",
      keywords: ["new", "file", "document"],
      onselect: () => {}
    },
    {
      id: "filter-3",
      label: "Open Recent Files",
      description: "View recently opened files",
      icon: "🕐",
      keywords: ["history", "recent", "last"],
      onselect: () => {}
    },
    {
      id: "filter-4",
      label: "Help Center",
      description: "Get help and support",
      icon: "❓",
      keywords: ["help", "support", "documentation"],
      onselect: () => {}
    }
  ];
</script>

<CommandPalette bind:open {items} data-testid="filtering-palette" />
