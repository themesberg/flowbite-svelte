<script lang="ts">
  import { ClipboardManager } from "$lib";
</script>

<div data-testid="custom-labels-clipboard">
  <ClipboardManager placeholder="Custom placeholder" saveLabel="Add Item" clearLabel="Remove All" saveToStorage={false} />
</div>
