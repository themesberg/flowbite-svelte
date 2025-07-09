<script lang="ts">
  import { UndoRedoButtonGroup, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);
</script>

<TextEditor bind:editor={editorInstance} contentprops={{ id: "placeholder-ex" }}>
  <ToolbarRowWrapper>
    <UndoRedoButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>
