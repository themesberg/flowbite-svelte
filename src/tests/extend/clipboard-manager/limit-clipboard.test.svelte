<script lang="ts">
  import { ClipboardManager } from "$lib";
</script>

<div data-testid="limit-clipboard">
  <ClipboardManager limit={3} saveToStorage={false} />
</div>
