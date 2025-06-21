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
hi
```