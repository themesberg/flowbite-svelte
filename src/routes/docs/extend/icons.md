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

Instead of using generic SVG icons, you can start using a custom Svelte icon library such as the open-source collection of Flowbite Icons that includes over 430+ outline and solid styles and is already available to import as Svelte components inside your project.

Check out the official [Flowbite Icons](https://flowbite.com/icons/) page and interface and learn how to install [Flowbite Svelte Icons](https://github.com/themesberg/flowbite-svelte-icons) inside your project by following the steps from this guide.

## Installation

To install the Flowbite Icons package in Svelte you need to set it up with NPM in your `package.json` file:

```sh
pnpm i -D flowbite-svelte-icons
```

## Usage example

Inside a Svelte file import any of the icons like this:

```html
<script>
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Icon name="address-card-solid" />
```

## Component data

Check out the list of properties that you can use to customize and update the icons from Flowbite Svelte.

- @prop name;
- @prop size = “xs” | “sm” | “md” | “lg” | “xl” = “md”;
- @prop role = “img”;
- @prop ariaLabel = ‘icon file name’;

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<Icon name="address-card-solid" size="40" />
```

## Tailwind CSS suport

Use the `class` prop to change size, colors and add additional css.

Here's an example of adding custom Tailwind CSS classes to an imported icon:

```html
<Icon name="address-card-solid" class="h-24 w-24 text-blue-700 mr-4" />
```

## Dark mode

If you want to support dark mode for the icons you need to use the `dark` variant classes from Tailwind CSS.

Here's an example of making the icon red in dark mode:

```html
<Icon name="address-card-solid" class="text-blue-700 dark:text-red-500" />
```

## aria-label

All of the icons support `aria-label` for accessibilty - for example `BxAbacus` has `aria-label="bx abacus"`.

Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="address-card-solid" ariaLabel="address card solid" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="address-card-solid" tabindex="-1" />
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
<Icon name="address-card-solid" tabindex="0" />
```

## Using svelte:component

Here's an example how you can use `svelte:component` with Flowbite Icons in Svelte:

```html
<script>
  import { Icon } from 'flowbite-svelte-icons';
</script>

<svelte:component this="{Icon}" name="address-card-solid" />
```

## Using onMount

Here's an example of how you can create the icon using `onMount` from Svelte:

```html
<script>
  import { Icon } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    name: 'address-card-solid',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```

## Import all

Use `import {Icon, icons} from 'flowbite-svelte-icons'`.

```html
<script>
  import { Icon, icons } from 'flowbite-svelte-icons';
</script>

<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
  {#each Object.keys(icons) as name}
  <div class="flex gap-4 items-center text-lg inline">
    <Icon name="{name}" size="md" class="inline" />
    {name}
  </div>
  {/each}
</div>
```

## Resources

These icon sets have the same functionalities mentioned above.

- [Flowbite Icons](https://flowbite.com/icons/) and [Flowbite Icons in Svelte](https://github.com/themesberg/flowbite-svelte-icons)
- [Svelte Icon Sets](https://svelte-svg-icons.vercel.app/)
