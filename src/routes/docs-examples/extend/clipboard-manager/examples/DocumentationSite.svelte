<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";

  let items = [{ id: 1, text: "npm install package", pinned: true, timestamp: Date.now() }];
</script>

<div class="docs-layout">
  <!-- Documentation content -->
  <div class="prose" id="docs-content">
    <h1>API Documentation</h1>
    <p>Select any code snippet or command to save it.</p>
    <code>git clone https://github.com/repo.git</code>
  </div>

  <!-- Sidebar with clipboard -->
  <aside class="sidebar">
    <ClipboardManager {items} enableSelectionMenu={true} selectionTarget="#docs-content" placeholder="Or paste a command..." limit={30} storageKey="documentation-site" />
  </aside>
</div>
