<script lang="ts">
  import { TaskListButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = `<ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <TaskListButtonGroup editor={editorInstance} />
</TextEditor>
