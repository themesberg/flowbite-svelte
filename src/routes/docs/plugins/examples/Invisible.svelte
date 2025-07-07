<script lang="ts">
  import { InvisibleButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = `
      <h1>
        This is a heading.
      </h1>
      <p>
        This<br>is<br>a<br>paragraph.
      </p>
      <p>
        This is a paragraph, but without breaks.
      </p>
    `;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <InvisibleButtonGroup editor={editorInstance} />
</TextEditor>
