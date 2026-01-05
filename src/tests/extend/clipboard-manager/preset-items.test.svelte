<script lang="ts">
  import { ClipboardManager } from "$lib";
  import type { ClipboardItem } from "$lib/types";

  const initialItems: ClipboardItem[] = [
    { id: 1, text: "Preset Item 1", timestamp: Date.now() - 1000 },
    { id: 2, text: "Preset Item 2", timestamp: Date.now() - 2000 },
    { id: 3, text: "Preset Item 3", timestamp: Date.now() - 3000 }
  ];
</script>

<div data-testid="preset-clipboard">
  <ClipboardManager items={initialItems} saveToStorage={false} />
</div>
