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
  import { GroupAlignments, GroupFonts, GroupUndoRedo, GroupFormats, GroupLayouts, GroupImages, GroupLists, GroupVideos, TextEditor, ToolbarRowWrapper, Divider } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupFormats editor={editorInstance} />
    <Divider />
    <GroupFonts editor={editorInstance} />
    <Divider />
    <GroupAlignments editor={editorInstance} />
  </ToolbarRowWrapper>
  <ToolbarRowWrapper top={false}>
    <GroupUndoRedo editor={editorInstance} />
    <Divider />
    <GroupLayouts editor={editorInstance} />
    <Divider />
    <GroupLists editor={editorInstance} />
    <Divider />
    <GroupImages editor={editorInstance} />
    <Divider />
    <GroupVideos editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Text formatting

Use `GroupFormats` to enable typography styling, formatting and marking such as underline, bold, italic, strikethrough, code, highlight.

```svelte example
<script lang="ts">
  import { GroupFormats, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupFormats editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Text alignment

`GroupAlignments` component enables text alignment to the left, center, right, and justify for the content inside of the WYSIWYG component.

```svelte example
<script lang="ts">
  import { GroupAlignments, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupAlignments editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Layout elements

`GroupLayouts` creates typography elements like blockquotes, horizontal rules, code blocks.

```svelte example
<script lang="ts">
  import { GroupLayouts, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><ul><li>Over 600+ open-source UI components</li><li>Supports dark mode and RTL</li><li>Available in React, Vue, Svelte frameworks</li></ul><p>Here is an example of a button component:</p><pre><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code></pre><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupLayouts editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Images

`GroupImages` adds images inside of the WYSIWYG text editor and configure settings such as the image URL, image alt attribute which is important for SEO and accessibility and the image title.

```svelte example
<script lang="ts">
  import { GroupImages, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><img src="https://placehold.co/600x400" contenteditable="false" draggable="true"><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupImages editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Text alignment

`GroupAlignments` enables text alignment to the left, center, right, and justify for the content inside of the WYSIWYG component.

```svelte example
<script lang="ts">
  import { GroupAlignments, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupAlignments editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## List

Use this example to create typography elements like bullet lists, ordered lists, blockquotes, horizontal rules, paragraphs, headings, code blocks based on Tailwind CSS utility classees and the Flowbite API.

```svelte example
<script lang="ts">
  import { GroupLists, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><ul><li>Over 600+ open-source UI components</li><li>Supports dark mode and RTL</li><li>Available in React, Vue, Svelte frameworks</li></ul><p>Here is an example of a button component:</p><pre><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code></pre><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupLists editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Fonts

```svelte example
<script lang="ts">
  import { GroupFonts, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupFonts editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Adding videos

Use `GroupVideos` to embed videos inside the WYSIWYG text editor based on a YouTube URL source and set the width and height of the video by using the advanced video component.

```svelte example
<script lang="ts">
  import { GroupVideos, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupVideos editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Editing tables

Use `GroupTables`s to edit table data inside the WYSIWYG text editor by adding and removing table column, rows, and cells and use other features to navigate through the table data for a convenient editing process.

```svelte example
<script lang="ts">
  import { GroupTables1, GroupTables2, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content =
    "<p>Understanding global <strong>population growth trends</strong> is essential for analyzing the development and future of nations. Population growth rates provide insights into economic prospects, resource allocation, and potential challenges for countries worldwide.</p><p>Here is an example of population data:</p><div class=tableWrapper><table style=min-width:75px><col><col><col><tr><th colspan=1 rowspan=1><p>Country<th colspan=1 rowspan=1><p>Population<th colspan=1 rowspan=1><p>Growth rate<tr><td colspan=1 rowspan=1><p>United States<td colspan=1 rowspan=1><p>333 million<td colspan=1 rowspan=1><p>0.4%<tr><td colspan=1 rowspan=1><p>China<td colspan=1 rowspan=1><p>1.41 billion<td colspan=1 rowspan=1><p>0%<tr><td colspan=1 rowspan=1><p>Germany<td colspan=1 rowspan=1><p>83.8 million<td colspan=1 rowspan=1><p>0.7%<tr><td colspan=1 rowspan=1><p>India<td colspan=1 rowspan=1><p>1.42 billion<td colspan=1 rowspan=1><p>1.0%<tr><td colspan=1 rowspan=1><p>Brazil<td colspan=1 rowspan=1><p>214 million<td colspan=1 rowspan=1><p>0.6%<tr><td colspan=1 rowspan=1><p>Indonesia<td colspan=1 rowspan=1><p>273 million<td colspan=1 rowspan=1><p>1.1%<tr><td colspan=1 rowspan=1><p>Pakistan<td colspan=1 rowspan=1><p>231 million<td colspan=1 rowspan=1><p>2.0%<tr><td colspan=1 rowspan=1><p>Nigeria<td colspan=1 rowspan=1><p>223 million<td colspan=1 rowspan=1><p>2.5%</table></div><p>Learn more about global population trends from reliable sources like the <a href=https://www.worldpopulationreview.com>World Population Review</a>.</p>";
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupTables1 editor={editorInstance} />
  </ToolbarRowWrapper>
  <ToolbarRowWrapper top={false}>
    <GroupTables2 editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Undo and redo

Use the history functionality from the WYSIWYG text editor component to integrate undo and redo actions.

```svelte example
<script lang="ts">
  import { GroupUndoRedo, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <GroupUndoRedo editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Customize texteditor

Use the following example to create your custom texteditor.

```svelte example hideOutput
<script lang="ts">
  // GroupCustom.svelte
  import { type GroupEditorBasicProps, AlignmentButtons, FontButtons, FormatButtons, ImageButtons } from "@flowbite-svelte-plugins/texteditor";

  let { editor, showToolbar = true }: GroupEditorBasicProps = $props();
</script>

{#if editor && showToolbar}
  <AlignmentButtons {editor} alignment="left" />
  <AlignmentButtons {editor} alignment="right" />
  <ImageButtons {editor} />
  <FontButtons {editor} format="fontSize" />
  <FormatButtons {editor} format="italic" />
  <FormatButtons {editor} format="link" />
  <FormatButtons {editor} format="removeLink" />
{/if}
```

```svelte example hideOutput
<script lang="ts">
  // +page.svelte
  import GroupCustom from "./GroupCustom.svelte";
  import { TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupCustom editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Exporting data
Use `GroupExports.svelte` to export the text content inside of the WYSIWYG text editor in JSON or raw HTML format to persist into your database or API structure.

```svelte example
<script lang="ts">
  import { GroupExports, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorElement = $state<HTMLDivElement | null>(null);
  let editorInstance = $state<Editor | null>(null);

  const content =
    '<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a button component:</p><code>&#x3C;button type=&#x22;button&#x22; class=&#x22;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800&#x22;&#x3E;Default&#x3C;/button&#x3E;</code><p>Learn more about all components from the <a href="https://flowbite.com/docs/getting-started/introduction/">Flowbite Docs</a>.</p>';
</script>

<TextEditor bind:element={editorElement} bind:editor={editorInstance} {content}>
  <GroupExports editor={editorInstance} />
</TextEditor>
```

