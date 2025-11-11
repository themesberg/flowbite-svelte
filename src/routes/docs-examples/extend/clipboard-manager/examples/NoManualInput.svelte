<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
</script>

<div id="no-manual-input" class="lesson-content">
  <h2>JavaScript Variables</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<ClipboardManager 
  enableSelectionMenu={true}
  selectionTarget="#no-manual-input"
  showInput={false}
  storageKey="no-manual-input"
/>
