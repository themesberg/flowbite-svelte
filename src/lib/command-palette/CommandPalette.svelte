<script lang="ts">
  import { onMount } from "svelte";
  import type { CommandPaletteProps, CommandItem } from "$lib/types";
  import { commandPalette } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import Search from "$lib/forms/search/Search.svelte";
  import { ssrModuleExportsKey } from "vite/module-runner";

  const styles = commandPalette();

  let {
    open = $bindable(false),
    items = [],
    placeholder = "Type a command or search keywords ...",
    emptyMessage = "No results found.",
    shortcutKey = "k",
    vim = false,
    "aria-labelledby": ariaLabeledBy,
    onclose,
    class: className,
    classes
  }: CommandPaletteProps = $props();

  const theme = getTheme("commandPalette");

  let search = $state("");
  let selectedIndex = $state(0);
  let inputElement = $state<HTMLInputElement>();
  let containerElement = $state<HTMLDialogElement>();

  const filteredItems = $derived.by(() => {
    const searchLower = search.trim().toLowerCase();
    if (searchLower === "") return items;

    return items.filter((item) => {
      return item.label.toLowerCase().includes(searchLower) || item.description?.toLowerCase().includes(searchLower) || item.keywords?.some((kw) => kw.toLowerCase().includes(searchLower));
    });
  });

  $effect(() => {
    if (filteredItems.length > 0 && selectedIndex >= filteredItems.length) {
      selectedIndex = filteredItems.length - 1;
    }
  });

  function handleKeydown(e: KeyboardEvent) {
    if (!open) return;
    switch (e.key) {
      case "ArrowDown":
      case "j":
        if (e.key === "j" && !vim) break;
        if (e.key === "j" && e.ctrlKey) break;
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, filteredItems.length - 1);
        scrollToSelected();
        break;
      case "ArrowUp":
      case "k":
        if (e.key === "k" && !vim) break;
        if (e.key === "k" && e.ctrlKey) break;
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        scrollToSelected();
        break;
      case "Enter":
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          selectItem(filteredItems[selectedIndex]);
        }
        break;
      case shortcutKey:
        handleGlobalKeydown(e);
        break;
    }
  }

  function scrollToSelected() {
    if (!containerElement) return;
    const listElement = containerElement.querySelector("ul");
    const selectedElement = containerElement.querySelector(`#${CSS.escape(filteredItems[selectedIndex]?.id)}`) as HTMLElement;

    if (selectedElement && listElement) {
      const listRect = listElement.getBoundingClientRect();
      const elementRect = selectedElement.getBoundingClientRect();

      if (elementRect.bottom > listRect.bottom) {
        selectedElement.scrollIntoView({ block: "end", behavior: "auto" });
      } else if (elementRect.top < listRect.top) {
        selectedElement.scrollIntoView({ block: "start", behavior: "auto" });
      }
    }
  }

  function selectItem(item: CommandItem) {
    item.onselect();
    open = false;
    search = "";
    selectedIndex = 0;
    onclose?.();
  }

  const handleGlobalKeydown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
      e.preventDefault();
      open = !open;
      selectedIndex = 0;
    }
  };

  function init(dlg: HTMLDialogElement) {
    containerElement = dlg;
  }
</script>

<svelte:window onkeydown={open ? handleKeydown : handleGlobalKeydown} />

<Dialog bind:open dismissable={false} {@attach init} aria-modal="true" aria-labelledby={ariaLabeledBy} tabindex={-1} class={styles.base({ class: clsx(theme?.base, className) })}>
  <!-- Search Input -->
  <Search
    size="md"
    {placeholder}
    bind:value={search}
    bind:elementRef={inputElement}
    classes={{ input: styles.search() }}
    autofocus
    role="combobox"
    aria-expanded="true"
    aria-controls="command-palette-options"
    aria-activedescendant={filteredItems[selectedIndex]?.id}
  />

  <!-- Results -->
  {#if filteredItems.length > 0}
    <ul id="command-palette-options" class={styles.list({ class: clsx(theme?.list, classes?.list) })} role="listbox">
      {#each filteredItems as item, index (item.id)}
        <li
          data-index={index}
          id={item.id}
          role="option"
          aria-selected={index === selectedIndex}
          class={styles.item({ selected: index === selectedIndex, class: clsx(theme?.item, classes?.item) })}
          onclick={() => selectItem(item)}
          onkeydown={(e) => e.key === "Enter" && selectItem(item)}
          onmouseenter={() => (selectedIndex = index)}
          tabindex="-1"
        >
          <div class="flex items-center gap-3">
            {#if item.icon}
              <span class="text-lg">{item.icon}</span>
            {/if}
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-medium">{item.label}</div>
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
    <div class={styles.empty({ class: clsx(theme?.empty, classes?.empty) })}>
      <p>{emptyMessage}</p>
    </div>
  {/if}

  <!-- Footer -->
  <div class={styles.footer({ class: clsx(theme?.footer, classes?.footer) })}>
    <div class="flex items-center gap-4">
      <kbd class={styles.kbd({ class: clsx(theme?.kbd, classes?.kbd) })}>
        {#if vim}
          <span>j/k</span>
        {:else}
          <span>↑↓</span>
        {/if}
        <span>Navigate</span>
      </kbd>
      <kbd class={styles.kbd({ class: clsx(theme?.kbd, classes?.kbd) })}>
        <span>↵</span>
        <span>Select</span>
      </kbd>
    </div>
    <kbd class={styles.kbd({ class: clsx(theme?.kbd, classes?.kbd) })}>
      <span>ESC</span>
      <span>Close</span>
    </kbd>
  </div>
</Dialog>
