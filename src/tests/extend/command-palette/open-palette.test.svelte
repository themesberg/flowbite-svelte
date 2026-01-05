<script lang="ts">
  import { CommandPalette } from "$lib";
  import type { CommandItem } from "$lib/types";

  let open = $state(true);

  // Export functions for test access
  export function isOpen() {
    return open;
  }

  export function setOpen(value: boolean) {
    open = value;
  }

  export function close() {
    open = false;
  }

  const items: CommandItem[] = [
    {
      id: "cmd-1",
      label: "Dashboard",
      description: "Go to dashboard",
      icon: "📊",
      onselect: () => {}
    },
    {
      id: "cmd-2",
      label: "Profile",
      description: "View your profile",
      icon: "👤",
      onselect: () => {}
    },
    {
      id: "cmd-3",
      label: "Settings",
      description: "Manage settings",
      icon: "⚙️",
      onselect: () => {}
    }
  ];
</script>

<CommandPalette bind:open {items} data-testid="open-palette" />

<div data-testid="command-palette-footer" data-part="footer">
  <kbd data-testid="kbd-navigate">↑↓ Navigate</kbd>
  <kbd data-testid="kbd-select">↵ Select</kbd>
  <kbd data-testid="kbd-close">ESC Close</kbd>
</div>
