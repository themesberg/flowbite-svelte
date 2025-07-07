<script lang="ts">
  import { LayoutButtonGroup, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a code block:</p><pre><code class="language-js">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre><p>Learn more about all components from the <a href="https://flowbite-svelte.com/docs/pages/quickstart">Flowbite-Svelte Docs</a>.</p>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <LayoutButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
