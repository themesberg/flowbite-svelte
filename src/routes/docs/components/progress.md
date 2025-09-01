---
layout: componentLayout
title: Svelte Progress Bar - Flowbite
breadcrumb_title: Svelte Progress bar
component_title: Progress
dir: Components
description: Use the progress bar component to show the completion rate of a data indicator or use it as a loader element
thumnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, Seealso, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = ['/docs/components/progress','/docs/extend/progressradial' ]
</script>

The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

## Setup

Import the `Progressbar` component in a script tag.

```svelte example hideOutput
<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>
```

## Default progress bar

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

```svelte example hideScript
{#include Default.svelte}
```

## Progressradial

Please see more details on [the extend page](/extend/progressradial).

```svelte example class="grid grid-cols-1"
{#include Progressradial.svelte}
```

## Sizes

Use the `size` prop to change the size of a progress bar.

```svelte example hideScript
{#include Sizes.svelte}
```

## With label inside

Use the `labelInside` prop to add the progress in a progress bar.

```svelte example hideScript
{#include LabelInside.svelte}
```

## With label outside

Use the `labelOutside` prop to add the progress outside of a progress bar.

```svelte example hideScript
{#include LabelOutside.svelte}
```

## Colors

Use the `color` prop to change the color of a progress bar.

```svelte example hideScript
{#include Colors.svelte}
```

## Custom style

Use `labelInsideDiv` prop to style your progressbar.

```svelte example hideScript
{#include CustomStyle.svelte}
```

## Animation

By default progress bar has animation disabled, you can activate with `animate`, you can custumize with `tweenDuration` and `easing`. By changing `precision` you can custumize the precision inside the progress bar.

```svelte example
{#include Animation.svelte}
```

## Custom color

Use the `labelInsideDiv` prop to change the color of the progress bar.

```svelte example
{#include CustomColor.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Progress Bar](https://flowbite.com/docs/components/progress/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
