<script lang="ts">
  import { ClipboardManager } from "flowbite-svelte";
</script>

<!-- Multiple content areas -->
<div class="space-y-2">
  <div class="selectable-area border border-default bg-green-100 p-4 text-body" id="content1">
    <p>Content area 1 with class="selectable-area"</p>
    <p>You can select from this div.</p>
  </div>

  <div class="non-selectable-area border border-default bg-red-100 p-4 text-body" id="content2">
    <p>Content area 2 with class="non-selectable-area"</p>
    <p>You CAN'T select from this div.</p>
  </div>

  <div class="selectable-area border border-default bg-green-100 p-4 text-body" id="content3">
    <p>Content area 3 with class="selectable-area"</p>
    <p>You can select from this div.</p>
  </div>
</div>

<ClipboardManager enableSelectionMenu={true} selectionTarget=".selectable-area" storageKey="multiple-content" />
