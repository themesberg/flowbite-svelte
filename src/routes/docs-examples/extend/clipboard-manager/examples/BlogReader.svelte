<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
</script>

<article class="max-w-4xl mx-auto">
  <div id="article-body" class="prose">
    <h1>How to Build Better UIs</h1>
    <p>Select any quote or insight to save for later...</p>
    <!-- Article content -->
  </div>
</article>

<!-- Floating clipboard panel -->
<div class="w-80 mx-auto">
  <ClipboardManager 
    enableSelectionMenu={true}
    selectionTarget="#article-body"
    saveLabel="Add"
    clearLabel="Clear All!"
    storageKey="blog-reader"
  />
</div>