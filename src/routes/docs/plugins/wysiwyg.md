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

  import Appcss from './examples/appcss.md';

  import { Badge, P, Button, Accordion, AccordionItem } from "$lib"
  import { InfoCircleOutline } from "flowbite-svelte-icons";
</script>

The WYSIWYG text editor from Flowbite-Svelte is open-source under the MIT license based on the Tip Tap library and allows you to easily edit complex text data with typography styles, links, images, videos, and more.

The markup and styles provided by Flowbite-Svelte are all built with the utility classes from Tailwind CSS and the styles for the content inside the WYSIWYG text editor are based on the Flowbite Typography plugin.

All examples provided on this page have support for dark mode, RTL (right-to-left) styles, responsiveness on mobile devices and you can easily add your own functionality using JavaScript.

## Installation

```svelte example hideOutput
pnpm i -D @flowbite-svelte-plugins/texteditor highlight.js lowlight
```

### app.css

Use the following example or create your own.

<Accordion flush>
  <AccordionItem contentClass="customstyle">
  {#snippet header()}Example style{/snippet}
  <Appcss />
  </AccordionItem>
</Accordion>

## Default text editor

Use this example of a WYSIWYG text editor to enable basic typography styling and formatting, adding lists, links, images, videos, code blocks, aligning text, blockquotes, setting headers and paragraphs and more.

```svelte example class="pt-10"
<script lang="ts">
  import { AlignmentButtonGroup, FontButtonGroup, UndoRedoButtonGroup, FormatButtonGroup, LayoutButtonGroup, ImageButtonGroup, ListButtonGroup, VideoButtonGroup, TextEditor, ToolbarRowWrapper, Divider, SourceButton, HeadingButtonGroup } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>
    <p>Here is an example of a js block:</p><pre><code class="language-javascript">for (var i=1; i <= 20; i++)
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

<TextEditor bind:editor={editorInstance} {content} showSourceButton={true}>
  <ToolbarRowWrapper>
    <FormatButtonGroup editor={editorInstance} />
    <Divider />
    <HeadingButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
  <ToolbarRowWrapper top={false}>
    <UndoRedoButtonGroup editor={editorInstance} />
    <Divider />
    <LayoutButtonGroup editor={editorInstance} />
    <Divider />
    <ImageButtonGroup editor={editorInstance} />
    <Divider />
    <VideoButtonGroup editor={editorInstance} />
    <SourceButton editor={editorInstance} />
  </ToolbarRowWrapper>
  <ToolbarRowWrapper top={false}>
    <ListButtonGroup editor={editorInstance} />
    <Divider />
    <AlignmentButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Text formatting

Use `FormatButtonGroup` to enable typography styling, formatting and marking such as bold, code, highlight, italic, link, remove link, underline, strikethrough, subscript, seperscript, and line break.

```svelte example class="pt-10"
<script lang="ts">
  import { FormatButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a code block:</p>
  <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
    {
      if (i % 15 == 0)
        console.log("FizzBuzz");
      else if (i % 3 == 0)
        console.log("Fizz");
      else if (i % 5 == 0)
        console.log("Buzz");
      else
        console.log(i);
    }</code></pre>
<p>Learn more about all components from the <a href="https://flowbite-svelte.com/docs/pages/quickstart">Flowbite-Svelte Docs</a>.</p>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <FormatButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Emoji

Type `:` to open the autocomplete. The default value is `emoji={true}`, and you can disable it by adding `emoji={false}` to `TextEditor`.

```svelte example class="pt-10"
<script lang="ts">
  import { UndoRedoButtonGroup, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  let content = `
        <p>
          These <span data-type="emoji" data-name="smiley"></span>
          are <span data-type="emoji" data-name="fire"></span>
          some <span data-type="emoji" data-name="smiley_cat"></span>
          emojis <span data-type="emoji" data-name="exploding_head"></span>
          rendered <span data-type="emoji" data-name="ghost"></span>
          as <span data-type="emoji" data-name="massage"></span>
          inline <span data-type="emoji" data-name="v"></span>
          nodes.
        </p>
        <p>
          Type <code>:</code> to open the autocomplete.
        </p>
        <p>
          Even <span data-type="emoji" data-name="octocat"></span>
          custom <span data-type="emoji" data-name="trollface"></span>
          emojis <span data-type="emoji" data-name="neckbeard"></span>
          are <span data-type="emoji" data-name="rage1"></span>
          supported.
        </p>
        <p>
          And unsupported emojis (without a fallback image) are rendered as just the shortcode <span data-type="emoji" data-name="this_does_not_exist"></span>.
        </p>
        <pre><code>In code blocks all emojis are rendered as plain text. 👩‍💻👨‍💻</code></pre>
      `;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <UndoRedoButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Mention

Trigger a mention popup by typing `@`. Provide a `mentions` array of name strings to display filtered suggestions as you type.

```svelte example class="pt-10"
<script lang="ts">
  import { UndoRedoButtonGroup, TextEditor, ToolbarRowWrapper } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';
  import { Button } from 'flowbite-svelte';

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? '';
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  let content = `
        <p>Hi everyone! Don’t forget the daily stand up at 8 AM.</p>
        <p><span data-type="mention" data-id="Jennifer Grey"></span> Would you mind to share what you’ve been working on lately? We fear not much happened since Dirty Dancing.
        <p><span data-type="mention" data-id="Winona Ryder"></span> <span data-type="mention" data-id="Axl Rose"></span> Let’s go through your most important points quickly.</p>
        <p>I have a meeting with <span data-type="mention" data-id="Christina Applegate"></span> and don’t want to come late.</p>
        <p>– Thanks, your big boss</p>
      `;
  const mentions = [
    'Lea Thompson',
    'Cyndi Lauper',
    'Tom Cruise',
    'Madonna',
    'Jerry Hall',
    'Joan Collins',
    'Winona Ryder',
    'Christina Applegate',
    'Alyssa Milano',
    'Molly Ringwald',
    'Ally Sheedy',
    'Debbie Harry',
    'Olivia Newton-John',
    'Elton John',
    'Michael J. Fox',
    'Axl Rose',
    'Emilio Estevez',
    'Ralph Macchio',
    'Rob Lowe',
    'Jennifer Grey',
    'Mickey Rourke',
    'John Cusack',
    'Matthew Broderick',
    'Justine Bateman',
    'Lisa Bonet'
  ];
</script>

<TextEditor bind:editor={editorInstance} {content} {mentions}>
  <ToolbarRowWrapper>
    <UndoRedoButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent('<p>New content!</p>')}>Set Content</Button>
</div>
```

## Bubble menu

The bubble menu displays a contextual toolbar near selected text. Disable features like `underline` and `highlight` using `underline={false}`.

```svelte example class="pt-10"
<script lang="ts">
  import { TextEditor, AlignmentButtonGroup, UndoRedoButtonGroup } from '@flowbite-svelte-plugins/texteditor';
  import { Button } from 'flowbite-svelte';
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

<TextEditor bind:editor={editorInstance} {content} bubbleMenu>
  <UndoRedoButtonGroup editor={editorInstance} />
  <AlignmentButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Get Content</Button>
  <Button onclick={() => setEditorContent('<p>New content!</p>')}>Set Content</Button>
</div>
```

## Math

Render mathematical formulas and equations by adding the `math` prop.

```svelte example class="pt-10"
<script lang="ts">
  import 'katex/dist/katex.min.css';
  import { TextEditor, UndoRedoButtonGroup } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `<h1>
          This editor supports $\\LaTeX$ math expressions.
        </h1>
        <p>
          Did you know that $3 * 3 = 9$? Isn't that crazy? Also Pythagoras' theorem is $a^2 + b^2 = c^2$.<br />
          Also the square root of 2 is $\\sqrt{2}$. If you want to know more about $\\LaTeX$ visit <a href="https://katex.org/docs/supported.html" target="_blank">katex.org</a>.
        </p>
        <code>
          <pre>$\\LaTeX$</pre>
        </code>
        <p>
          Do you want go deeper? Here is a list of all supported functions:
        </p>
        <ul>
          <li>$\\sin(x)$</li>
          <li>$\\cos(x)$</li>
          <li>$\\tan(x)$</li>
          <li>$\\log(x)$</li>
          <li>$\\ln(x)$</li>
          <li>$\\sqrt{x}$</li>
          <li>$\\sum_{i=0}^n x_i$</li>
          <li>$\\int_a^b x^2 dx$</li>
          <li>$\\frac{1}{x}$</li>
          <li>$\\binom{n}{k}$</li>
          <li>$\\sqrt[n]{x}$</li>
          <li>$\\left(\\frac{1}{x}\\right)$</li>
          <li>$\\left\\{\\begin{matrix}x&\\text{if }x>0\\\\0&\\text{otherwise}\\end{matrix}\\right.$</li>
        </ul>`;
</script>

<TextEditor bind:editor={editorInstance} {content} math>
  <UndoRedoButtonGroup editor={editorInstance} />
</TextEditor>
```

## Invisible characters

The `InvisibleButtonGroup` component provides toggle, show, and hide controls for invisible elements in a text editor. Each button can be individually shown or hidden using boolean props.

```svelte example class="pt-10"
<script lang="ts">
  import { InvisibleButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

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
```

## Character count

The `CharacterCount` component limits the number of allowed characters to a specific length and is able to return the number of characters and words.

```svelte example class="pt-10"
<script lang="ts">
  import { CharacterCount, UndoRedoButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `<p>
    Let‘s make sure people can’t write more than 280 characters. I bet you could build one of the biggest social networks on that idea.
  </p>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <UndoRedoButtonGroup editor={editorInstance} />
  {#snippet footer()}
    {#if editorInstance}
      <CharacterCount editor={editorInstance} limit={280} />
    {/if}
  {/snippet}
</TextEditor>
```

## File Handler
The `file` prop allows you to easily handle file drops and pastes in the editor.

```svelte example
<script lang="ts">
  import { SourceButtonGroup, TextEditor } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `<h1>
        Try to paste or drop files into this editor
      </h1>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>`;
</script>

<TextEditor bind:editor={editorInstance} {content} file>
  <SourceButtonGroup editor={editorInstance} html={false} />
</TextEditor>
```

## Text alignment

`AlignmentButtonGroup` component enables text alignment to the left, center, right, and justify for the content inside of the WYSIWYG component.

```svelte example class="pt-10"
<script lang="ts">
  import { AlignmentButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = "<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <AlignmentButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Layout elements

`LayoutButtonGroup` creates typography elements like blockquotes, horizontal rules, code blocks.

```svelte example class="pt-10"
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

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a code block:</p><pre><code class="language-javascript">for (var i=1; i <= 20; i++)
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
```

## Images

`ImageButtonGroup` adds images inside of the WYSIWYG text editor and configure settings such as the image URL, image alt attribute which is important for SEO and accessibility and the image title.

```svelte example class="pt-10"
<script lang="ts">
  import { ImageButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = '<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><img src="https://placehold.co/600x400" contenteditable="false" draggable="true"><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>';
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ImageButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## List

Use this example to create typography elements like bullet lists, ordered lists, blockquotes, horizontal rules, paragraphs, headings, code blocks based on Tailwind CSS utility classees and the Flowbite API.

```svelte example class="pt-10"
<script lang="ts">
  import { ListButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = "<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><ul><li>Over 600+ open-source UI components</li><li>Supports dark mode and RTL</li><li>Available in React, Vue, Svelte frameworks</li></ul><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ListButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Fonts

```svelte example class="pt-10"
<script lang="ts">
  import { FontButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = "<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <FontButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Adding videos

Use `VideoButtonGroup` to embed videos inside the WYSIWYG text editor based on a YouTube URL source and set the width and height of the video by using the advanced video component.

```svelte example class="pt-10"
<script lang="ts">
  import { VideoButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = "<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <VideoButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Editing tables

Use `TableButtonGroup`s to edit table data inside the WYSIWYG text editor by adding and removing table column, rows, and cells and use other features to navigate through the table data for a convenient editing process.

```svelte example class="pt-10"
<script lang="ts">
  import { TableButtonGroup1, TableButtonGroup2, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

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

<TextEditor bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <TableButtonGroup1 editor={editorInstance} />
  </ToolbarRowWrapper>
  <ToolbarRowWrapper top={false}>
    <TableButtonGroup2 editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Undo and redo

Use the history functionality from the WYSIWYG text editor component to integrate undo and redo actions.

```svelte example class="pt-10"
<script lang="ts">
  import { UndoRedoButtonGroup, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = "<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <UndoRedoButtonGroup editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Exporting data

Use `ExportButtonGroup.svelte` to export the text content inside of the WYSIWYG text editor in JSON or raw HTML format to persist into your database or API structure.

```svelte example class="pt-10"
<script lang="ts">
  import { ExportButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";

  let editorInstance = $state<Editor | null>(null);

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p><p>Here is an example of a code block:</p><pre><code class="language-javascript">for (var i=1; i <= 20; i++)
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
  <ExportButtonGroup editor={editorInstance} />
</TextEditor>
```

## TaskList

```svelte example class="pt-10"
<script lang="ts">
  import { TaskListButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = `<ul data-type="taskList">
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>`;
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <TaskListButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Details

```svelte example class="pt-10"
<script lang="ts">
  import { DetailsButtonGroup, TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

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

<TextEditor bind:editor={editorInstance} {content}>
  <DetailsButtonGroup editor={editorInstance} />
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Source and HTML

Use the following example to view/edit source code and insert HTML code.

```svelte example class="pt-10"
<script lang="ts">
  import { HtmlCodeButton, SourceButton, TextEditor, ToolbarRowWrapper } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = `<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p>
    <p>Here is an example of a code block:</p><pre><code class="language-js">for (var i=1; i <= 20; i++)
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
    <SourceButton editor={editorInstance} />
    <HtmlCodeButton editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>

<div class="mt-4">
  <Button onclick={() => console.log(getEditorContent())}>Log Content</Button>
  <Button onclick={() => setEditorContent("<p>New content!</p>")}>Set Content</Button>
</div>
```

## Customizing Group components

You can control display of buttons by adding `false` to a button group component as the following example.

```svelte example class="pt-10"
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

  const content = "<p>Flowbite-Svelte is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <ToolbarRowWrapper>
    <LayoutButtonGroup hr={false} codeblock={false} editor={editorInstance} />
  </ToolbarRowWrapper>
</TextEditor>
```

## Customizing texteditor

Either using the above example or use button components to create your custom texteditor.

```svelte example class="pt-10" hideOutput
<script lang="ts">
  // CustomGroup.svelte
  import { AlignmentButton, FontButton, FormatButton, ImageButton } from "@flowbite-svelte-plugins/texteditor";
  import type { GroupEditorBasicProps } from "@flowbite-svelte-plugins/texteditor";

  let { editor, showToolbar = true }: GroupEditorBasicProps = $props();
</script>

{#if editor && showToolbar}
  <AlignmentButton {editor} alignment="left" />
  <AlignmentButton {editor} alignment="right" />
  <ImageButton {editor} />
  <FontButton {editor} format="fontSize" />
  <FormatButton {editor} format="italic" />
  <FormatButton {editor} format="link" />
  <FormatButton {editor} format="removeLink" />
{/if}
```

```svelte example hideOutput
<script lang="ts">
  // +page.svelte
  import CustomGroup from "./CustomGroup.svelte";
  import { TextEditor } from "@flowbite-svelte-plugins/texteditor";
  import type { Editor } from "@tiptap/core";
  import { Button } from "flowbite-svelte";

  let editorInstance = $state<Editor | null>(null);

  function getEditorContent() {
    return editorInstance?.getHTML() ?? "";
  }

  function setEditorContent(content: string) {
    editorInstance?.commands.setContent(content);
  }

  const content = "<p>Flowbite is an <strong>open-source library of UI components</strong> based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.</p><p>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, datepickers, advanced charts and the list goes on.</p>";
</script>

<TextEditor bind:editor={editorInstance} {content}>
  <CustomGroup editor={editorInstance} />
</TextEditor>
```
