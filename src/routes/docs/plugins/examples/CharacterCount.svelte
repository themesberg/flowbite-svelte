<script lang="ts">
  import { CharacterCount, UndoRedoButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = `<p>
    Let‘s make sure people can’t write more than 280 characters. I bet you could build one of the biggest social networks on that idea.
  </p>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <UndoRedoButtonGroup editor={editorInstance} />
  {#snippet footer()}
    {#if editorInstance}
      <CharacterCount editor={editorInstance} limit={280} />
    {/if}
  {/snippet}
</TextEditor>