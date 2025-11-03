<script lang="ts">
  import { onMount } from 'svelte';
  import type { CommandPaletteProps, CommandItem } from '$lib/types';
  import { commandPalette } from './theme';
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  const styles = commandPalette();

  let {
    open = $bindable(false),
    items = [],
    placeholder = 'Type a command or search keywords ...',
    emptyMessage = 'No results found.',
    shortcutKey = 'k',
    vim = false,
    onclose,
    classes
  }: CommandPaletteProps = $props();

  const theme = getTheme("commandPalette");

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

      if (elementRect.bottom > listRect.bottom) {
        selectedElement.scrollIntoView({ block: 'end', behavior: 'auto' });
      } else if (elementRect.top < listRect.top) {
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
    class={styles.backdrop({ class: clsx(theme?.backdrop, classes?.backdrop) })}
    onclick={handleBackdropClick}
    onkeydown={handleBackdropKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="command-palette-label"
    tabindex="-1"
  >
    <div class={styles.panel({ class: clsx(theme?.panel, classes?.panel)})} bind:this={containerElement}>
      <!-- Search Input -->
      <div class={styles.inputWrapper({ class: clsx(theme?.inputWrapper, classes?.inputWrapper)})}>
        <svg class={styles.icon({ class: clsx(theme?.icon, classes?.icon)})} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          class={styles.input({ class: clsx(theme?.input, classes?.input)})}
          placeholder={placeholder}
          role="combobox"
          aria-expanded="true"
          aria-controls="command-palette-options"
          aria-activedescendant={filteredItems[selectedIndex]?.id}
        />
      </div>

      <!-- Results -->
      {#if filteredItems.length > 0}
        <ul id="command-palette-options" class={styles.list({ class: clsx(theme?.list, classes?.list)})} role="listbox">
          {#each filteredItems as item, index (item.id)}
            <li
              data-index={index}
              id={item.id}
              role="option"
              aria-selected={index === selectedIndex}
              class={styles.item({ selected: index === selectedIndex, class: clsx(theme?.item, classes?.item)})}
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
                  <div class="font-medium text-sm truncate">{item.label}</div>
                  {#if item.description}
                    <div class={styles.itemDescription()}>
                      {item.description}
                    </div>
                  {/if}
                </div>
              </div>
            </li>
          {/each}
        </ul>
      {:else if search}
        <div class={styles.empty({ class: clsx(theme?.empty, classes?.empty)})}>
          <p>{emptyMessage}</p>
        </div>
      {/if}

      <!-- Footer -->
      <div class={styles.footer({ class: clsx(theme?.footer, classes?.footer)})}>
        <div class="flex items-center gap-4">
          <kbd class={styles.kbd({ class: clsx(theme?.kbd, classes?.kbd)})}>
            {#if vim}
              <span>j/k</span>
            {:else}
              <span>↑↓</span>
            {/if}
            <span>Navigate</span>
          </kbd>
          <kbd class={styles.kbd({ class: clsx(theme?.kbd, classes?.kbd)})}>
            <span>↵</span>
            <span>Select</span>
          </kbd>
        </div>
        <kbd class={styles.kbd({ class: clsx(theme?.kbd, classes?.kbd)})}>
          <span>ESC</span>
          <span>Close</span>
        </kbd>
      </div>
    </div>
  </div>
{/if}
