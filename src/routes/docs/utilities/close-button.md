---
layout: componentLayout
title: Svelte Close Button - Flowbite
breadcrumb_title: Svelte Close Button - Flowbite
component_title: Close button
dir: Utilities
description: Get started with the CloseButton components to hide a target element using Svelte interactivity
---

<script>
	import { TableProp, TableDefaultRow, GitHubSourceList, CompoAttributesViewer, Seealso } from '../../utils';
	import { A } from '$lib';

  const components = 'CloseButton'

	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';

  const relatedLinks = [
    {
      title: "Button component",
      url: "/docs/components/buttons",
      description: "With support for multiple styles, colors, sizes, gradients, and shadows"
    },
    {
      title: "ButtonGroup component",
      url: "/docs/components/button-group",
      description: "A set of buttons sticked together in a horizontal line"
    },
    {
      title: "CloseButton component",
      url: "/docs/utilities/close-button",
      description: "Hide a target element using Svelte interactivity"
    },
    {
      title: "RadioButton component",
      url: "/docs/forms/radio#radiobutton",
      description: "Use as standalone element or be wrapped inside ButtonGroup"
    },
    {
      title: "CheckboxButton component",
      url: "/docs/forms/checkbox#checkboxbutton",
      description: "Use as standalone element or be wrapped inside ButtonGroup"
    }
  ];
</script>

## CloseButton

Use `CloseButton` component to close a component.

```svelte example
<script>
  import { CloseButton } from "flowbite-svelte";
  let visible = $state(true);
</script>

{#if visible}
  <div id="banner" tabindex="-1" class="z-50 flex w-full items-start justify-between gap-8 border border-b border-gray-200 bg-gray-50 px-4 py-3 sm:items-center lg:py-4 dark:border-gray-700 dark:bg-gray-800">
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit dolor esse, cumque nesciunt?</p>
    <CloseButton onclick={() => (visible = false)} />
  </div>
{/if}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>
