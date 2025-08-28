---
layout: componentLayout
title: Svelte Buttons - Flowbite
breadcrumb_title: Svelte Buttons
component_title: Buttons
dir: Components
description: Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
thumnailSize: w-24
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, Seealso } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
 
  const relatedLinks = ['/docs/components/buttons','/docs/components/button-group' ,'/docs/components/list-group','/docs/utilities/close-button','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages.

flowbite-svelte provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.

## Setup

Import a button component in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Button } from "flowbite-svelte";
</script>
```

## Default button

Use these default button styles with multiple colors to indicate an action or link within your website.

```svelte example class="flex flex-wrap gap-2" hideScript
{#include Default.svelte}
```

## Button with link

You can add a link to a Button component:

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Link.svelte}
```

## Button pills

The button pills can be used as an alternative style by using fully rounded edges.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Pills.svelte}
```

## Gradient monochrome

These beautifully colored buttons built with the gradient color stops utility classes from Tailwind CSS can be used as a creative alternative to the default button styles.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Monochrome.svelte}
```

## Gradient duotone

These buttons use a style that includes two contrasted colors creating an impressive mesh gradient effect.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Duotone.svelte}
```

## Gradient outline

This is a special button style that incorporates a gradient color for the outline that can be used as a secondary style to the fully colored gradient buttons.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include GradientOutline.svelte}
```

## Colored shadows

These beautiful button elements with color shadows can be used since the release of Tailwind v3.0.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Colored.svelte}
```

## Outline buttons

Use the following button styles to show the colors only for the border of the element.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Outline.svelte}
```

## Button sizes with icons

Use these examples if you want to use smaller or larger buttons.

```svelte example class="space-y-2" hideScript hideResponsiveButtons
{#include Sizes.svelte}
```

## Button with icon

Use the following examples to add a SVG icon inside the button either on the left or right side.

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Icon.svelte}
```

## Button with label

This example can be used to show a notification count or helper text inside a button using the badge element.

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Label.svelte}
```

## Icon buttons

Sometimes you need a button to indicate an action using only an icon.

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include IconButton.svelte}
```

## Loader

Use the spinner components to indicate a loader animation inside buttons.

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Loader.svelte}
```

## Disabled

You can add any additional button attributes. The following example shows adding the `disabled` attribute.

```svelte example class="flex justify-center gap-2" hideScript hideResponsiveButtons
{#include Disabled.svelte}
```

## Events

You can use `onclick` or any standard `on*` to listen to the event.

```svelte example class="flex justify-center gap-2" hideResponsiveButtons
{#include Events.svelte}
```

## Loading State with Spinner

Use the `loading` prop to indicate a pending action (e.g. form submission). When `true`, the button is automatically disabled and shows a built-in spinner. This improves user feedback and prevents duplicate submissions.

```svelte example class="flex justify-center"
{#include Loading.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Buttons](https://flowbite.com/docs/components/buttons/)

<GitHubCompoLinks />
