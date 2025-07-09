<script lang="ts">
  import { AlignmentButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = "<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<h1 class="text-3xl dark:text-white">Autofocus Example</h1>

<p>This example automatically focuses at the end of the editor.</p>

<TextEditor bind:editor={editorInstance} {content} autofocusPosition="end" contentprops={{ id: "autofocus-ex" }}>
  <AlignmentButtonGroup editor={editorInstance} />
</TextEditor>
