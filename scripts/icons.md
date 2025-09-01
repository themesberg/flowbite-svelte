# Flowbite Svelte Icons

Machine-readable metadata for the `flowbite-svelte-icons` package.

## Package

- Name: `flowbite-svelte-icons`
- Description: A collection of Svelte 5 components for outline and solid icons with Tailwind sizing, color, and accessibility support.
- Source: https://github.com/themesberg/flowbite-svelte-icons

## Requirements

```md
- Svelte 5 or later
- TailwindCSS
- tailwind-merge
```

## Installation

```sh
pnpm i -D flowbite-svelte-icons
```

## app.css

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to `app.css`.

```js
@import "tailwindcss";
@source "../node_modules/flowbite-svelte-icons/dist";
```

## Basic Usages

In a svelte file:

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```svelte
<script lang="ts">
  import AddressBookOutline from "flowbite-svelte-icons/AddressBookOutline.svelte";
</script>

<AddressBookOutline />
```

## Passing down other attributes

Since all icons have `{...restProps}` and extended <A href="https://github.com/sveltejs/svelte/blob/main/packages/svelte/elements.d.ts">`SVGAttributes<SVGSVGElement>`</A>, you can pass other attibutes.

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline id="my-svg" transform="rotate(45)" class="hover:cursor-pointer dark:text-white" onclick="{()" ="">alert('hello')} /></AddressBookOutline>
```

## Using onMount

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  const props = {
    size: "50",
    color: "#ff0000"
  };
  onMount(() => {
    const icon = new AddressBookOutline({ target: document.body, props });
  });
</script>
```

## Import All Icons

Use `import * as Icon from 'flowbite-svelte-icons`.

```svelte
<script lang="ts">
  import * as Icon from "flowbite-svelte-icons";
</script>

<Icon.AddressBookOutline />
<Icon.AddressBookOutline size="30" class="text-blue-500" />
```

## Props

All icons are extended `SVGAttributes<SVGSVGElement>`.

```markdown
// outline
size = ctx.size || 'md',
color = ctx.color || 'currentColor',
title,
strokeWidth= ctx.strokeWidth || 2,
desc,  
class: className,
ariaLabel,
...restProps

// solid
size = ctx.size || 'md',
color = ctx.color || 'currentColor',
title,
desc,  
class: className,
ariaLabel,
...restProps
```

## Size

The following table provides details about the available sizes for icons:

```markdown
Size CSS classes
xs 'w-3 h-3'
sm 'w-4 h-4'
md 'w-5 h-5'
lg 'w-6 h-6'
xl 'w-8 h-8'
```

To change the size of an icon, use the `size` prop and specify the desired size. For example:

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline size="md" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline class="mr-4 h-24 w-24 text-blue-700" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline size="md" class="m-1 inline text-red-700 dark:text-green-300" />
<div class="m-1 inline text-red-700 dark:text-green-300">
  <AddressBookOutline size="md" />
</div>
```

## CSS HEX Colors

Use the color attribute to change colors with HEX color code for Filled and Outlined components.

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline color="#ff0000" size="md" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline class="text-blue-700 dark:text-red-500" />
```

## aria-label

Use `ariaLabel` prop to add the `aria-label` value.

```svelte
<script lang="ts">
  import { AddressBookOutline } from "flowbite-svelte-icons";
</script>

<AddressBookOutline ariaLabel="address card outline" />
```

## Custom Default Icons

You can create a custom default icon, by using `IconSolid` or `IconOutline`:

### Create a custom component

Create a Svelte component named `src/lib/MyIcon.svelte`:

```svelte
<script lang="ts">
  import { IconOutline } from "flowbite-svelte-icons";
  import { type Component } from "svelte";
  const config: { size: IconOutline["Props"]["size"]; color: string; ariaLabel: string } = {
    size: "md",
    color: "#FF5733",
    ariaLabel: "my youtube icon"
  };
  interface Props {
    Icon: Component;
  }

  let { Icon }: Props = $props();
</script>
<IconOutline {...config} {Icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```svelte
<script lang="ts">
  import { AngleLeftOutline } from "flowbite-svelte-icons";
  import MyIcon from "path/to/MyIcon.svelte";
  const config: { size: IconOutline["Props"]["size"]; color: string; ariaLabel: string } = {
    size: "xl",
    color: "#FF5733",
    ariaLabel: "my addressbook icon"
  };
</script>

<MyIcon {...config} Icon="{AngleLeftOutline}" />
```

Here, we import the `MyIcon` component and the `AngleLeftSolid` icon. By passing the `AngleLeftSolid` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## Setting Global Icon using setContext

You can create global icon preferences in your Svelte application using `setContext`. This allows you to configure icon-related properties once and share them across multiple components.

### Setting preferences

In your `+layout.svelte` or `+page.svelte`, you can define and set global icon preferences as follows:

```svelte
<script lang="ts">
  import { setContext } from "svelte";

  // Define your global icon settings
  const iconCtx = {
    size: "xl" // Icon size in pixels
  };
  setContext("iconCtx", iconCtx);
</script>
```

The `size`, and `role` (for solid icons) and `size`, `role`, `strokeLinecap`, `strokeLinejoin`, `strokeWidth` (for outline icons) properties are optional, allowing you to fine-tune the appearance and accessibility of your icons as needed.

### Prop size

If you set `size`, icons can be customized with different color. For example:

```svelte
<script lang="ts">
  import { setContext } from "svelte";
  import { MapLocationOutline } from "flowbite-svelte-icons";
  const iconCtx = {
    size: "xl"
  };
  setContext("iconCtx", iconCtx);
</script>

<MapLocationOutline color="#ff4488" />
```

### Setting more than one props

Remember that you can set one or more properties, allowing you to tailor icon settings to your specific design and accessibility requirements.

## types

```ts
import type { SVGAttributes } from 'svelte/elements';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TitleType =
  | {
      id: string;
      title?: string;
    }
  | undefined;

export type DescType =
  | {
      id: string;
      desc?: string;
    }
  | undefined;

export interface BaseProps extends SVGAttributes<SVGElement> {
  size?: Size;
  color?: string | null;
}

export interface OutlineBaseProps extends BaseProps {
  strokeWidth?: number | `${number}`;
}

export interface AccessibleProps {
  title?: TitleType;
  desc?: DescType;
  ariaLabel?: string;
}

export interface Props extends BaseProps, AccessibleProps {}

export interface OutlineProps extends OutlineBaseProps, AccessibleProps {}
```

## Components

The package includes 700+ outline and solid icons (e.g., AddressBookOutline, AdjustmentsHorizontalSolid, MapLocationOutline).
See the full list here: https://github.com/themesberg/flowbite-svelte-icons/blob/main/icon-names.md
