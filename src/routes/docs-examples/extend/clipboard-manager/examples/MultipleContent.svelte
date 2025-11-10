<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
</script>

<!-- Multiple content areas -->
<div class="space-y-2">
  <div class="selectable-area border border-gray-200 p-4 bg-green-100" id="content1">
    <p>Content area 1 with class="selectable-area"</p>
    <p>You can select from this div.</p>
  </div>

  <div class="non-selectable-area border border-gray-200 p-4 bg-red-100" id="content2">
    <p>Content area 2 with class="non-selectable-area"</p>
    <p>You CAN'T select from this div.</p>
  </div>

  <div class="selectable-area border border-gray-200 p-4 bg-green-100" id="content3">
    <p>Content area 3 with class="selectable-area"</p>
    <p>You can select from this div.</p>
  </div>
</div>

<ClipboardManager enableSelectionMenu={true} selectionTarget=".selectable-area" storageKey="multiple-content" />
