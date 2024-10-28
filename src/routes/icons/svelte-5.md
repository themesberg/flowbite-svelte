---
layout: componentLayout
title: Svelte 5 Icons - Flowbite
breadcrumb_title: Svelte 5 Icons
component_title: Svelte 5 Icons
dir: Icons
description: Get started with a collection of open-source Svelte 5 powered icons built by the Flowbite community and based on the official design system
---

<script>
  import { Banner } from 'flowbite-svelte';
  import { A } from '$lib'
  import { removeHyphensAndCapitalize } from './utils/utils';
</script>

Use well over 500 SVG icons based on the open-source [Flowbite Icons](https://flowbite.com/icons/) library to power your Svelte application with optimized icons provided with both outline and solid styles. This page allows usage for Svelte 5 applications.

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/flowbite-svelte-icons/next?color=red" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/flowbite-svelte-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/flowbite-svelte-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/flowbite-svelte-icons.svg" alt="npm" ></a>
</div>

## Requirements

```markdown
- Svelte 5 or later
- TailwindCSS
- tailwind-merge
```

## Installation

Install Svelte and TailwindCSS:

```sh
npx sv create myapp
// select tailwindcss to install
cd myapp
```

Install `flowbite-svelte-icons`:

```sh
pnpm i -D flowbite-svelte-icons
```

## tailwind.config.cjs

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to `tailwind.config.cjs`.

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

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AddressBookOutline from 'flowbite-svelte-icons/AddressBookOutline.svelte';
</script>

<AddressBookOutline />
```

## Passing down other attributes

Since all icons have `{...restProps}` and extended <A href="https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts">`SVGAttributes<SVGSVGElement>`</A>, you can pass other attibutes.

```html
<AddressBookOutline
  id="my-svg"
  transform="rotate(45)"
  class="hover:cursor-pointer dark:text-white"
  onclick={() => alert('hello')}
/>
```

## Using onMount (Svelte 5 legacy mode)

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

## Props

All icons are extended <A href="https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts">`SVGAttributes<SVGSVGElement>`</A>  from svelte/elements.

```markdown
- size?: "xs" | "sm" | "md" | "lg" | "xl" = ctx.size || 'md';
- color?: string | undefined | null = ctx.color || 'currentColor'
- class?: string | undefined | null = ''
- ariaLabel?: string =  "<icon file name>"
- title?: TitleType
- desc?: DescType
- strokeWidth?: string | undefined | null = ctx.strokeWidth || '2' // only Outline icons
- ...restProps
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

## aria-label

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<AddressBookOutline ariaLabel="address card outline" />
```

## Custom Default Icons

You can create a custom default icon, by using `IconSolid` or `IconOutline`:

### Create a custom component

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import { IconOutline } from 'flowbite-svelte-icons';
  import { type Component } from 'svelte';
  const config: { size: IconOutline['Props']['size'], color: string, ariaLabel: string } = {
    size: "md",
    color: '#FF5733',
    ariaLabel: "my youtube icon",
  };
  interface Props {
    Icon: Component
  }

  let { Icon }: Props = $props();
</script>
<IconOutline {...config} {Icon} />

```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script lang="ts">
  import { AngleLeftOutline } from 'flowbite-svelte-icons';
  import MyIcon from 'path/to/MyIcon.svelte'
  const config: { size: IconOutline['Props']['size'], color: string, ariaLabel: string } = {
    size: "xl",
    color: '#FF5733',
    ariaLabel: "my addressbook icon",
  };
</script>

<MyIcon {...config} Icon={AngleLeftOutline} />
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
