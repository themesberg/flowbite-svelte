<script lang="ts">
  import { onMount } from 'svelte';
  import type { CommandPaletteProps, CommandItem } from '$lib/types';

  let {
    open = $bindable(false),
    items = [],
    placeholder = 'Type a command or search keywords ...',
    emptyMessage = 'No results found.',
    shortcutKey = 'k',
    vim = false,
    onclose
  }: CommandPaletteProps = $props();

  let search = $state('');
  let selectedIndex = $state(0);
  let inputElement = $state<HTMLInputElement>();
  let containerElement = $state<HTMLDivElement>();

  const filteredItems = $derived(
    search.trim() === ''
      ? items
      : items.filter((item) => {
          const searchLower = search.toLowerCase();
          const labelMatch = item.label.toLowerCase().includes(searchLower);
          const descMatch = item.description?.toLowerCase().includes(searchLower);
          const keywordMatch = item.keywords?.some((kw) =>
            kw.toLowerCase().includes(searchLower)
          );
          return labelMatch || descMatch || keywordMatch;
        })
  );

  $effect(() => {
    if (open && inputElement) {
      inputElement.focus();
      selectedIndex = 0;
    }
  });

  $effect(() => {
    if (filteredItems.length > 0 && selectedIndex >= filteredItems.length) {
      selectedIndex = filteredItems.length - 1;
    }
  });

  function handleKeydown(e: KeyboardEvent) {
    if (!open) return;

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeCommandPalette();
        break;
      case 'ArrowDown':
      case 'j':
        if (e.key === 'j' && !vim) break;
        if (e.key === 'j' && e.ctrlKey) break;
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, filteredItems.length - 1);
        scrollToSelected();
        break;
      case 'ArrowUp':
      case 'k':
        if (e.key === 'k' && !vim) break;
        if (e.key === 'k' && e.ctrlKey) break;
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        scrollToSelected();
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          selectItem(filteredItems[selectedIndex]);
        }
        break;
    }
  }

  function scrollToSelected() {
    if (!containerElement) return;
    const listElement = containerElement.querySelector('ul');
    const selectedElement = containerElement.querySelector(
      `#${CSS.escape(filteredItems[selectedIndex]?.id)}`
    ) as HTMLElement;
    
    if (selectedElement && listElement) {
      const listRect = listElement.getBoundingClientRect();
      const elementRect = selectedElement.getBoundingClientRect();
      
      // Check if element is below the visible area
      if (elementRect.bottom > listRect.bottom) {
        selectedElement.scrollIntoView({ block: 'end', behavior: 'auto' });
      }
      // Check if element is above the visible area
      else if (elementRect.top < listRect.top) {
        selectedElement.scrollIntoView({ block: 'start', behavior: 'auto' });
      }
    }
  }

  function selectItem(item: CommandItem) {
    item.onselect();
    closeCommandPalette();
  }

  function closeCommandPalette() {
    open = false;
    search = '';
    selectedIndex = 0;
    onclose?.();
  }

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      closeCommandPalette();
    }
  }

  function handleBackdropKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && e.target === e.currentTarget) {
      closeCommandPalette();
    }
  }

  onMount(() => {
    const handleGlobalKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
        e.preventDefault();
        open = !open;
      }
    };

    window.addEventListener('keydown', handleGlobalKeydown);
    return () => window.removeEventListener('keydown', handleGlobalKeydown);
  });
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-start justify-center bg-gray-900/50 dark:bg-gray-900/80 p-4 sm:p-6 md:p-20"
    onclick={handleBackdropClick}
    onkeydown={handleBackdropKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="command-palette-label"
    tabindex="-1"
  >
    <div
      class="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform transition-all"
      bind:this={containerElement}
    >
      <!-- Search Input -->
      <div class="relative">
        <svg
          class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          bind:this={inputElement}
          bind:value={search}
          type="text"
          class="w-full border-0 bg-transparent pl-11 pr-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:outline-none text-sm"
          placeholder={placeholder}
          role="combobox"
          aria-expanded="true"
          aria-controls="command-palette-options"
          aria-activedescendant={filteredItems[selectedIndex]?.id}
        />
      </div>

      <!-- Results -->
      {#if filteredItems.length > 0}
        <ul
          id="command-palette-options"
          class="max-h-80 scroll-py-2 overflow-y-auto border-t border-gray-200 dark:border-gray-700"
          role="listbox"
        >
          {#each filteredItems as item, index (item.id)}
            <li
              data-index={index}
              id={item.id}
              role="option"
              aria-selected={index === selectedIndex}
              class="cursor-pointer select-none px-4 py-2 {index === selectedIndex
                ? 'bg-primary-600 text-white'
                : 'text-gray-900 dark:text-gray-100'}"
              onclick={() => selectItem(item)}
              onkeydown={(e) => e.key === 'Enter' && selectItem(item)}
              onmouseenter={() => (selectedIndex = index)}
              tabindex="-1"
            >
              <div class="flex items-center gap-3">
                {#if item.icon}
                  <span class="text-lg">{item.icon}</span>
                {/if}
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-sm truncate">
                    {item.label}
                  </div>
                  {#if item.description}
                    <div
                      class="text-xs truncate {index === selectedIndex
                        ? 'text-primary-100'
                        : 'text-gray-500 dark:text-gray-400'}"
                    >
                      {item.description}
                    </div>
                  {/if}
                </div>
              </div>
            </li>
          {/each}
        </ul>
      {:else if search}
        <div
          class="px-4 py-14 text-center border-t border-gray-200 dark:border-gray-700"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {emptyMessage}
          </p>
        </div>
      {/if}

      <!-- Footer -->
      <div
        class="flex flex-wrap items-center justify-between gap-2 bg-gray-50 dark:bg-gray-900/50 px-4 py-2.5 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center gap-4">
          <kbd
            class="inline-flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1 font-sans text-xs"
          >
            {#if vim}
              <span>j/k</span>
            {:else}
              <span>↑↓</span>
            {/if}
            <span>Navigate</span>
          </kbd>
          <kbd
            class="inline-flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1 font-sans text-xs"
          >
            <span>↵</span>
            <span>Select</span>
          </kbd>
        </div>
        <kbd
          class="inline-flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2 py-1 font-sans text-xs"
        >
          <span>ESC</span>
          <span>Close</span>
        </kbd>
      </div>
    </div>
  </div>
{/if}