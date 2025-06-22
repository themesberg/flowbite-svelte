---
layout: componentLayout
title: Svelte WYSIWYG Text Editor - Flowbite
breadcrumb_title: Svelte WYSIWYG Text Editor
component_title: WYSIWYG
dir: components
description: Use the wysiwyg text editor component from Flowbite-Svelte-Plugins to create and modify content by manipulating paragraphs, headings, images and styling them using all available options
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks } from '../../utils'
  const components = 'Texteditor'

  import { Badge, P, Button } from "$lib"
  import { InfoCircleOutline } from "flowbite-svelte-icons";
</script>

The WYSIWYG text editor from Flowbite-Svelte is open-source under the MIT license based on the Tip Tap library and allows you to easily edit complex text data with typography styles, links, images, videos, and more.

The markup and styles provided by Flowbite-Svelte are all built with the utility classes from Tailwind CSS and the styles for the content inside the WYSIWYG text editor are based on the Flowbite Typography plugin.

All examples provided on this page have support for dark mode, RTL (right-to-left) styles, responsiveness on mobile devices and you can easily add your own functionality using JavaScript.

## Installation

```svelte example hideOutput
pnpm i -D @flowbite-svelte-plugins/texteditor
```

### app.css

```css
@import 'tailwindcss';
// ...
@plugin "flowbite-typography";
// ...

@source "../node_modules/@flowbite-svelte-plugins/texteditor/dist";
// ...
```

## Default text editor
Use this example of a WYSIWYG text editor to enable basic typography styling and formatting, adding lists, links, images, videos, code blocks, aligning text, blockquotes, setting headers and paragraphs and more.

```svelte example
<script lang="ts">
  import { GroupAlignment, GroupUndoRedo, GroupFormat, GroupLayout, GroupMedia, TextEditor, ToolbarRowWrapper, Divider } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';
  import { Button } from 'flowbite-svelte';

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupFormat editor={editorInstance} />
    <Divider />
    <GroupAlignment editor={editorInstance} />
  </ToolbarRowWrapper>
  <ToolbarRowWrapper top={false}>
    <GroupUndoRedo editor={editorInstance} />
    <GroupLayout editor={editorInstance} />
    <Divider />
    <GroupMedia editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent('<p>New content!</p>')}>Set Content</Button>
</div>
```

## Text formatting
Use this example of a WYSIWYG text editor to enable typography styling, formatting and marking such as underline, bold, italic, strikethrough, code, highlight and also selecting text size, color, font family and more.

```svelte example
<script lang="ts">
  import { GroupFormat, TextEditor, ToolbarRowWrapper } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';
  import { Button } from 'flowbite-svelte';

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite React is an <strong>open-source library of UI components</strong> built using React and Tailwind CSS. It supports dark mode, a Figma design system, and more.</p><p>It includes essential components for web apps like buttons, dropdowns, navigation bars, modals, datepickers, and charts, all optimized for React.</p><p>Example button component in Flowbite React:</p><code>import &#123; Button &#125; from &#39;flowbite-react&#39;; &lt;Button color&#x3D;&quot;blue&quot;&gt;Default&lt;/Button&gt;</code><p>These components can also be easily customized using the theme props from the Flowbite Docs and allows you to add your own Tailwind CSS utility classes to override the default styles.</p><p>Explore more components and props values in the Flowbite Docs.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupFormat editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent('<p>New content!</p>')}>Set Content</Button>
</div>
```

## Text alignment
Enable text alignment to the left, center, right, and justify for the content inside of the WYSIWYG component.

```svelte example
<script lang="ts">
  import { GroupAlignment, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';
  import { Button } from 'flowbite-svelte';

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupAlignment editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent('<p>New content!</p>')}>Set Content</Button>
</div>
```

## Layout elements (work in progress)
Use this example to create typography elements like blockquotes, horizontal rules, code blocks.

```svelte example
<script lang="ts">
  import { GroupLayout, TextEditor, ToolbarRowWrapper } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';
  import { Button } from 'flowbite-svelte';

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><ul><li>Over 600+ open-source UI components</li><li>Supports dark mode and RTL</li><li>Available in React, Vue, Svelte frameworks</li></ul><p>Here is an example of a button component:</p><pre><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code></pre><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupLayout editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent('<p>New content!</p>')}>Set Content</Button>
</div>
```

## Links
Use this example to add and remove anchor links for the content inside of the WYSIWYG text editor.

```svelte example

```