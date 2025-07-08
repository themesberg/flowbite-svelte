<script lang="ts">
  import { TaskListButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam nulla impedit, fugit similique nihil deserunt velit ea, laboriosam sequi!
        <ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam nulla impedit, fugit similique nihil deserunt velit ea, laboriosam sequi!
      `;
</script>

<TextEditor bind:editor={editorInstance} {content} contentprops={{ id: 'task-ex' }}>
  <TaskListButtonGroup editor={editorInstance} />
</TextEditor>
