# Svelte WYSIWYG Text Editor - Flowbite


<svelte:head>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/base16/google-dark.min.css" />
</svelte:head>

The WYSIWYG text editor from Flowbite-Svelte is open-source under the MIT license based on the Tip Tap library and allows you to easily edit complex text data with typography styles, links, images, videos, and more.

The markup and styles provided by Flowbite-Svelte are all built with the utility classes from Tailwind CSS and the styles for the content inside the WYSIWYG text editor are based on the Flowbite Typography plugin.

All examples provided on this page have support for dark mode, RTL (right-to-left) styles, responsiveness on mobile devices and you can easily add your own functionality using JavaScript.

## Installation

<P class="text-red-500 text-xl">UPDATE: @flowbite-svelte-plugins/texteditor@{textEditor} uses @tiptap{tiptapVersion}.</P>

<Examples.InstallCommand />

### app.css

Use the following example or create your own.

<Accordion flush>
  <AccordionItem classes={{ content: "customstyle" }}>
  {#snippet header()}Example style{/snippet}
  <Examples.Appcss />
  </AccordionItem>
</Accordion>

### Code Block Styling

To add syntax highlighting styles to your code blocks, include a highlight.js theme. You can browse available themes at cdnjs.com/libraries/highlight.js or preview them at https://highlightjs.org/demo.

```svelte
<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/base16/google-dark.min.css" />
</svelte:head>
```

## Full-featured Text Editor

Use this example of a WYSIWYG text editor to enable basic typography styling and formatting, adding lists, links, images, videos, code blocks, aligning text, blockquotes, setting headers and paragraphs and more.

<Examples.FullFeaturedTexteditor />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/FullFeaturedTexteditor.svelte']}
/>

## Text Formatting

Use `FormatButtonGroup` to enable typography styling, formatting and marking such as bold, code, highlight, italic, link, remove link, underline, strikethrough, subscript, seperscript, and line break.

<Examples.Format />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Format.svelte']}
/>

## Emoji

Type `:` to open the autocomplete. The default value is `emoji={true}`, and you can disable it by adding `emoji={false}` to `TextEditor`.

<Examples.Emoji />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Emoji.svelte']}
/>

## Mention

Trigger a mention popup by typing `@`. Provide a `mentions` array of name strings to display filtered suggestions as you type.

<Examples.Mention />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Mention.svelte']}
/>

## Bubble Menu

The bubble menu displays a contextual toolbar near selected text. Disable features like `underline` and `highlight` using `underline={false}`.

<Examples.BubbleMenu />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/BubbleMenu.svelte']}
/>

Configure which menu items are displayed using the following examples:

<Examples.BubbleMenu2 />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/BubbleMenu2.svelte']}
/>

## Math

Render mathematical formulas and equations by adding the `math` prop.

<Examples.Math />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Math.svelte']}
/>

## Invisible Characters

The `InvisibleButtonGroup` component provides toggle, show, and hide controls for invisible elements in a text editor. Each button can be individually shown or hidden using boolean props.

<Examples.Invisible />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Invisible.svelte']}
/>

## Character Count

The `CharacterCount` component limits the number of allowed characters to a specific length and is able to return the number of characters and words.

<Examples.CharacterCount />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/CharacterCount.svelte']}
/>

## Drag Handle

The `dragHandle` prop allows you to easily handle dragging nodes around in the editor.

<Examples.DragHandle />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/DragHandle.svelte']}
/>

## File Handler

The `file` prop allows you to easily handle file drops and pastes in the editor.

<Examples.Filehandler />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Filehandler.svelte']}
/>

## Floating Menu

Use the `floatingMenu` prop in `TextEditor` to make a menu appear on an empty line.

<Examples.FloatingMenu />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/FloatingMenu.svelte']}
/>

Configure which menu items are displayed using the following examples:

<Examples.FloatingMenu2 />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/FloatingMenu2.svelte']}
/>

## Text Alignment

`AlignmentButtonGroup` component enables text alignment to the left, center, right, and justify for the content inside of the WYSIWYG component.

<Examples.Alignment />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Alignment.svelte']}
/>

## Layout Elements

`LayoutButtonGroup` creates typography elements like blockquotes, horizontal rules, code blocks.

<Examples.Layouts />

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Layouts.svelte']}
/>

## Images

`ImageButtonGroup` adds images inside of the WYSIWYG text editor and configure settings such as the image URL, image alt attribute which is important for SEO and accessibility and the image title.

<Examples.Images />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Images.svelte']}
/>

## Lists

Use this example to create typography elements like bullet lists, ordered lists, blockquotes, horizontal rules, paragraphs, headings, code blocks based on Tailwind CSS utility classees and the Flowbite API.

<Examples.Lists />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Lists.svelte']}
/>

## Fonts

<Examples.Fonts />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Fonts.svelte']}
/>

## Adding Youtube Videos

Use `YoutubeButtonGroup` to embed videos inside the WYSIWYG text editor based on a YouTube URL source and set the width and height of the video by using the advanced video component.

<Examples.Youtube />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Youtube.svelte']}
/>

## Editing Tables

Use `TableButtonGroup`s to edit table data inside the WYSIWYG text editor by adding and removing table column, rows, and cells and use other features to navigate through the table data for a convenient editing process.

<Examples.Tables />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Tables.svelte']}
/>

## Undo and Redo

Use the `UndoRedoButtonGroup` component to integrate undo and redo actions.

<Examples.UndoRedo />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/UndoRedo.svelte']}
/>

## Exporting Data

Use `ExportButtonGroup.svelte` to export the text content inside of the WYSIWYG text editor in JSON or raw HTML format to persist into your database or API structure.

<Examples.Export />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Export.svelte']}
/>

## TaskList

<Examples.Tasklist />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Tasklist.svelte']}
/>

## Details

Use `summary` and `detailsPlaceholder` props to change placeholders.

<Examples.Details />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Details.svelte']}
/>

## Source and HTML

Use the following example to view/edit source code and insert HTML code.

<Examples.SourceAndHtml />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/SourceAndHtml.svelte']}
/>

## Table of Contents

Use the following example to display Table of Contents.

<P>See an example at <A href="https://flowbite-svelte-texteditor.vercel.app/examples/Toc" target="_blank">this page</A>.</P>

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Toc.svelte']}
/>

## Placeholder

Use the `placeholder` prop to customize the text shown in empty editor content (default: "Write something ...").

<Examples.Placeholder />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Placeholder.svelte']}
/>

## Heading

<Examples.Heading />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/Heading.svelte']}
/>

## Editable Button

Use the `EditableButton` to enable or disable editing mode.

<Examples.EditableButton />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/EditableButton.svelte']}
/>

## Autofocus Position

`autofocusPosition` prop controls the initial cursor position when the editor loads. Set to 'start' to focus at the beginning, 'end' to focus at the end, 'all' to select all content, or a number for a specific character position. Use false or null to disable autofocus entirely.

```md
Default: false
Type: 'start' | 'end' | 'all' | number | boolean | null
```

<P>See an example at <A href="/examples/texteditor/autofocus">this page</A>.</P>
<ExampleWrapper 
  meta={{hideOutput: true}}
  codeString={exampleRawModules['./examples/wysiwyg/Autofocus.svelte']}
/>

## Getting and Setting Content

Use the following example to get and set text editor content.

<Examples.GetSetContent />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/GetSetContent.svelte']}
/>

## Customizing Group components

You can control display of buttons by adding `false` to a button group component as the following example.

<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/CustomGroup.svelte']}
/>

## Customizing texteditor

Either using the above example or use button components to create your custom texteditor.

<Examples.CustomEditor />
<ExampleWrapper
meta={{hideOutput: true}}
codeString={exampleRawModules['./examples/wysiwyg/CustomEditor.svelte']}
/>
