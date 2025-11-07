<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";
  import Search from "$lib/forms/search/Search.svelte";
  import { getTheme } from "$lib/theme/themeUtils";
  import type { CommandItem, CommandPaletteProps } from "$lib/types";
  import clsx from "clsx";
  import { commandPalette } from "./theme";

  const styles = commandPalette();

  let {
    open = $bindable(false),
    items = [],
    placeholder = "Type a command or search keywords ...",
    emptyMessage = "No results found.",
    shortcutKey = "k",
    vim = false,
    "aria-labelledby": ariaLabelledby,
    class: className,
    classes,
    ...restProps
  }: CommandPaletteProps = $props();

  const theme = getTheme("commandPalette");

  let search = $state("");
  let selectedIndex = $state(0);
  let containerElement = $state<HTMLDialogElement>();
  let gid = $props.id();
  let ulId = "command-palette-options-" + gid;

  const filteredItems = $derived.by(() => {
    const searchLower = search.trim().toLowerCase();
    if (searchLower === "") return items;

    const check = (x?: string) => x?.toLowerCase().includes(searchLower);
    return items.filter((item) => check(item.label) || check(item.description) || item.keywords?.some(check));
  });

  $effect(() => {
    if (filteredItems.length > 0 && selectedIndex >= filteredItems.length) {
      selectedIndex = Math.max(filteredItems.length - 1, 0);
    }
  });

  function handleKeydown(e: KeyboardEvent) {
    if (!open) return;

    if (handleGlobalKeydown(e)) return;

    switch (e.key) {
      case "j":
        if (!vim || e.ctrlKey) break;
      // falls through
      case "ArrowDown":
        e.preventDefault();
        selectedIndex = Math.max(Math.min(selectedIndex + 1, filteredItems.length - 1), 0);
        scrollToSelected();
        break;
      case "k":
        if (!vim || e.ctrlKey) break;
      // falls through
      case "ArrowUp":
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
    }
  }

  function scrollToSelected() {
    if (!containerElement) return;

    const listElement = containerElement.querySelector("ul");
    if (!listElement) return;

    const selectedElement = listElement.querySelector(`#${CSS.escape(filteredItems[selectedIndex]?.id)}`) as HTMLElement;
    if (!selectedElement) return;

    const listRect = listElement.getBoundingClientRect();
    const elementRect = selectedElement.getBoundingClientRect();

    if (elementRect.bottom > listRect.bottom) {
      selectedElement.scrollIntoView({ block: "end", behavior: "auto" });
    } else if (elementRect.top < listRect.top) {
      selectedElement.scrollIntoView({ block: "start", behavior: "auto" });
    }
  }

  function selectItem(item: CommandItem) {
    item.onselect();
    open = false;
    search = "";
    selectedIndex = 0;
  }

  const handleGlobalKeydown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === shortcutKey) {
      e.preventDefault();
      open = !open;
      selectedIndex = 0;
      return true;
    }
  };

  function init(dlg: HTMLDialogElement) {
    containerElement = dlg;
  }
</script>

<svelte:window onkeydown={open ? handleKeydown : handleGlobalKeydown} />

<Dialog bind:open dismissable={false} {@attach init} aria-modal="true" aria-labelledby={ariaLabelledby} tabindex={-1} class={styles.base({ class: clsx(theme?.base, className) })} {...restProps}>
  <!-- Search Input -->
  <Search
    size="md"
    {placeholder}
    bind:value={search}
    classes={{ input: styles.search({ class: clsx(theme?.search, classes?.search) }) }}
    autofocus
    role="combobox"
    aria-expanded="true"
    aria-controls={ulId}
    aria-activedescendant={filteredItems[selectedIndex]?.id}
  />

  <!-- Results -->
  {#if filteredItems.length > 0}
    <ul id={ulId} class={styles.list({ class: clsx(theme?.list, classes?.list) })} role="listbox">
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
                <div class={styles.itemDescription({ class: clsx(theme?.itemDescription, classes?.itemDescription) })}>
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

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[CommandPaletteProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2189)
## Props
@prop open = $bindable(false)
@prop items = []
@prop placeholder = "Type a command or search keywords ..."
@prop emptyMessage = "No results found."
@prop shortcutKey = "k"
@prop vim = false
@prop "aria-labelledby": ariaLabelledby
@prop class: className
@prop classes
@prop ...restProps
-->
