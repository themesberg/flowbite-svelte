<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
</script>

<article class="mx-auto max-w-4xl">
  <div id="article-body" class="prose">
    <h1>How to Build Better UIs</h1>
    <p>Select any quote or insight to save for later...</p>
    <!-- Article content -->
  </div>
</article>

<!-- Floating clipboard panel -->
<div class="mx-auto w-80">
  <ClipboardManager enableSelectionMenu={true} selectionTarget="#article-body" saveLabel="Add" clearLabel="Clear All!" storageKey="blog-reader" />
</div>
