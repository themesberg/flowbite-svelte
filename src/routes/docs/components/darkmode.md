---
layout: componentLayout
title: Svelte Dark Mode - Flowbite
breadcrumb_title: Svelte Dark mode
component_title: Dark mode
dir: Components
description: Learn how to configure and build a dark mode switcher for Flowbite using Tailwind CSS and start developing with the components from the library
thumnailSize: w-24
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'
  import { props as items} from '../../props/DarkMode.json'
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

<DarkMode class="text-2xl" />
```

## Mode icon

Use the `lightIcon` and `darkIcon` slots to change icons:

```svelte example
<script>
  import { DarkMode } from 'flowbite-svelte';
</script>

<DarkMode class="text-lg">
  <svelte:fragment slot="lightIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"/></svg>
  </svelte:fragment>
  <svelte:fragment slot="darkIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"/></svg>
  </svelte:fragment>
</DarkMode>
```

## Props

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

- Use the `class` prop to overwrite  `btnClass`.

<TableProp>
<TableDefaultRow {items} rowState='hover' />
</TableProp>

## References

- [Flowbite Dark Mode](https://flowbite.com/docs/customize/dark-mode/)
