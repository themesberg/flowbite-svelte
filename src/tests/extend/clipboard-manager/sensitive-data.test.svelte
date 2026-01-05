<script lang="ts">
  import { ClipboardManager } from "$lib";
</script>

<div data-testid="sensitive-clipboard">
  <ClipboardManager filterSensitive saveToStorage={false} />
</div>
