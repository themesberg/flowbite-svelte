<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";

  let snippets = [
    { id: 1, text: "console.log()", pinned: true, timestamp: Date.now() - 20 * 60 * 1000},
    { id: 2, text: "async function", pinned: true, timestamp: Date.now() - 30 * 60 * 1000 }
  ];
</script>

<div class="editor-layout">
  <div id="code-editor" class="border p-4">
    <pre><code contenteditable>// Editable area</code></pre>
  </div>

  <div class="snippets-sidebar">
    <ClipboardManager 
      items={snippets}
      enableSelectionMenu={true}
      selectionTarget="#code-editor"
      placeholder="Save code snippet..."
      maxLength={5000}
      filterSensitive={false}
      storageKey="code-editor"
    />
  </div>
</div>