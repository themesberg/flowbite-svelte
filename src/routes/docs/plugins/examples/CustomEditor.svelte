<script lang="ts">
  import GroupCustom from './CustomGroup.svelte';
  import { TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = '<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma ...</p>';
</script>

<TextEditor bind:editor={editorInstance} {content} contentprops={{ id: 'custom-editor-ex' }}>
  <GroupCustom editor={editorInstance} />
</TextEditor>
