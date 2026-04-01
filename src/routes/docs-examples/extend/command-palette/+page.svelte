<script lang="ts">
  import { CommandPalette, Toggle } from "$lib";
  import { goto } from "$app/navigation";

  let paletteOpen = $state(false);
  let vimMode = $state(false);

  const handleVimToggle = () => {
    vimMode = !vimMode;
  };

  const commands = [
    {
      id: "new-file",
      label: "New File",
      description: "Create a new file",
      icon: "📄",
      keywords: ["create", "add"],
      onselect: () => console.log("New file created")
    },
    {
      id: "open-file",
      label: "Open File",
      description: "Open an existing file",
      icon: "📂",
      keywords: ["browse", "load"],
      onselect: () => console.log("Opening file picker")
    },
    {
      id: "save",
      label: "Save",
      description: "Save current file",
      icon: "💾",
      keywords: ["write", "store"],
      onselect: () => console.log("File saved")
    },
    {
      id: "settings",
      label: "Settings",
      description: "Open application settings",
      icon: "⚙️",
      keywords: ["preferences", "config", "options"],
      onselect: () => goto("/")
    },
    {
      id: "search",
      label: "Search in Files",
      description: "Search across all files",
      icon: "🔍",
      keywords: ["find", "grep", "locate"],
      onselect: () => console.log("Opening search")
    },
    {
      id: "theme-light",
      label: "Switch to Light Theme",
      description: "Change appearance to light mode",
      icon: "☀️",
      keywords: ["theme", "appearance", "bright"],
      onselect: () => document.documentElement.classList.remove("dark")
    },
    {
      id: "theme-dark",
      label: "Switch to Dark Theme",
      description: "Change appearance to dark mode",
      icon: "🌙",
      keywords: ["theme", "appearance", "night"],
      onselect: () => document.documentElement.classList.add("dark")
    },
    {
      id: "help",
      label: "Help & Documentation",
      description: "View help documentation",
      icon: "❓",
      keywords: ["docs", "support", "guide"],
      onselect: () => goto("/docs/pages/introduction")
    },
    {
      id: "shortcuts",
      label: "Keyboard Shortcuts",
      description: "View all keyboard shortcuts",
      icon: "⌨️",
      keywords: ["keys", "hotkeys", "commands"],
      onselect: () => console.log("Showing shortcuts")
    },
    {
      id: "profile",
      label: "View Profile",
      description: "Go to your profile page",
      icon: "👤",
      keywords: ["user", "account", "me"],
      onselect: () => (window.location.href = "/profile")
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "View your notifications",
      icon: "🔔",
      keywords: ["alerts", "updates", "messages"],
      onselect: () => console.log("Opening notifications")
    },
    {
      id: "export",
      label: "Export Data",
      description: "Export your data as JSON",
      icon: "📤",
      keywords: ["download", "backup", "save"],
      onselect: () => console.log("Exporting data")
    },
    {
      id: "import",
      label: "Import Data",
      description: "Import data from file",
      icon: "📥",
      keywords: ["upload", "restore", "load"],
      onselect: () => console.log("Opening import dialog")
    },
    {
      id: "print",
      label: "Print",
      description: "Print current page",
      icon: "🖨️",
      keywords: ["printer", "paper"],
      onselect: () => window.print()
    },
    {
      id: "logout",
      label: "Log Out",
      description: "Sign out of your account",
      icon: "🚪",
      keywords: ["signout", "exit", "leave"],
      onselect: () => console.log("Logging out")
    }
  ];
</script>

<div class="bg-neutral-secondary-soft min-h-screen p-8">
  <div class="mx-auto max-w-4xl">
    <h1 class="text-heading mb-4 text-4xl font-bold">Command Palette Demo</h1>
    <p class="text-body mb-8">
      Press <kbd class="bg-neutral-tertiary rounded px-2 py-1 font-mono text-sm">⌘P (default ⌘K)</kbd>
      or
      <kbd class="bg-neutral-tertiary rounded px-2 py-1 font-mono text-sm">Ctrl+P (default Ctrl+K)</kbd>
      to open the command palette, or click the button below.
    </p>

    <button onclick={() => (paletteOpen = true)} class="bg-brand hover:bg-brand-strong mb-4 rounded-lg px-6 py-3 font-medium text-white transition-colors">Open Command Palette</button>
    <Toggle checked={vimMode} onclick={handleVimToggle}>Vim mode is {vimMode ? "on" : "off"}</Toggle>
    <div class="mt-12 space-y-6">
      <h2 class="text-heading text-2xl font-bold">Available Commands</h2>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each commands as command (command.id)}
          <div class="border-default bg-neutral-primary-soft rounded-lg border p-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">{command.icon}</span>
              <div>
                <h3 class="text-heading font-semibold">
                  {command.label}
                </h3>
                <p class="text-body text-sm">
                  {command.description}
                </p>
                {#if command.keywords}
                  <div class="mt-2 flex flex-wrap gap-1">
                    {#each command.keywords as keyword (keyword)}
                      <span class="bg-neutral-tertiary text-body rounded px-2 py-0.5 text-xs">
                        {keyword}
                      </span>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<CommandPalette bind:open={paletteOpen} items={commands} shortcutKey="p" vim={vimMode} />
