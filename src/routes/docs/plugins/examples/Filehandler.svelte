<script lang="ts">
  import { SourceButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `<h1>
        Try to paste or drop files into this editor
      </h1>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>`;
</script>

<TextEditor bind:editor={editorInstance} {content} file contentprops={{ id: 'file-handler-ex' }}>
  <SourceButtonGroup editor={editorInstance} html={false} />
</TextEditor>
