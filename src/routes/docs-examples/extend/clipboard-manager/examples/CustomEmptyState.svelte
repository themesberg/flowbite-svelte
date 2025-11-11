<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
</script>

<div id="custom-empty-state">
  <h2>JavaScript Variables</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iste, quis fugit quo sint quasi quam architecto ipsum, ab reprehenderit error eveniet sunt neque atque vero nulla, labore magnam mollitia.</p>
</div>

<ClipboardManager 
  enableSelectionMenu={true}
  selectionTarget="#custom-empty-state"
  storageKey="custom-empty"
>
  {#snippet emptyState()}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">👆</div>
      <h3 class="text-lg font-semibold mb-2">
        No saved items yet
      </h3>
      <p class="text-sm text-gray-600">
        Highlight any text in the article above<br>
        and click "Save to Clipboard" to get started
      </p>
    </div>
  {/snippet}
</ClipboardManager>