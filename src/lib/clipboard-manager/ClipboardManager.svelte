<script lang="ts">
  import { Button, Badge } from "$lib";
  import { formatDistanceToNow } from "date-fns";
  import { clipboardManager, type ClipboardVariants } from "./theme";

  export interface ClipboardItem {
    id: number;
    text: string;
    pinned?: boolean;
    timestamp: number;
  }

  export interface ClipboardManagerProps {
    items?: ClipboardItem[];
    placeholder?: string;
    saveLabel?: string;
    clearLabel?: string;
    limit?: number;
    persist?: boolean;
    class?: string;
    toastDuration?: number;
    filterSensitive?: boolean;
    maxLength?: number;
  }

  type Props = ClipboardManagerProps & ClipboardVariants & { children?: any; empty?: any };

  let {
    items: initialItems = [],
    placeholder = "Type and save to clipboard",
    saveLabel = "Save",
    clearLabel = "Clear All",
    limit = 20,
    persist = true,
    toastDuration = 2000,
    filterSensitive = true,
    maxLength = 10000,
    class: className = "",
    children,
    empty,
  }: Props = $props();

  const styles = $derived(clipboardManager({ class: className }));

  let items = $state<ClipboardItem[]>(initialItems);
  let newText = $state("");
  let searchQuery = $state("");
  let toast = $state<{ message: string; type: "success" | "error" | "info" } | null>(null);

  // --- Persistence ---
  const STORAGE_KEY = "flowbite-clipboard-manager";
  
  $effect(() => {
    if (persist && typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          items = JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse clipboard data:", e);
        }
      }
    }
  });

  $effect(() => {
    if (persist && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  });

  // --- Sensitive data detection ---
  const containsSensitiveData = (text: string): boolean => {
    if (!filterSensitive) return false;
    
    // Credit card pattern (basic)
    const ccPattern = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/;
    // Password-like patterns (long strings with mixed case + numbers)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{12,}$/;
    // API key patterns
    const apiKeyPattern = /\b[A-Za-z0-9_-]{32,}\b/;
    // Email + password combo
    const credentialPattern = /(password|passwd|pwd|token|secret|api[_-]?key)[\s:=]/i;
    
    return ccPattern.test(text) || 
           passwordPattern.test(text) || 
           apiKeyPattern.test(text) ||
           credentialPattern.test(text);
  };

  // --- Helpers ---
  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    toast = { message, type };
    setTimeout(() => (toast = null), toastDuration);
  };

  // Sort items: pinned first (by timestamp desc), then unpinned (by timestamp desc)
  const sortItems = (itemsList: ClipboardItem[]): ClipboardItem[] => {
    const pinned = itemsList.filter(i => i.pinned).sort((a, b) => b.timestamp - a.timestamp);
    const unpinned = itemsList.filter(i => !i.pinned).sort((a, b) => b.timestamp - a.timestamp);
    return [...pinned, ...unpinned];
  };

  // --- Filtered items ---
  const filteredItems = $derived(
    searchQuery.trim()
      ? items.filter(i => i.text.toLowerCase().includes(searchQuery.toLowerCase()))
      : items
  );

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

    // Check for duplicates
    const duplicate = items.find(i => i.text === trimmed);
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
    
    items = sortItems([item, ...items].slice(0, limit));
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
    items = items.map((i) => 
      i.id === id ? { ...i, pinned: !i.pinned } : i
    );
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

<div class={styles.base()}>
  <!-- Input area -->
  <div class={styles.inputSection()}>
    <div class={styles.inputWrapper()}>
      <input
        type="text"
        bind:value={newText}
        onkeydown={handleKeydown}
        placeholder={placeholder}
        class={styles.input()}
      />
      <Button onclick={addToClipboard} disabled={!newText.trim()} class="whitespace-nowrap">
        {saveLabel}
      </Button>
    </div>

    <!-- Search and Clear -->
    {#if items.length > 0}
      <div class={styles.searchWrapper()}>
        <div class={styles.searchContainer()}>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search clipboard..."
            class={styles.searchInput()}
          />
          <svg 
            class={styles.searchIcon()}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <Button color="red" onclick={clearAll}>
          {clearLabel}
        </Button>
      </div>
    {/if}
  </div>

  <!-- Items list -->
  <div class={styles.itemsList()}>
    {#if filteredItems.length === 0}
      {#if empty}
        {@render empty()}
      {:else}
        <div class={styles.emptyState()}>
          {#if items.length === 0}
            <svg class={styles.emptyIcon()} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <p class={styles.emptyText()}>No clipboard items yet.</p>
            <p class={styles.emptySubtext()}>Start typing above to save text</p>
          {:else}
            <p class={styles.emptyText()}>No items match "{searchQuery}"</p>
          {/if}
        </div>
      {/if}
    {:else}
      {#each filteredItems as item (item.id)}
        {#if children}
          {@render children({ item, copyItem, deleteItem, togglePin })}
        {:else}
          <div class={styles.item()}>
            <!-- Content -->
            <div class={styles.itemContent()}>
              <div class={styles.itemHeader()}>
                {#if item.pinned}
                  <Badge color="blue" class="text-xs">Pinned</Badge>
                {/if}
                <span class={styles.itemTimestamp()}>
                  {formatDistanceToNow(item.timestamp, { addSuffix: true })}
                </span>
              </div>
              <p class={styles.itemText()}>
                {item.text}
              </p>
            </div>

            <!-- Actions -->
            <div class={styles.itemActions()}>
              <!-- Copy -->
              <button
                onclick={() => copyItem(item)}
                class={styles.actionButton()}
                aria-label="Copy"
              >
                <svg class={styles.actionIcon()} fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="8" height="8" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 12V4a2 2 0 0 1 2-2h8" />
                </svg>
              </button>

              <!-- Pin / Unpin -->
              <button
                onclick={() => togglePin(item.id)}
                class={styles.pinButton({ pinned: item.pinned })}
                aria-label={item.pinned ? "Unpin" : "Pin"}
              >
                <svg class={styles.actionIcon()} fill="none" stroke="currentColor" stroke-width="2">
                  {#if item.pinned}
                    <path d="M2 2l20 20M12 17v5M8 13h8l1-5h-6L10 3H8" />
                  {:else}
                    <path d="M12 17v5M8 13h8l1-5h-6L10 3H8" />
                  {/if}
                </svg>
              </button>

              <!-- Delete -->
              <button
                onclick={() => deleteItem(item.id)}
                class={styles.deleteButton()}
                aria-label="Delete"
              >
                <svg class={styles.actionIcon()} fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z"/>
                  <path d="M10 11v6M14 11v6"/>
                </svg>
              </button>
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>

  <!-- Toast notification -->
  {#if toast}
    <div class={styles.toastContainer()}>
      <div class={styles.toast({ type: toast.type })}>
        <svg class={styles.toastIcon()} fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          {#if toast.type === "success"}
            <path d="M5 13l4 4L19 7"/>
          {:else if toast.type === "error"}
            <circle cx="12" cy="12" r="10"/>
            <path d="M15 9l-6 6M9 9l6 6"/>
          {:else}
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4M12 8h.01"/>
          {/if}
        </svg>
        <span class={styles.toastText()}>{toast.message}</span>
      </div>
    </div>
  {/if}
</div>