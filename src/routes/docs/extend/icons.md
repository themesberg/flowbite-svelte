---
layout: componentLayout
breadcrumb_title: Icons
title: Svelte Icons - Flowbite
component_title: Svelte Icons
dir: Extend
description: Get started with a collection of over 430+ open-source icons built for Svelte and Flowbite and a collection of other external icon libraries to build beautiful websites
---

<script>
  import { P, A, List, Li } from '$lib'
  
	import CheckCircle from './CheckCircle.svelte'
</script>

Instead of using generic SVG icons, you can start using a custom Svelte icon library such as the open-source collection of Flowbite Icons that includes over 450+ outline and solid styles and is already available to import as Svelte components inside your project.

Check out the official [Flowbite Icons](https://flowbite.com/icons/) page and interface and learn how to install [Flowbite Svelte Icons](https://flowbite-svelte-icons.vercel.app/) inside your project by following the steps from this guide.

## Installation

To install the Flowbite Icons package in Svelte you need to set it up with NPM in your `package.json` file:

```sh
pnpm i -D flowbite-svelte-icons
```

## Usage example

Inside a Svelte file import any of the icons like this:

```html
<script>
  import { CalendarWeekSolid } from 'flowbite-svelte-icons';
</script>

<CalendarWeekSolid />
```

## Component data

Check out the list of properties that you can use to customize and update the icons from Flowbite Svelte.

### Outline

- size: ‘xs’ | ‘sm’ | ‘md’ | ‘lg’ | ‘xl’ = ‘md’;
- role: string = ‘img’;
- strokeLinecap: ‘round’ | ‘inherit’ | ‘butt’ | ‘square’ | null | undefined = ‘round’;
- strokeLinejoin: ‘round’ | ‘inherit’ | ‘miter’ | ‘bevel’ | null | undefined = ‘round’;
- strokeWidth = ‘2’;
- ariaLabel = ‘icon file name’;

### Solid

- size: ‘xs’ | ‘sm’ | ‘md’ | ‘lg’ | ‘xl’ = ‘md’;
- role: string = ‘img’;
- ariaLabel = ‘icon file name’;

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

The following table provides details about the available sizes for icons:

| Size | CSS Classes |
| ---- | ----------- |
| xs   | ‘w-3 h-3’   |
| sm   | ‘w-4 h-4’   |
| md   | ‘w-5 h-6’   |
| lg   | ‘w-6 h-6’   |
| xl   | ‘w-8 h-8’   |

To change the size of an icon, use the size prop and specify the desired size. For example:

```html
<CircleCheckSolid size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<CircleCheckSolid class="h-24 w-24 text-blue-700 me-4" />
```

## Creating a Default Global Icon Setting in Svelte

Please see more details on the [docs](https://flowbite-svelte-icons.vercel.app/)

## Tailwind CSS suport

Use the `class` prop to change size, colors and add additional css.

Here's an example of adding custom Tailwind CSS classes to an imported icon:

```html
<CircleCheckSolid class="h-24 w-24 text-blue-700 me-4" />
```

## Dark mode

If you want to support dark mode for the icons you need to use the `dark` variant classes from Tailwind CSS.

Here's an example of making the icon red in dark mode:

```html
<CircleCheckSolid class="text-blue-700 dark:text-red-500" />
```

## aria-label

All of the icons support `aria-label` for accessibilty - for example `BxAbacus` has `aria-label="bx abacus"`.

Use `ariaLabel` prop to modify the `aria-label` value.

```html
<CircleCheckSolid ariaLabel="circle check solid" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<CircleCheckSolid tabindex="-1" />
```

## Events

All of the icons from this library have the following events that you can use for programming:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

Here's an example of how you can pass an attribute:

```html
<CircleCheckSolid tabindex="0" />
```

## Using svelte:component

Here's an example how you can use `svelte:component` with Flowbite Icons in Svelte:

```html
<script>
  import { CircleCheckSolid } from 'flowbite-svelte-icons';
</script>

<svelte:component this="{CircleCheckSolid}" />
```

## Using onMount

Here's an example of how you can create the icon using `onMount` from Svelte:

```html
<script>
  import { CircleCheckSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new CircleCheckSolid({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon` from 'flowbite-svelte-icons..

```html
<script>
  import * as Icon from 'flowbite-svelte-icons';
</script>

<Icon.CircleCheckSolid />

<h1>Size</h1>
<Icon.CircleCheckSolid size="30" />

<h1>Tailwind CSS</h1>
<Icon.CircleCheckSolid class="text-blue-500" />
```

## Resources

These icon sets have the same functionalities mentioned above.

- [Flowbite Icons](https://flowbite.com/icons/) and [Flowbite Icons in Svelte](https://github.com/themesberg/flowbite-svelte-icons)
- [Svelte Icon Sets](https://svelte-svg-icons.vercel.app/)
