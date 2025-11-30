---
layout: componentLayout
title: Svelte Dark Mode - Flowbite
breadcrumb_title: Svelte Dark mode
component_title: Darkmode
dir: Components
description: Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the library
thumbnailSize: w-24
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

In flowbite-svelte, the `class` strategy is used to support toggling dark mode manually, so you should explicitly configure it in Tailwind CSS:

```js example
// app.css
@custom-variant dark (&:where(.dark, .dark *));
```

Then you can use `dark:` prefixed classes to configure the styles applied when dark mode is enabled. For example, if you want to change the body background color from `bg-white` when dark mode is disabled to `bg-gray-800` when dark mode is enabled:

```svelte example hideOutput
<!-- src/app.html -->
<body class="bg-white dark:bg-gray-800">
  <div>%svelte.body%</div>
</body>
```

Finally, use the dark mode component to display a switcher (that is a button) for users to toggle dark mode manually. The best place to put this component is in the root layout:

```svelte example
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode />
```

## Initial theme

Use `class="dark"` to set the initial theme to the dark mode. The default mode is `light`.

```html
<html class="dark" lang="en"></html>
```

## Switcher style

Use `class` attribute to append classes to the default classes:

```svelte example
{#include Switcher.svelte}
```

## Mode icon

Use the `lightIcon` and `darkIcon` slots to change icons:

```svelte example
{#include Icon.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Dark Mode](https://flowbite.com/docs/customize/dark-mode/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
