---
layout: componentLayout
title: Svelte 4 Getting started - Flowbite Svelte Icons v1
breadcrumb_title: Svelte 4 Getting started
component_title: Svelte 4 Getting started
dir: Icons
description: Svelte 4 Getting started
---


<script>
  import { Banner } from 'flowbite-svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { removeHyphensAndCapitalize } from './utils/utils';
</script>

# Svelte 4 Getting started - Flowbite Svelte Icons v1

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" ></a>
</div>

## Requirements

```markdown
- Svelte 4 or 5 (without Runes)
- TailwindCSS
- tailwind-merge
```

## Installation

Install Svelte and TailwindCSS:

```sh
npm create svelte@latest my-project
cd my-project
npx svelte-add@latest tailwindcss
pnpm i
pnpm i -D flowbite-svelte-icons
```

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to tailwind.config.cjs.

```js
const config = {
  content: [
       // more lines
        "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    ],
    // more lines
}  
```

## Basic Usages

In a svelte file:

```html
<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
</script>

<AddressBookOutline />
```

## A11y friendly 

Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.

```html
<HeartSolid
  title={{ id: 'my-title', title: 'Red heart' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
  ariaLabel="red heart"
  color="red"
/>
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AddressBookOutline from 'flowbite-svelte-icons/AddressBookOutline.svelte';
</script>

<AddressBookOutline />
```

## Passing down other attributes

Since all icons have `{...$$restProps}`, you can pass other attibutes as well.

```html
<AddressBookOutline id="my-svg" transform="rotate(45)"/>
```

## Using svelte:component

```html
<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
</script>

<svelte:component this="{AddressBookOutline}" />
```

## Using onMount

```html
<script>
  import { AddressBookOutline } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new AddressBookOutline({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'flowbite-svelte-icons`.

```html
<script>
  import * as Icon from 'flowbite-svelte-icons';
</script>

<Icon.AddressBookOutline />

<h1>Size</h1>
<Icon.AddressBookOutline size="30" />

<h1>Tailwind CSS</h1>
<Icon.AddressBookOutline class="text-blue-500" />
```

## Outline Props

```markdown
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- role = ctx.role || 'img';
- withEvents = ctx.withEvents || false;
- title: TitleType = {};
- desc: DescType = {};
- strokeLinecap: 'round' | 'inherit' | 'butt' | 'square' | undefined =  ctx.strokeLinecap || 'round';
- strokeWidth = ctx.strokeWidth || '2';
- ariaLabel = '<icon file name>';
```

## Solid Props

```markdown
- size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
- role = ctx.role || 'img';
- color = ctx.color || 'currentColor';
- withEvents = ctx.withEvents || false;
- title: TitleType = {};
- desc: DescType = {};
- ariaLabel = '<icon file name>';
```

## Size

The following table provides details about the available sizes for icons:

```markdown
Size  CSS classes
xs    'w-3 h-3'
sm    'w-4 h-4'
md    'w-5 h-5'
lg    'w-6 h-6'
xl    'w-8 h-8'
```

To change the size of an icon, use the `size` prop and specify the desired size. For example:

```html
<AddressBookOutline size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<AddressBookOutline class="h-24 w-24 text-blue-700 mr-4" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<AddressBookOutline size="md" class="text-red-700 dark:text-green-300 inline m-1"/>

<div class="text-red-700 dark:text-green-300 inline m-1">
  <AddressBookOutline size="md" />
</div>
```

## CSS HEX Colors

Use the color attribute to change colors with HEX color code for Filled and Outlined components.

```html
<AddressBookOutline color="#ff0000" size="md"/> 
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AddressBookOutline class="text-blue-700 dark:text-red-500" />
```

## A11y

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AddressBookOutline ariaLabel="address card outline" />
```

Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.

```html
<HeartSolid
  title={{ id: 'my-title', title: 'Red heart' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
  ariaLabel="red heart"
  color="red"
/>
```

## withEvents

As default all icons are unfocusable. However you can add `withEvents` prop to make your icons focusable.

```html
<AddressBookOutline withEvents/>
<ArchiveSolid withEvents />
```

It is possible to add `tabindex="0"`, but it is not recommended for A11y.
If you want to use it add `withEvents` prop as well.

```html
<AddressBookOutline tabindex="0" withEvents/>
```

## Events

Use `withEvents` prop to use the following events:

```markdown
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
```

```html
<AddressBookOutline withEvents on:click={handleClick}/>
```

## Passing down other attributes

Since all icons have `{...$$restProps}`, you can pass other attibutes as well.

```html
<AddressBookOutline id="my-svg" transform="rotate(45)"/>
```

## Custom Default Icons

You can create a custom default icon, by using `IconSolid` or `IconOutline`:

### Create a custom component

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "xl",
    color: '#FF5733'
  };
  import { IconSolid } from 'flowbite-svelte-icons';
  export let icon: ComponentType;
</script>

<IconSolid {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { AngleLeftSolid } from 'flowbite-svelte-icons';
</script>

<MyIcon icon="{AngleLeftSolid}" />
```

Here, we import the `MyIcon` component and the `AngleLeftSolid` icon. By passing the `AngleLeftSolid` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## Setting Global Icon using setContext

You can create global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components.

### Setting preferences

In your `+layout.svelte` or `+page.svelte`, you can define and set global icon preferences as follows:

```html
<script>
  import { setContext } from 'svelte';

  // Define your global icon settings
  const iconCtx = {
    size: 'xl', // Icon size in pixels
  };
  setContext('iconCtx', iconCtx);
</script>
```

The `size`, and `role` (for solid icons) and `size`, `role`, `strokeLinecap`, `strokeLinejoin`, `strokeWidth` (for outline icons) properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

### Prop size

If you set `size`, icons can be customized with different color. For example:

```html
<script>
  import { setContext } from 'svelte';
  import { MapLocationOutline } from 'flowbite-svelte-icons';
  const iconCtx = {
    size: 'xl'
  };
  setContext('iconCtx', iconCtx);
</script>

<MapLocationOutline color="#ff4488" />
```

### Setting more than one props

Remember that you can set one or more properties, allowing you to tailor icon settings to your specific design and accessibility requirements.
