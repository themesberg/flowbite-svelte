<script lang="ts">
  import { TextEditor, UndoRedoButtonGroup, DragHandle } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `
        <h1>This is a demo file for our Drag Handle extension experiement.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p>Odio eu feugiat pretium nibh ipsum consequat nisl. Velit euismod in pellentesque massa placerat.</p>
        <p>Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sem viverra aliquet eget sit amet tellus. </p>
        <h2>Another heading 2</h2>
        <p>Odio eu feugiat pretium nibh ipsum consequat nisl. Velit euismod in pellentesque massa placerat.</p>
        <p>Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sem viverra aliquet eget sit amet tellus. .</p>
       
      `;
</script>

<TextEditor bind:editor={editorInstance} {content} contentprops={{ id: 'drag-handle-wrapper' }}>
  <UndoRedoButtonGroup editor={editorInstance} />
  <DragHandle editor={editorInstance} />
</TextEditor>
