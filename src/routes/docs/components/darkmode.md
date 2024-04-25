---
layout: componentLayout
title: Svelte Dark Mode - Flowbite
breadcrumb_title: Svelte Dark mode
component_title: Darkmode
dir: Components
description: Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the library
thumnailSize: w-24
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

In Flowbite-Svelte, the `class` strategy is used to support toggling dark mode manually, so you should explicitly configure it in Talwind CSS:

```js example
// tailwind.config.cjs
const config = {
  darkMode: 'class'
  // ...
};
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
<script>
  import { DarkMode } from 'flowbite-svelte';
</script>

<DarkMode />
```

## Initial theme

Use `class="dark"` to set the initial theme to the dark mode. The default mode is `light`.

```
<html class="dark" lang="en">
```

## Switcher style

Use the `btnClass` prop to overwrite the default classes:

```svelte example
<script>
  import { DarkMode } from 'flowbite-svelte';

  let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
</script>

<DarkMode {btnClass} />
```

Or just use `class` attribute to append classes to the default classes:

```svelte example
<script>
  import { DarkMode } from 'flowbite-svelte';
</script>

<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
```

## Mode icon

Use the `lightIcon` and `darkIcon` slots to change icons:

```svelte example
<script>
  import { DarkMode } from 'flowbite-svelte';
  import { ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';
</script>

<DarkMode class="text-lg">
    <ThumbsUpSolid slot="lightIcon" color="red" />
    <ThumbsDownSolid slot="darkIcon" color="green" />
</DarkMode>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### DarkMode styling

- Use the `class` prop to overwrite `btnClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Dark Mode](https://flowbite.com/docs/customize/dark-mode/)

<GitHubCompoLinks />
