<script lang="ts">
  import { AlignmentButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>';
</script>

<TextEditor bind:editor={editorInstance} {content} contentprops={{ id: 'alignment-ex' }}>
  <AlignmentButtonGroup editor={editorInstance} />
</TextEditor>
