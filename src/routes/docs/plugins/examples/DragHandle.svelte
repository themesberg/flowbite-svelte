<script lang="ts">
  import { TextEditor, UndoRedoButtonGroup } from '@flowbite-svelte-plugins/texteditor';
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
        <ul>
          <li>Bullet Item 1</li>
          <li>Bullet Item 2</li>
          <li>Bullet Item 3</li>
        </ul>
        <h2>Lorem Ipsum</h2>
        <p>Tincidunt ornare massa eget egestas. Neque convallis a cras semper auctor neque.</p>
        <h3>Lorem Ipsum</h3>
        <p>Sapien eget mi proin sed libero enim sed faucibus. Aliquam id diam maecenas ultricies mi eget mauris.</p>
      `;
</script>

<TextEditor bind:editor={editorInstance} {content} draghandle contentprops={{ id: 'drag-handle-wrapper' }}>
  <UndoRedoButtonGroup editor={editorInstance} />
</TextEditor>

