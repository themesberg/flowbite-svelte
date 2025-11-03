<script lang="ts">
  import {CommandPalette} from '$lib';
  import { goto, resolve } from '$app/navigation';

  let paletteOpen = $state(false);
  
  const commands = [
    {
      id: 'new-file',
      label: 'New File',
      description: 'Create a new file',
      icon: '📄',
      keywords: ['create', 'add'],
      onselect: () => console.log('New file created')
    },
    {
      id: 'open-file',
      label: 'Open File',
      description: 'Open an existing file',
      icon: '📂',
      keywords: ['browse', 'load'],
      onselect: () => console.log('Opening file picker')
    },
    {
      id: 'save',
      label: 'Save',
      description: 'Save current file',
      icon: '💾',
      keywords: ['write', 'store'],
      onselect: () => console.log('File saved')
    },
    {
      id: 'settings',
      label: 'Settings',
      description: 'Open application settings',
      icon: '⚙️',
      keywords: ['preferences', 'config', 'options'],
      onselect: () => {
        void goto(resolve('/'));
      }
    },
    {
      id: 'search',
      label: 'Search in Files',
      description: 'Search across all files',
      icon: '🔍',
      keywords: ['find', 'grep', 'locate'],
      onselect: () => console.log('Opening search')
    },
    {
      id: 'theme-light',
      label: 'Switch to Light Theme',
      description: 'Change appearance to light mode',
      icon: '☀️',
      keywords: ['theme', 'appearance', 'bright'],
      onselect: () => document.documentElement.classList.remove('dark')
    },
    {
      id: 'theme-dark',
      label: 'Switch to Dark Theme',
      description: 'Change appearance to dark mode',
      icon: '🌙',
      keywords: ['theme', 'appearance', 'night'],
      onselect: () => document.documentElement.classList.add('dark')
    },
    {
      id: 'help',
      label: 'Help & Documentation',
      description: 'View help documentation',
      icon: '❓',
      keywords: ['docs', 'support', 'guide'],
      onselect: () => {
        void goto(resolve('/docs/pages/introduction'));
      }
    },
    {
      id: 'shortcuts',
      label: 'Keyboard Shortcuts',
      description: 'View all keyboard shortcuts',
      icon: '⌨️',
      keywords: ['keys', 'hotkeys', 'commands'],
      onselect: () => console.log('Showing shortcuts')
    },
    {
      id: 'profile',
      label: 'View Profile',
      description: 'Go to your profile page',
      icon: '👤',
      keywords: ['user', 'account', 'me'],
      onselect: () => (window.location.href = '/profile')
    },
    {
      id: 'notifications',
      label: 'Notifications',
      description: 'View your notifications',
      icon: '🔔',
      keywords: ['alerts', 'updates', 'messages'],
      onselect: () => console.log('Opening notifications')
    },
    {
      id: 'export',
      label: 'Export Data',
      description: 'Export your data as JSON',
      icon: '📤',
      keywords: ['download', 'backup', 'save'],
      onselect: () => console.log('Exporting data')
    },
    {
      id: 'import',
      label: 'Import Data',
      description: 'Import data from file',
      icon: '📥',
      keywords: ['upload', 'restore', 'load'],
      onselect: () => console.log('Opening import dialog')
    },
    {
      id: 'print',
      label: 'Print',
      description: 'Print current page',
      icon: '🖨️',
      keywords: ['printer', 'paper'],
      onselect: () => window.print()
    },
    {
      id: 'logout',
      label: 'Log Out',
      description: 'Sign out of your account',
      icon: '🚪',
      keywords: ['signout', 'exit', 'leave'],
      onselect: () => console.log('Logging out')
    }
  ];
</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Command Palette Demo
    </h1>
    
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      Press <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm font-mono">⌘p (default ⌘k)</kbd> or 
      <kbd class="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm font-mono">Ctrl+p (default Ctrl+k)</kbd> to open 
      the command palette, or click the button below.
    </p>

    <button
      onclick={() => (paletteOpen = true)}
      class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
    >
      Open Command Palette
    </button>

    <div class="mt-12 space-y-6">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        Available Commands
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each commands as command (command.id)}
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div class="flex items-start gap-3">
              <span class="text-2xl">{command.icon}</span>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  {command.label}
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {command.description}
                </p>
                {#if command.keywords}
                  <div class="flex flex-wrap gap-1 mt-2">
                    {#each command.keywords as keyword (keyword)}
                      <span class="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
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

<CommandPalette bind:open={paletteOpen} items={commands} shortcutKey="p" vim={true}/>