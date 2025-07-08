<script lang="ts">
  import { ListButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><ul><li>Over 600+ open-source UI components</li><li>Supports dark mode and RTL</li><li>Available in React, Vue, Svelte frameworks</li></ul><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>';
</script>

<TextEditor bind:editor={editorInstance} {content} contentprops={{ id: 'lists-ex' }}>
  <ListButtonGroup editor={editorInstance} />
</TextEditor>
