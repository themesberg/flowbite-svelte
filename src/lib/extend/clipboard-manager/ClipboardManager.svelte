<script lang="ts">
  import { Badge, Modal } from "$lib";
  import { formatDistanceToNow } from "date-fns";
  import { clipboardManager } from "./theme";
  import type { ClipboardItem, ClipboardManagerProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";

  let {
    items: initialItems = [],
    placeholder = "Type and save to clipboard",
    saveLabel = "Save",
    clearLabel = "Clear All",
    limit = 20,
    saveToStorage = true,
    toastDuration = 2000,
    filterSensitive = true,
    maxLength = 10000,
    enableSelectionMenu = false,
    selectionTarget = "body",
    showInput = true,
    class: className = "",
    classes,
    storageKey,
    children,
    emptyState,
    open = $bindable(), // If undefined, renders inline; if defined, renders as modal
    badgeProps = { color: "brand", class: "text-xs" },
    modalProps,
    detectSensitiveData
  }: ClipboardManagerProps = $props();

  const theme = $derived(getTheme("clipboardManager"));

  const isModal = $derived(open !== undefined);

  const styles = $derived(clipboardManager());

  let items = $state<ClipboardItem[]>([]);
  $effect(() => {
    if (initialItems.length > 0) {
      items = initialItems;
    }
  });
  let newText = $state("");
  let searchQuery = $state("");
  let toast = $state<{ message: string; type: "success" | "error" | "info" } | null>(null);

  // Selection menu state
  let selectionMenu = $state<{
    show: boolean;
    x: number;
    y: number;
    text: string;
  }>({ show: false, x: 0, y: 0, text: "" });

  const STORAGE_KEY = $derived(storageKey ?? "flowbite-clipboard-manager");

  // Save to localStorage whenever items change (but skip the initial load)
  let isFirstLoad = true;

  $effect(() => {
    if (saveToStorage && typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (initialItems.length === 0) {
            items = parsed;
          } else if (isFirstLoad) {
            // First load: use initial items and save them
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
          }
        } catch (e) {
          console.error("Failed to parse clipboard data:", e);
        }
      } else if (initialItems.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      }

      isFirstLoad = false;
    }
  });
  $effect(() => {
    if (saveToStorage && typeof window !== "undefined") {
      if (isFirstLoad) {
        isFirstLoad = false;
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  });

  // --- Selection Menu Logic ---
  $effect(() => {
    if (!enableSelectionMenu || typeof window === "undefined") return;

    const targetElements = document.querySelectorAll(selectionTarget);
    const elements = targetElements.length > 0 ? Array.from(targetElements) : [document.body];

    const handleMouseUp = () => {
      setTimeout(() => {
        const selection = window.getSelection();
        const selectedText = selection?.toString().trim();

        if (selectedText && selectedText.length > 0) {
          const range = selection!.getRangeAt(0);
          const rect = range.getBoundingClientRect();

          selectionMenu = {
            show: true,
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
            text: selectedText
          };
        } else {
          selectionMenu = { show: false, x: 0, y: 0, text: "" };
        }
      }, 10);
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Close menu if clicking outside
      if (selectionMenu.show && !(e.target as HTMLElement).closest(".selection-menu")) {
        selectionMenu = { show: false, x: 0, y: 0, text: "" };
      }
    };

    elements.forEach((el) => el.addEventListener("mouseup", handleMouseUp));
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      elements.forEach((el) => el.removeEventListener("mouseup", handleMouseUp));
      document.removeEventListener("mousedown", handleMouseDown);
    };
  });

  // --- Sensitive data detection ---
  const defaultContainsSensitiveData = (text: string): boolean => {
    if (!filterSensitive) return false;

    const ccPattern = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{12,}$/;
    const apiKeyPattern = /\b[A-Za-z0-9_-]{32,}\b/;
    const credentialPattern = /(password|passwd|pwd|token|secret|api[_-]?key)[\s:=]/i;

    return ccPattern.test(text) || passwordPattern.test(text) || apiKeyPattern.test(text) || credentialPattern.test(text);
  };

  // Use user-provided function if available, otherwise fallback
  const containsSensitiveData = (text: string) => {
    if (typeof detectSensitiveData === "function") {
      return detectSensitiveData(text);
    }
    return defaultContainsSensitiveData(text);
  };

  // --- Helpers ---
  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    toast = { message, type };
    setTimeout(() => (toast = null), toastDuration);
  };

  const sortItems = (itemsList: ClipboardItem[]): ClipboardItem[] => {
    const pinned = itemsList.filter((i) => i.pinned).sort((a, b) => b.timestamp - a.timestamp);
    const unpinned = itemsList.filter((i) => !i.pinned).sort((a, b) => b.timestamp - a.timestamp);
    return [...pinned, ...unpinned];
  };

  const filteredItems = $derived(searchQuery.trim() ? items.filter((i) => i.text.toLowerCase().includes(searchQuery.toLowerCase())) : items);

  // --- Save from selection menu ---
  const saveSelection = async () => {
    const text = selectionMenu.text;
    if (!text) return;

    if (text.length > maxLength) {
      showToast(`Text too long (max ${maxLength} characters)`, "error");
      selectionMenu = { show: false, x: 0, y: 0, text: "" };
      return;
    }

    if (containsSensitiveData(text)) {
      showToast("Sensitive data detected. Not saved for security.", "error");
      selectionMenu = { show: false, x: 0, y: 0, text: "" };
      return;
    }

    const duplicate = items.find((i) => i.text === text);
    if (duplicate) {
      showToast("Already saved", "info");
      selectionMenu = { show: false, x: 0, y: 0, text: "" };
      return;
    }

    const item: ClipboardItem = {
      id: Date.now(),
      text,
      timestamp: Date.now()
    };

    items = sortItems([item, ...items]).slice(0, limit);
    showToast("Saved to clipboard manager");
    selectionMenu = { show: false, x: 0, y: 0, text: "" };
  };

  // --- Clipboard actions ---
  const addToClipboard = async () => {
    const trimmed = newText.trim();
    if (!trimmed) return;

    if (trimmed.length > maxLength) {
      showToast(`Text too long (max ${maxLength} characters)`, "error");
      return;
    }

    if (containsSensitiveData(trimmed)) {
      showToast("Sensitive data detected. Not saved for security.", "error");
      newText = "";
      return;
    }

    const duplicate = items.find((i) => i.text === trimmed);
    if (duplicate) {
      showToast("This text is already in your clipboard", "info");
      newText = "";
      return;
    }

    const item: ClipboardItem = {
      id: Date.now(),
      text: trimmed,
      timestamp: Date.now()
    };

    items = sortItems([item, ...items]).slice(0, limit);
    newText = "";

    try {
      await navigator.clipboard.writeText(item.text);
      showToast("Saved and copied to clipboard");
    } catch (e) {
      console.error("Clipboard write failed:", e);
      showToast("Saved but clipboard access denied", "error");
    }
  };

  const copyItem = async (item: ClipboardItem) => {
    try {
      await navigator.clipboard.writeText(item.text);
      showToast("Copied to clipboard");
    } catch (e) {
      showToast("Clipboard access denied", "error");
    }
  };

  const deleteItem = (id: number) => {
    items = items.filter((i) => i.id !== id);
    showToast("Deleted");
  };

  const togglePin = (id: number) => {
    items = items.map((i) => (i.id === id ? { ...i, pinned: !i.pinned } : i));
    items = sortItems(items);
  };

  const clearAll = () => {
    if (confirm("Clear all clipboard items?")) {
      items = [];
      showToast("All items cleared");
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addToClipboard();
    }
  };
</script>

{#snippet inputArea()}
  <div data-part="input-section" class={styles.inputSection({ class: clsx(theme?.inputSection, classes?.inputSection) })}>
    <div data-part="input-wrapper" class={styles.inputWrapper({ class: clsx(theme?.inputWrapper, classes?.inputWrapper) })}>
      <input data-part="input" type="text" bind:value={newText} onkeydown={handleKeydown} {placeholder} class={styles.input({ class: clsx(theme?.input, classes?.input) })} />
      <button data-part="add-button" onclick={addToClipboard} disabled={!newText.trim()} class={styles.addButton({ class: clsx(theme?.addButton, classes?.addButton) })}>
        {saveLabel}
      </button>
    </div>

    <!-- Search and Clear -->
    {#if items.length > 0}
      <div data-part="search-wrapper" class={styles.searchWrapper({ class: clsx(theme?.searchWrapper, classes?.searchWrapper) })}>
        <div data-part="search-container" class={styles.searchContainer({ class: clsx(theme?.searchContainer, classes?.searchContainer) })}>
          <input data-part="search-input" type="text" bind:value={searchQuery} placeholder="Search clipboard..." class={styles.searchInput({ class: clsx(theme?.searchInput, classes?.searchInput) })} />
          <svg data-part="search-icon" class={styles.searchIcon({ class: clsx(theme?.searchIcon, classes?.searchIcon) })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <button data-part="clear-button" onclick={clearAll} class={styles.clearButton({ class: clsx(theme?.clearButton, classes?.clearButton) })}>
          {clearLabel}
        </button>
      </div>
    {/if}
  </div>
{/snippet}

{#snippet searchClear()}
  <!-- Show only search and clear when input is hidden -->
  <div data-part="input-section" class={styles.inputSection({ class: clsx(theme?.inputSection, classes?.inputSection) })}>
    <div data-part="search-wrapper" class={styles.searchWrapper({ class: clsx(theme?.searchWrapper, classes?.searchWrapper) })}>
      <div data-part="search-container" class={styles.searchContainer({ class: clsx(theme?.searchContainer, classes?.searchContainer) })}>
        <input data-part="search-input" type="text" bind:value={searchQuery} placeholder="Search clipboard..." class={styles.searchInput({ class: clsx(theme?.searchInput, classes?.searchInput) })} />
        <svg data-part="search-icon" class={styles.searchIcon({ class: clsx(theme?.searchIcon, classes?.searchIcon) })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>
      <button data-part="clear-button" onclick={clearAll} class={styles.clearButton({ class: clsx(theme?.clearButton, classes?.clearButton) })}>
        {clearLabel}
      </button>
    </div>
  </div>
{/snippet}

{#snippet itemList()}
  <!-- Items list -->
  <div data-part="items-list" class={styles.itemsList({ class: clsx(theme?.itemsList, classes?.itemsList) })}>
    {#if filteredItems.length === 0}
      {#if emptyState}
        {@render emptyState()}
      {:else}
        <div data-part="empty-state" class={styles.emptyState({ class: clsx(theme?.emptyState, classes?.emptyState) })}>
          {#if items.length === 0}
            <svg data-part="empty-icon" class={styles.emptyIcon({ class: clsx(theme?.emptyIcon, classes?.emptyIcon) })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p data-part="empty-message" class={styles.emptyMessage({ class: clsx(theme?.emptyMessage, classes?.emptyMessage) })}>No clipboard items yet.</p>
            <p data-part="empty-description" class={styles.emptyDescription({ class: clsx(theme?.emptyDescription, classes?.emptyDescription) })}>
              {#if enableSelectionMenu}
                Select any text and click "Save" to add it here
              {:else}
                Start typing above to save text
              {/if}
            </p>
          {:else}
            <p data-part="empty-message" class={styles.emptyMessage({ class: clsx(theme?.emptyMessage, classes?.emptyMessage) })}>No items match "{searchQuery}"</p>
          {/if}
        </div>
      {/if}
    {:else}
      {#each filteredItems as item (item.id)}
        {#if children}
          {@render children({ item, copyItem, deleteItem, togglePin })}
        {:else}
          <div data-part="item" class={styles.item({ class: clsx(theme?.item, classes?.item) })}>
            <!-- Content -->
            <div data-part="item-content" class={styles.itemContent({ class: clsx(theme?.itemContent, classes?.itemContent) })}>
              <div data-part="item-header" class={styles.itemHeader({ class: clsx(theme?.itemHeader, classes?.itemHeader) })}>
                {#if item.pinned}
                  <Badge {...badgeProps}>Pinned</Badge>
                {/if}
                <span data-part="item-timestamp" class={styles.itemTimestamp({ class: clsx(theme?.itemTimestamp, classes?.itemTimestamp) })}>
                  {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                </span>
              </div>
              <p data-part="item-text" class={styles.itemText({ class: clsx(theme?.itemText, classes?.itemText) })}>
                {item.text}
              </p>
            </div>

            <!-- Actions -->
            <div data-part="item-actions" class={styles.itemActions({ class: clsx(theme?.itemActions, classes?.itemActions) })}>
              <!-- Copy -->
              <button data-part="action-button" onclick={() => copyItem(item)} class={styles.actionButton({ class: clsx(theme?.actionButton, classes?.actionButton) })} aria-label="Copy">
                <svg
                  data-part="action-icon"
                  class={styles.actionIcon({ class: clsx(theme?.actionIcon, classes?.actionIcon) })}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="8" height="8" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 12V4a2 2 0 0 1 2-2h8" />
                </svg>
              </button>

              <!-- Pin / Unpin -->
              <button
                data-part="pin-button"
                onclick={() => togglePin(item.id)}
                class={styles.pinButton({ pinned: item.pinned, class: clsx(theme?.pinButton, classes?.pinButton) })}
                aria-label={item.pinned ? "Unpin" : "Pin"}
              >
                <svg
                  class={styles.actionIcon({ class: clsx(theme?.actionIcon, classes?.actionIcon) })}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17v5" />
                  <path d="M8 13h8l1-5h-10z" />
                  <path d="M10 3h4v5h-4z" />
                </svg>
              </button>

              <!-- Delete -->
              <button data-part="delete-button" onclick={() => deleteItem(item.id)} class={styles.deleteButton({ class: clsx(theme?.deleteButton, classes?.deleteButton) })} aria-label="Delete">
                <svg
                  data-part="action-icon"
                  class={styles.actionIcon({ class: clsx(theme?.actionIcon, classes?.actionIcon) })}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z" />
                  <path d="M10 11v6M14 11v6" />
                </svg>
              </button>
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
{/snippet}

{#if isModal}
  <Modal title="Clipboard Manager" bind:open {...modalProps}>
    <div data-scope="clipboard-manager" class={styles.base({ class: clsx(theme?.base, className) })}>
      {#if showInput}
        {@render inputArea()}
      {:else if items.length > 0}
        {@render searchClear()}
      {/if}

      {@render itemList()}
    </div>
  </Modal>
{:else}
  <div data-scope="clipboard-manager" class={styles.base({ class: clsx(theme?.base, className) })}>
    {#if showInput}
      {@render inputArea()}
    {:else if items.length > 0}
      {@render searchClear()}
    {/if}

    {@render itemList()}
  </div>
{/if}

<!-- Selection Bubble Menu -->
{#if selectionMenu.show}
  <div data-part="selection-menu" class={styles.selectionMenu({ class: clsx(theme?.selectionMenu, classes?.selectionMenu) })} style="left: {selectionMenu.x}px; top: {selectionMenu.y}px;">
    <div data-part="selection-bubble" class={styles.selectionBubble({ class: clsx(theme?.selectionBubble, classes?.selectionBubble) })}>
      <span data-part="selection-text" class={styles.selectionText({ class: clsx(theme?.selectionText, classes?.selectionText) })}>
        {selectionMenu.text.slice(0, 50)}{selectionMenu.text.length > 50 ? "..." : ""}
      </span>
      <button data-part="selection-button" onclick={saveSelection} class={styles.selectionButton()}>Save to Clipboard</button>
    </div>
    <!-- Arrow -->
    <div data-part="selection-arrow" class={styles.selectionArrow({ class: clsx(theme?.selectionArrow, classes?.selectionArrow) })}></div>
  </div>
{/if}

<!-- Toast notification -->
{#if toast}
  <div data-part="toast-container" class={styles.toastContainer({ class: clsx(theme?.toastContainer, classes?.toastContainer) })}>
    <div data-part="toast" class={styles.toast({ type: toast.type, class: clsx(theme?.toast, classes?.toast) })}>
      <svg data-part="toast-icon" class={styles.toastIcon({ class: clsx(theme?.toastIcon, classes?.toastIcon) })} fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        {#if toast.type === "success"}
          <path d="M5 13l4 4L19 7" />
        {:else if toast.type === "error"}
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
        {:else}
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        {/if}
      </svg>
      <span data-part="toast-text" class={styles.toastText({ class: clsx(theme?.toastText, classes?.toastText) })}>{toast.message}</span>
    </div>
  </div>
{/if}
