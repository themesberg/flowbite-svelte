<script lang="ts">
  import { ExportButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Learn more about all components from the <a href="https://flowbite-svelte.com/docs/pages/quickstart">Flowbite-Svelte Docs</a>.</p>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ExportButtonGroup editor={editorInstance} />
</TextEditor>
