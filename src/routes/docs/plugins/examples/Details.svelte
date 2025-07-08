<script lang="ts">
  import { DetailsButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `
      <p>Look at these details</p>
      <details>
        <summary>This is a summary</summary>
        <p>Surprise!</p>
      </details>
      <p>Nested details are also supported</p>
      <details open>
        <summary>This is another summary</summary>
        <p>And there is even more.</p>
        <details>
          <summary>We need to go deeper</summary>
          <p>Booya!</p>
        </details>
      </details>
    `;
</script>

<TextEditor bind:editor={editorInstance} {content} contentprops={{ id: 'details-ex' }}>
  <DetailsButtonGroup editor={editorInstance} />
</TextEditor>
