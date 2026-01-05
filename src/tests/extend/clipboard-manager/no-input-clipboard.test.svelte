<script lang="ts">
  import { ClipboardManager } from "$lib";
  import type { ClipboardItem } from "$lib/types";

  const items: ClipboardItem[] = [{ id: 1, text: "Item without input", timestamp: Date.now() }];
</script>

<div data-testid="no-input-clipboard">
  <ClipboardManager {items} showInput={false} saveToStorage={false} />
</div>
